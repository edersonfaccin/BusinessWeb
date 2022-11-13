import React from 'react';
import { DatePicker, Form } from 'antd';
import { IInput } from '../../interfaces/IForm';

const DateInput = (props: IInput) => {
    
    return (
        <Form.Item
            //name={[props.collection, props.field]}
            label={props.label}
            rules={[{
                required: props.required,
            }]}>
            <DatePicker />
        </Form.Item>
    );
};
  
export default DateInput;