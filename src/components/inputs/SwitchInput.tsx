import React from 'react';
import { Form, Switch } from 'antd';
import { IInput } from '../../interfaces/IForm';

const SwitchInput = (props: IInput) => {
    
    return (
        <Form.Item
            label={props.label}
            colon={false}
            rules={[{
                required: props.required,
            }]}>
            <Switch onChange={props.onChange} checked={props.value}/>
        </Form.Item>
    );
};
  
export default SwitchInput;