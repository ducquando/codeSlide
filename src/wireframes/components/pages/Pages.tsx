/*
 * mydraft.cc
 *
 * @license
 * Copyright (c) Sebastian Stehle. All rights reserved.
*/

import * as React from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { useEventCallback, Vec2 } from '@app/core';
import { addDiagram, duplicateDiagram, getDiagramId, getFilteredDiagrams, moveDiagram, removeDiagram, selectDiagram, useStore } from '@app/wireframes/model';
import { PageThumbnail, PageAdd, PageAction } from './Page';
import './Pages.scss';

export interface PagesProps {
    // Preview width;
    prevWidth: number;

    // Preview height
    prevHeight: number
}

export const Pages = (props: PagesProps) => {
    const { prevWidth, prevHeight } = props;
    const viewSize = new Vec2(prevWidth, prevHeight);

    const dispatch = useDispatch();
    const diagramId = useStore(getDiagramId);
    const diagrams = useStore(getFilteredDiagrams);
    
    const doAddDiagram = useEventCallback(() => {
        dispatch(addDiagram());
    });

    const doAction = useEventCallback((diagramId: string, action: PageAction, arg?: any) => {
        switch (action) {
            case 'Delete':
                dispatch(removeDiagram(diagramId));
                break;
            case 'Duplicate':
                dispatch(duplicateDiagram(diagramId, arg.index));
                break;
            case 'Add':
                dispatch(addDiagram(undefined, arg.index));
                break;
            case 'Select':
                dispatch(selectDiagram(diagramId));
                break;
        }
    });

    const doSort = useEventCallback((result: DropResult) => {
        dispatch(moveDiagram(result.draggableId, result.destination!.index));
    });

    return (
        <div className='pages-container'>
            <DragDropContext onDragEnd={doSort}>
                <Droppable droppableId='droppable' direction='horizontal'>
                    {(provided) => (
                        <div className='pages-list' {...provided.droppableProps} ref={provided.innerRef} >
                            {diagrams.map((item, index) =>
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided) => (
                                        <div ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            >
                                            <PageThumbnail diagram={item} pageIndex={index + 1} cardWidth={viewSize.x} cardHeight={viewSize.y} selected={item.id === diagramId} onAction={doAction} />
                                        </div>
                                    )}
                                </Draggable>
                            )}
                            {provided.placeholder}
                            <PageAdd cardWidth={viewSize.x} cardHeight={viewSize.y} onClick={doAddDiagram} />
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};
