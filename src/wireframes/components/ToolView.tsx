import { DiagramItem, setSidebarLeftSize } from '@app/wireframes/model';
import * as React from 'react';
import { ClipboardMenu } from './menu/ClipboardMenu';
import { TableMenu } from './menu/TableMenu';
import { GroupingMenu } from './menu/GroupingMenu';
import './styles/ToolView.scss';
import { HistoryMenu, VisualMenu, ZoomMenu } from './menu';
import { Button } from 'antd';
import { ArrowsAltOutlined, FullscreenExitOutlined, SelectOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export interface ToolDesignViewProps {
    item: DiagramItem | null;
    set: DiagramItem[] | null;
}

const FullscreenButton = () => {
    const SIDEBAR_LEFT_WIDTH = 200; 
    const dispatch = useDispatch();
    const [isFullscreen, setIsFullscreen] = useState(false);

    const hideSidebar = () => {
        if (isFullscreen) {
            dispatch(setSidebarLeftSize(SIDEBAR_LEFT_WIDTH));
            setIsFullscreen(!isFullscreen);
        } else {
            dispatch(setSidebarLeftSize(0));
            setIsFullscreen(!isFullscreen);
        }
    }

    return (
        <Button 
            type='text' shape='circle' 
            className='tool-toggle' 
            icon={isFullscreen ? <FullscreenExitOutlined /> : <ArrowsAltOutlined />}
            onClick={hideSidebar} />
    )
}

export const ToolDesignView = (props: ToolDesignViewProps) => {
    const { item, set } = props;

    return (
        <div className='tool-container'>
            <FullscreenButton />
            <div className='tool-menu'>
                <HistoryMenu />
                <span className='menu-separator' />
                <ZoomMenu />
                <span className='menu-separator' />

                {(set != null && set.length > 1) && 
                    <>
                        <GroupingMenu />
                        <span className='menu-separator' />
                    </>
                }

                <ClipboardMenu canCopy={(set != null && set.length > 1) || item != null} />

                {(item != null) && 
                    <>
                        <span className='menu-separator' />
                        <VisualMenu />
                    </>
                }

                {(item != null && item.renderer == 'Table') && 
                    <>
                        <span className='menu-separator' />
                        <TableMenu />
                    </>
                }
            </div>
        </div>
    )
};

export const ToolAnimationView = () => {
    return (
        <div className='tool-container'>
            <FullscreenButton />
            <Button 
                type='text' shape='rounded' 
                className='tool-cta' 
                icon={<SelectOutlined />}>
                    <h4>Load script</h4>
            </Button>
            <div className='tool-menu'>
                <HistoryMenu />
                <span className='menu-separator' />
                <ZoomMenu />
            </div>
        </div>
    )
};