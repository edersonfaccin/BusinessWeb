import React from 'react';
import { Form, Select } from 'antd';
import { ISelect } from '../../interfaces/IForm';

const SelectInput = (props: ISelect) => {
    
    return (
        <Form.Item
            name={[props.collection, props.field]}
            label={props.label}
            rules={[{
                required: props.required,
            }]}>
            <Select>
                {
                    props.list.map((item: any, idx: number) => {
                        return  (
                            <Select.Option value={item.value} key={idx}>{item.label}</Select.Option>
                        )
                    })
                }
            </Select>
        </Form.Item>
    );
};
  
export default SelectInput;