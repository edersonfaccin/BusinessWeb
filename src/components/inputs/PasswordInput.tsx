import React from 'react';
import { Form, Input, Typography  } from 'antd';
import { IInput } from '../../interfaces/IForm';
import { LockOutlined } from '@ant-design/icons';

const { Text } = Typography;

const PasswordInput = (props: IInput) => {

    return (
        <Form.Item 
            label={props.label}
            colon={false}
            rules={[{
                required: props.required || false,
            }]}>
                <Input 
                    prefix={<LockOutlined />}
                    value={props.value} 
                    type={'password'}
                    onChange={props.onChange}
                />
                {
                    props?.textError && props?.invalid ? (
                        <Text type="danger">{props?.textError}</Text>
                    ) : null
                }
        </Form.Item>
    )
};
  
export default PasswordInput;