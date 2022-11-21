import React from 'react';
import { Form, Input, Typography } from 'antd';
import { IInput } from '../../interfaces/IForm';

const { Text } = Typography;

const TextInput = (props: IInput) => {

    return (
        <Form.Item 
            label={props.label}
            colon={false}
            rules={props?.rules}>
                <Input 
                    style={{ 
                        borderRadius: 8
                    }}
                    value={props.value} 
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
  
export default TextInput;