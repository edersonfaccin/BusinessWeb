import React from 'react';
import { Form, Input, Typography  } from 'antd';
import { IInput } from '../../interfaces/IForm';
import { UserOutlined } from '@ant-design/icons';

const { Text } = Typography;

const EmailInput = (props: IInput) => {

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
                        prefix={<UserOutlined />}
                        style={{
                            borderRadius: 10
                        }}
                        type={'email'}
                    />
            </Form.Item>
        </>
    )
};
  
export default EmailInput;