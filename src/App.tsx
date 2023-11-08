/*
 * mydraft.cc
 *
 * @license
 * Copyright (c) Sebastian Stehle. All rights reserved.
*/

import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Layout } from 'antd';
import classNames from 'classnames';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { ClipboardContainer, useEventCallback } from '@app/core';
import { ArrangeMenu, AnimationView, ClipboardMenu, EditorView, HistoryMenu, LoadingMenu, LockMenu,  Properties, ShapeMenu, TableMenu } from '@app/wireframes/components';
import { loadDiagramFromServer, newDiagram, toggleRightSidebar, useStore } from '@app/wireframes/model';

import { CustomDragLayer } from './wireframes/components/CustomDragLayer';
import { PresentationView } from './wireframes/components/PresentationView';
import { OverlayContainer } from './wireframes/contexts/OverlayContext';

const logo = require('./images/logo.svg').default;

export const App = () => {
    const dispatch = useDispatch();
    const route = useRouteMatch();
    const routeToken = route.params['token'] || null;
    const routeTokenSnapshot = React.useRef(routeToken);

    const showRightSidebar = useStore(s => s.ui.showRightSidebar);
    const [presenting, setPresenting] = React.useState(false);

    // const [
    //     print,
    //     printReady,
    //     isPrinting,
    //     ref,
    // ] = usePrinter();

    React.useEffect(() => {
        const token = routeTokenSnapshot.current;

        if (token && token.length > 0) {
            dispatch(loadDiagramFromServer({ tokenToRead: token, navigate: false }));
        } else {
            dispatch(newDiagram(false));
        }
    }, [dispatch]);

    // React.useEffect(() => {
    //     if (isPrinting) {
    //         dispatch(showToast(texts.common.printingStarted));
    //     }
    // }, [dispatch, isPrinting]);

    const doToggleRightSidebar = useEventCallback(() => {
        dispatch(toggleRightSidebar());
    });

    const doEdit = useEventCallback(() => {
        setPresenting(false);
    });

    // const doPresent = useEventCallback(() => {
    //     setPresenting(true);
    // });

    return (
        <OverlayContainer>
            <ClipboardContainer>
                <Layout className='screen-mode'>
                    <Layout.Header>
                        <img className='logo' src={logo} alt='mydraft.cc' />

                        <HistoryMenu />
                        <span className='menu-separator' />

                        <LockMenu />
                        <span className='menu-separator' />

                        <ArrangeMenu />
                        <span className='menu-separator' />

                        <ClipboardMenu />
                        <span className='menu-separator' />

                        {/* <UIMenu onPlay={doPresent} />
                        <span className='menu-separator' /> */}

                        <TableMenu />
                        {/* <span className='menu-separator' />

                        <SettingsMenu onPrint={print} /> */}

                        <span style={{ float: 'right' }}>
                            <LoadingMenu />
                        </span>
                    </Layout.Header>
                    <Layout className='content'>
                        <Layout.Sider width={50} className='sidebar-left'>
                            <ShapeMenu />

                        </Layout.Sider>

                        <Layout.Content className='editor-content'>
                            <EditorView spacing={40} />
                        </Layout.Content>
                        <Layout.Sider width={330} className='sidebar-right'
                            collapsed={!showRightSidebar}
                            collapsedWidth={0}>

                            <Properties />
                        </Layout.Sider>

                        <Button icon={showRightSidebar ? <RightOutlined /> : <LeftOutlined />}
                            className={classNames('toggle-button-right', { visible: showRightSidebar })}
                            size='small'
                            shape='circle'
                            onClick={doToggleRightSidebar} />
                    </Layout>
                    <AnimationView />
                </Layout>

                {presenting &&
                    <PresentationView onClose={doEdit} />
                }

                {/* {isPrinting &&
                    <div className='print-mode' ref={ref}>
                        <PrintView onRender={printReady} />
                    </div>
                } */}

                <CustomDragLayer />
            </ClipboardContainer>
        </OverlayContainer>
    );
};
