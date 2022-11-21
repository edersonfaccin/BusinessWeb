import React from 'react';
import { Form, Input, Typography  } from 'antd';
import { IInput } from '../../interfaces/IForm';
import { UserOutlined } from '@ant-design/icons';

const { Text } = Typography;

const EmailInput = (props: IInput) => {

    return (
        <Form.Item 
            label={props.label}
            colon={false}
            rules={[{
                required: props.required || false,
            }]}>
                <Input 
                    prefix={<UserOutlined />}
                    value={props.value} 
                    type={'email'}
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
  
export default EmailInput;