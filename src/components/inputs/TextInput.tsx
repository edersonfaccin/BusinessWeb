import React from 'react';
import { Form, Input } from 'antd';
import { IInput } from '../../interfaces/IForm';

const TextInput = (props: IInput) => {

    return (
        <Form.Item
          label={props.label}
          colon={false}
          name={props.property}
          rules={props.rules}>
          <Input />
        </Form.Item>
    )
};
  
export default TextInput;