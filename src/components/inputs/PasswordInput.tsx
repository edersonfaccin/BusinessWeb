import React from 'react';
import { Form, Input, Typography  } from 'antd';
import { IInput } from '../../interfaces/IForm';
import { LockOutlined } from '@ant-design/icons';

const { Text } = Typography;

const PasswordInput = (props: IInput) => {

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
                    <Input 
                        prefix={<LockOutlined />}
                        type={'password'}
                        style={{
                            borderRadius: 10
                        }}
                    />
            </Form.Item>
        </>
    )
};
  
export default PasswordInput;