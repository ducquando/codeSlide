/*
 * mydraft.cc
 *
 * @license
 * Copyright (c) Sebastian Stehle. All rights reserved.
*/

/* eslint-disable @typescript-eslint/no-loop-func */

import { ActionReducerMapBuilder, createAction } from '@reduxjs/toolkit';
import { IDHelper, Rotation, Vec2 } from '@app/core';
import { Appearance } from '@app/wireframes/interface';
import { Diagram, DiagramItem, DiagramItemSet, EditorState, RendererService, Serializer, Transform } from './../internal';
import { createDiagramAction, createItemsAction, DiagramRef, ItemsRef } from './utils';


export const addShape =
    createAction('items/addShape', (diagram: DiagramRef, renderer: string, props: { position?: { x: number; y: number }; size?: { x: number; y: number }; appearance?: Appearance } = {}, id?: string) => {
        return { payload: createDiagramAction(diagram, { id: id || IDHelper.nextId(renderer), renderer, ...props }) };
    });

export const lockItems =
    createAction('items/lock', (diagram: DiagramRef, items: ItemsRef) => {
        return { payload: createItemsAction(diagram, items) };
    });

export const unlockItems =
    createAction('items/unlock', (diagram: DiagramRef, items: ItemsRef) => {
        return { payload: createItemsAction(diagram, items) };
    });

export const selectItems =
    createAction('items/select', (diagram: DiagramRef, items: ItemsRef) => {
        return { payload: createItemsAction(diagram, items) };
    });

export const removeItems =
    createAction('items/remove', (diagram: DiagramRef, items: ItemsRef) => {
        return { payload: createItemsAction(diagram, items) };
    });

export const resetIDItems =
    createAction('items/resetID', (diagram: DiagramRef, items: ItemsRef, id: string) => {
        return { payload: createItemsAction(diagram, items, { id }) };
    });

export const pasteItems =
    createAction('items/paste', (diagram: DiagramRef, json: string, offsetByX = 0, offsetByY = 0) => {
        return { payload: createDiagramAction(diagram, { json: Serializer.tryGenerateNewIds(json), offsetByX, offsetByY }) };
    });

export function buildItems(builder: ActionReducerMapBuilder<EditorState>) {
    return builder
        .addCase(selectItems, (state, action) => {
            const { diagramId, itemIds } = action.payload;

            return state.updateDiagram(diagramId, diagram => {
                return diagram.selectItems(itemIds);
            });
        })
        .addCase(removeItems, (state, action) => {
            const { diagramId, itemIds } = action.payload;

            return state.updateDiagram(diagramId, diagram => {
                const set = DiagramItemSet.createFromDiagram(itemIds, diagram);

                return diagram.removeItems(set!);
            });
        })
        .addCase(lockItems, (state, action) => {
            const { diagramId, itemIds } = action.payload;

            return state.updateDiagram(diagramId, diagram => {
                const set = DiagramItemSet.createFromDiagram(itemIds, diagram);

                return diagram.updateItems(set.allItems.map(x => x.id), item => {
                    return item.lock();
                });
            });
        })
        .addCase(unlockItems, (state, action) => {
            const { diagramId, itemIds } = action.payload;

            return state.updateDiagram(diagramId, diagram => {
                const set = DiagramItemSet.createFromDiagram(itemIds, diagram);

                return diagram.updateItems(set.allItems.map(x => x.id), item => {
                    return item.unlock();
                });
            });
        })
        .addCase(resetIDItems, (state, action) => {
            const { diagramId, itemIds, id } = action.payload;

            return state.updateDiagram(diagramId, diagram => {
                return diagram.updateItems(itemIds, item => {
                    return item.resetID(id);
                });
            });
        })
        .addCase(pasteItems, (state, action) => {
            const { diagramId, json, offsetByX, offsetByY } = action.payload;

            return state.updateDiagram(diagramId, diagram => {
                const set = Serializer.deserializeSet(JSON.parse(json));

                diagram = diagram.addItems(set);

                diagram = diagram.updateItems(set.allShapes.map(x => x.id), item => {
                    const boundsOld = item.bounds(diagram);
                    const boundsNew = boundsOld.moveBy(boundsOld.size.mul(new Vec2(offsetByX, offsetByY)));

                    return item.transformByBounds(boundsOld, boundsNew);
                });
                
                diagram = diagram.selectItems(set.rootIds);

                return diagram;
            });
        })
        .addCase(addShape, (state, action) => {
            const { diagramId, appearance, id, position, renderer, size } = action.payload;

            return state.updateDiagram(diagramId, diagram => {
                const rendererInstance = RendererService.get(renderer);

                const { size: defaultSize, appearance: defaultAppearance, ...other } = rendererInstance.createDefaultShape();

                const initialSize = size || defaultSize;
                const initialProps = {
                    ...other,
                    id,
                    transform: new Transform(
                        new Vec2(
                            (position?.x || 0) + 0.5 * initialSize.x, 
                            (position?.y || 0) + 0.5 * initialSize.y),
                        new Vec2(
                            initialSize.x,
                            initialSize.y), 
                        Rotation.ZERO),
                    appearance: { ...defaultAppearance || {}, ...appearance },
                };

                const shape = DiagramItem.createShape(initialProps);

                return diagram.addShape(shape).selectItems([id]);
            });
        });
}

export function calculateSelection(items: DiagramItem[], diagram: Diagram, isSingleSelection?: boolean, isCtrl?: boolean): string[] {
    if (!items) {
        return [];
    }

    let selectedItems: DiagramItem[] = [];

    function resolveGroup(item: DiagramItem, stop?: DiagramItem) {
        while (true) {
            const group = diagram.parent(item.id);

            if (!group || group === stop) {
                break;
            } else {
                item = group;
            }
        }

        return item;
    }

    if (isSingleSelection) {
        if (items.length === 1) {
            const single = items[0];

            if (single) {
                const singleId = single.id;

                if (isCtrl) {
                    if (!single.isLocked) {
                        if (diagram.selectedIds.has(singleId)) {
                            return diagram.selectedIds.remove(singleId).values;
                        } else {
                            return diagram.selectedIds.add(resolveGroup(single).id).values;
                        }
                    } else {
                        return diagram.selectedIds.values;
                    }
                } else {
                    const group = diagram.parent(single.id);

                    if (group && diagram.selectedIds.has(group.id)) {
                        selectedItems.push(resolveGroup(single, group));
                    } else {
                        selectedItems.push(resolveGroup(single));
                    }
                }
            }
        }
    } else {
        const selection: { [id: string]: DiagramItem } = {};

        for (let item of items) {
            if (item) {
                item = resolveGroup(item);

                if (!selection[item.id]) {
                    selection[item.id] = item;
                    selectedItems.push(item);
                }
            }
        }
    }

    if (selectedItems.length > 1) {
        selectedItems = selectedItems.filter(i => !i.isLocked);
    }

    return selectedItems.map(i => i.id);
}
