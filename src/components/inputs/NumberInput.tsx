import React from 'react';
import { Form, InputNumber, Typography } from 'antd';
import { IInput } from '../../interfaces/IForm';

const { Text } = Typography;

const NumberInput = (props: IInput) => {
    
    return (
        <>
            <Text>{props.label}</Text>
            <Form.Item 
                style={{
                    flexDirection: 'column',
                    paddingRight: 2
                }}
                colon={false}
                name={props.property}
                rules={props.rules}>
                <InputNumber style={{
                    borderRadius: 10
                }}/>
            </Form.Item>
        </>
    );
};
  
export default NumberInput;