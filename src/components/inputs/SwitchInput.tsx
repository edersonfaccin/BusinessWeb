import React from 'react';
import { Form, Switch } from 'antd';
import { IInput } from '../../interfaces/IForm';

const SwitchInput = (props: IInput) => {
    
    return (
        <Form.Item
            label={props.label}
            colon={false}
            name={props.property}
            rules={props.rules}>
            <Switch defaultChecked/>
        </Form.Item>
    );
};
  
export default SwitchInput;