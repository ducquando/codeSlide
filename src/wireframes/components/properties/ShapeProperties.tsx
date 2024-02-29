/*
 * codeslide.net
 *
 * @license
 * Copyright (c) Sebastian Stehle. All rights reserved.
*/

import { Col, Input, Row } from 'antd';
import * as React from 'react';
import { texts } from '@app/texts';
import { getDiagram, getSelectedItems, useStore, renameItems } from '@app/wireframes/model';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export const ShapeProperties = React.memo(() => {
    const dispatch = useDispatch();
    const diagram = useStore(getDiagram);
    const [ selectedItem ] = useStore(getSelectedItems);
    const name = !selectedItem ? '' : !selectedItem.name ? selectedItem.id : selectedItem.name;
    const [itemID, setItemID] = useState<string>(name);

    const renameItem = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newName = event.target.value;
        console.log(newName);
        setItemID(newName);
        dispatch(renameItems(diagram!, [selectedItem.id], newName));
    };

    React.useEffect(() => {
        const name = !selectedItem ? '' : !selectedItem.name ? selectedItem.id : selectedItem.name;
        setItemID(name);
    }, [selectedItem, renameItem]);

    return (
        <>
            <Row className='property'>
                <Col span={4} className='property-label'>{texts.common.id}</Col>
                <Col span={20} className='property-value'>
                    <Input 
                        value={itemID} 
                        onChange={renameItem}
                    />
                </Col>
            </Row>
        </>
    );
});
