import React from 'react';
import { Form, Input, Typography } from 'antd';
import { IInput } from '../../interfaces/IForm';

const { Text } = Typography;

const TextInput = (props: IInput) => {

    return (
      <>
        <Text>{props.label}</Text>
        <Form.Item
          style={{
            flexDirection: 'column',
            paddingRight: 2
          }}
          //label={props.label}
          colon={false}
          name={props.property}
          rules={props.rules}>
          <Input style={{
            borderRadius: 10
          }}/>
        </Form.Item>
      </>
    )
};

export default TextInput;