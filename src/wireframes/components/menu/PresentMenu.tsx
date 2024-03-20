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

    const getFrames = () => {
        let scripts: string[] = [];

        // Append script
        diagrams.map((diagram, index) => {
            scripts[index] = diagram.script ?? '';
        })

        return scripts.toString();
    }

    const getObject = () => {
        const slides = {
            fileName: fileName,
            backgroundColor: editor.color.toString(),
            size: [editor.size.x, editor.size.y]
        };

        let shapes: {[id: string]: any} = {};

        diagrams.map((diagram, _) => {
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
        });

        return {
            slide: slides,
            shape: shapes
        }
    }

    const fetchAPI = () => {
        const frames = getFrames();
        const { slide, shape } = getObject();

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
                    frames: frames,
                    shape: shape
                })
            })
                .then((response) => {
                    response.json();
                })
                .then((data) => {
                    console.log(data);
                    window.open(`http://localhost:8001/${fileName}.html`);
                })
                .catch((err) => {
                    messageApi.error(`${err}`);
                });
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
