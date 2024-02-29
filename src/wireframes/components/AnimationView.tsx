import * as React from "react";
import { getDiagram, useStore, changeScript } from "@app/wireframes/model";
import { useDispatch } from "react-redux";
import './styles/AnimationView.scss';

export const AnimationView = () => {
    const dispatch = useDispatch();
    const diagram = useStore(getDiagram);

    if (!diagram) {
        return null;
    }

    const selectedScript = diagram.script ?? '';
    const changeTextbox = (event: any) => {
        const newCode = event.target.value;
        dispatch(changeScript(diagram.id, newCode));
    };

    return (
        <div className='code-container'>
            <div className="code-editor">
                <textarea value={selectedScript} onChange={changeTextbox} />
            </div>
        </div>
    );
};