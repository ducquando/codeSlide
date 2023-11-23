/*
 * mydraft.cc
 *
 * @license
 * Copyright (c) Sebastian Stehle. All rights reserved.
*/

import { createAction, createReducer } from '@reduxjs/toolkit';
import { message } from 'antd';
import { NoticeType } from 'antd/lib/message';
import { AnyAction, Dispatch, Middleware, Reducer } from 'redux';
import { UIState } from './../internal';

export const showToast =
    createAction('ui/infoToast', (content: string, type?: NoticeType, key?: string, delayed = 1000) => {
        return { payload: { content, type, key, delayed } };
    });

export const setZoom =
    createAction('ui/zoom', (zoom: number) => {
        return { payload: { zoom } };
    });

export const selectColorTab =
    createAction('ui/colorTab', (tab: string) => {
        return { payload: { tab } };
    });

export const selectPanel =
    createAction('ui/panel', (tab: string) => {
        return { payload: { tab } };
    });

export const selectTab =
    createAction('ui/tab', (tab: string) => {
        return { payload: { tab } };
    });

export const filterDiagrams =
    createAction('ui/diagrams/filter', (filter: string) => {
        return { payload: { filter } };
    });

export const togglePanel =
    createAction('ui/togglePanel', () => {
        return { payload: { } };
    });

export const toggleRightSidebar =
    createAction('ui/toggleRightSidebar', () => {
        return { payload: { } };
    });

export function toastMiddleware() {
    const middleware: Middleware = () => (next: Dispatch<AnyAction>) => (action: any) => {
        if (showToast.match(action)) {
            const { content, delayed, key, type } = action.payload;

            setTimeout(() => {
                message.open({ content, key, type: type || 'info' });
            }, delayed);
        }

        return next(action);
    };

    return middleware;
}

export function ui(initialState: UIState): Reducer<UIState> {
    return createReducer(initialState, builder => builder
        .addCase(filterDiagrams, (state, action) => {
            state.diagramsFilter = action.payload.filter;
        })
        .addCase(setZoom, (state, action) => {
            state.zoom = action.payload.zoom;
        })
        .addCase(selectPanel, (state, action) => {
            state.selectedPanel = action.payload.tab;
        })
        .addCase(selectTab, (state, action) => {
            state.selectedTab = action.payload.tab;
        })
        .addCase(selectColorTab, (state, action) => {
            state.selectedColorTab = action.payload.tab;
        })
        .addCase(togglePanel, (state) => {
            state.showPanel = !state.showPanel;
        })
        .addCase(toggleRightSidebar, (state) => {
            state.showRightSidebar = !state.showRightSidebar;
        }));
}
