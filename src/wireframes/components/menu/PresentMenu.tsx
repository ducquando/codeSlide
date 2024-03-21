import { FundProjectionScreenOutlined } from "@ant-design/icons";
import { Button, Segmented, message } from "antd";
import * as React from "react";
import { getFilteredDiagrams, getEditor, setMode, setSidebarRightSize, useStore } from "@app/wireframes/model";
import { AnimationIcon, DesignIcon, IconOutline } from "@app/icons/icon";
import { useDispatch } from "react-redux";
import { AbstractControl } from "@app/wireframes/shapes/utils/abstract-control";
import * as svg from '@svgdotjs/svg.js';
import { getPlugin } from "@app/wireframes/shapes/utils/abstract-plugin";
import { SegmentedValue } from "antd/es/segmented";

export const PresentMenu = React.memo(() => {
    const html = document.querySelector('.editor-diagram')?.innerHTML;
    const SIDEBAR_RIGHT_WIDTH = 400;

    const fileName = new Date().getTime();
    const dispatch = useDispatch();
    const diagrams = useStore(getFilteredDiagrams);
    const editor = useStore(getEditor);
    const [messageApi, contextHolder] = message.useMessage();

    const getSlides = () => {
        // Get frames
        let frame3D: string[][][] = new Array(diagrams.length);
        diagrams.map((diagram, i) => {
            const frames = diagram.frames ?? [];
            frame3D[i] = [];
            frames.map((frame, j) => {
                frame3D[i][j] = [];
                frame.map((id, _) => {
                    const item = diagram.items.get(id);
                    if (!item) return;
                    
                    // Get svg
                    const svgControl = new AbstractControl(getPlugin(item.renderer));
                    const svgElement: svg.Element = svgControl.render(item, undefined);
                    const svgCode = svgElement.node.outerHTML;

                    // Push object to parent map
                    frame3D[i][j].push(svgCode);
                })
            })
        })

        // Reshape from 3D to 2D
        let frame2D = [];
        for (let row of frame3D) for (let e of row) frame2D.push(e);

        return {
            backgroundColor: editor.color.toString(),
            size: [editor.size.x, editor.size.y],
            frame: frame2D,
        };
    }

    const fetchAPI = () => {
        const { size, backgroundColor, frame } = getSlides();

        if ((html != undefined)) {
            fetch('http://localhost:5001', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                    fileName: fileName,
                    size: size,
                    backgroundColor: backgroundColor,
                    frame: frame,
                })
            })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => {
                    messageApi.error(`${err}`);
                });

                window.open(`http://localhost:8001/${fileName}.html`);
        } else {
            messageApi.error('Empty slide. Cannot perform action');
        }
    }

    const modeMenu = [
        { value: 'design', icon: <IconOutline icon={DesignIcon} /> },
        { value: 'animation', icon: <IconOutline icon={AnimationIcon} /> },
    ];

    const modeMenuEvt = (key: SegmentedValue) => {
        if (key == 'design') {
            dispatch(setSidebarRightSize(0));
            dispatch(setMode('design'));
        } else {
            dispatch(setSidebarRightSize(SIDEBAR_RIGHT_WIDTH));
            dispatch(setMode('animation'));
        }
    };

    return (
        <>
            <Segmented 
                options={modeMenu}
                onChange={(value) => modeMenuEvt(value)}
            />
            <span className='menu-separator' />
            {contextHolder}
            <Button icon={<FundProjectionScreenOutlined />} onClick={fetchAPI} className="header-cta-right" type="text" shape='round'>
                <h4>Present</h4>
            </Button>
        </>
    )
});
