import React from 'react';
import { DatePicker, Form } from 'antd';
import { IInput } from '../../interfaces/IForm';

const DateInput = (props: IInput) => {
    
    return (
        <Form.Item
            label={props.label}
            colon={false}
            rules={[{
                required: props.required,
            }]}>
            <DatePicker />
        </Form.Item>
    );
};
  
export default DateInput;