import { FundProjectionScreenOutlined, MoreOutlined } from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import type { MenuProps } from "antd";
import * as React from "react";
import { getDiagrams, getEditor, selectApplicationMode, setSidebarRightSize, useStore } from "@app/wireframes/model";
import { AnimationIcon, DesignIcon, IconOutline } from "@app/icons/icon";
import { useDispatch } from "react-redux";
import { AbstractControl } from "@app/wireframes/shapes/utils/abstract-control";
import * as svg from '@svgdotjs/svg.js';
import { getPlugin } from "@app/wireframes/shapes/utils/abstract-plugin";

export const PresentMenu = React.memo(() => {
    const html = document.querySelector('.editor-diagram')?.innerHTML;

    const fileName = new Date().getTime();
    const dispatch = useDispatch();
    const diagrams = useStore(getDiagrams);
    const editor = useStore(getEditor);
    const mode = useStore(s => s.ui.selectedApplicationMode);
    const SIDEBAR_RIGHT_WIDTH = 400;

    const fetchObject = () => {
        const slides = {
            fileName: fileName,
            backgroundColor: editor.color.toString(),
            size: [editor.size.x, editor.size.y]
        };

        let shapes: {[id: string]: any} = {};
        let scripts: string = "";

        diagrams.values.forEach((diagram, _) => {
            diagram.items.values.forEach((item) => {
                // Get id
                const id = !item.name ? `${item.id}` : `${item.name}`;

                // Get svg
                const svgControl = new AbstractControl(getPlugin(item.renderer));
                const svgElement: svg.Element = svgControl.render(item, undefined);
                const svgCode = svgElement.node.outerHTML;

                // Push object to parent map
                shapes[id] = svgCode;
            });

            // Append script
            scripts += diagram.script + '\n';
        });

        return {
            slide: slides,
            shape: shapes,
            script: scripts
        }
    }

    const fetchAPI = () => {
        const { slide, shape, script } = fetchObject();

        if ((html != undefined)) {
            fetch('http://localhost:5001', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                    fileName: slide.fileName,
                    size: slide.size,
                    backgroundColor: slide.backgroundColor,
                    script: script,
                    shape: shape
                })
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => {
                    console.log(err);
                });

            // Open new tab
            window.open(`http://localhost:8001/${fileName}.html`);
        } else {
            console.log(`${fileName}:\t Error! Cannot perform action.\n`);
        }
    }

    const flipMode = () => {
        if (mode == 'design') {
            dispatch(setSidebarRightSize(SIDEBAR_RIGHT_WIDTH));
            dispatch(selectApplicationMode('animation'));
        } else {
            dispatch(setSidebarRightSize(0));
            dispatch(selectApplicationMode('design'));
        }
    }

    const modeMenu: MenuProps['items'] = [
        { key: 'design', label: 'Design mode', icon: <IconOutline icon={DesignIcon} /> },
        { key: 'animation', label: 'Animation mode', icon: <IconOutline icon={AnimationIcon} /> },
    ];

    const modeMenuEvt: MenuProps['onClick'] = ({key}) => {
        if (key == 'design') {
            dispatch(setSidebarRightSize(0));
            dispatch(selectApplicationMode('design'));
        } else {
            dispatch(setSidebarRightSize(SIDEBAR_RIGHT_WIDTH));
            dispatch(selectApplicationMode('animation'));
        }
    };

    return (
        <>
            <Button
                className='header-mode'
                style={{ borderRadius: '50% 0 0 50%', borderRight: '0' }}
                shape='circle'
                onClick={flipMode} >
                    { (mode == 'animation') 
                        ? <IconOutline icon={AnimationIcon} /> 
                        : <IconOutline icon={DesignIcon} />
                    }
            </Button>
            <Dropdown 
                menu={{ items: modeMenu, selectable: true, selectedKeys: [mode], onClick: modeMenuEvt }} 
                trigger={['click']}>
                    <Button 
                        className='header-mode'
                        icon={<MoreOutlined />}
                        style={{ borderRadius: '0 16px 16px 0', borderLeft: 0, width: 24, minWidth: 24 }} 
                        shape='circle' />
            </Dropdown>
            <span className='menu-separator' />
            <Button icon={<FundProjectionScreenOutlined />} onClick={fetchAPI} className="header-cta-right" type="text" shape='round'>
                <h4>Present</h4>
            </Button>
        </>
    )
});
