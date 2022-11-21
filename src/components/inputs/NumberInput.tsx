import React from 'react';
import { Form, InputNumber } from 'antd';
import { IInput } from '../../interfaces/IForm';
  
const NumberInput = (props: IInput) => {
    
    return (
        <Form.Item 
            label={props.label}
            colon={false}
            rules={[{
                required: props.required,
            }]}>
            <InputNumber />
        </Form.Item>
    );
};
  
export default NumberInput;