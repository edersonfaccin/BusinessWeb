import React from 'react';
import { Form, Input } from 'antd';
import { IInput } from '../../interfaces/IForm';

const TextInput = (props: IInput) => {

    return (
        <Form.Item 
            label={props.label}
            rules={[{
                required: props.required || false,
            }]}>
                <Input 
                    value={props.value} 
                    onChange={props.onChange}
                    status={props?.invalid ? "error" : ""}
                    placeholder={props?.textError}
                />
        </Form.Item>
    )
};
  
export default TextInput;