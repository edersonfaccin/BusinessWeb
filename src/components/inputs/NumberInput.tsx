import React from 'react';
import { Form, InputNumber } from 'antd';
import { IInput } from '../../interfaces/IForm';
  
const NumberInput = (props: IInput) => {
    
    return (
        <Form.Item 
            //name={[props.collection, props.field]}
            label={props.label}
            rules={[{
                required: props.required,
            }]}>
            <InputNumber />
        </Form.Item>
    );
};
  
export default NumberInput;