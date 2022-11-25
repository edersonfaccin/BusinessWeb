import React, { useEffect, useState } from 'react';
import { Divider, Form, message, Pagination, Select, Typography } from 'antd';
import { ISelect } from '../../interfaces/IForm';
import useAuthData from '../../data/hook/useAuthData';
import { useQuery } from '@apollo/client';

const { Text } = Typography;

const SelectInput = (props: ISelect) => {
    const { user } = useAuthData()
  
    const [ page, setPage ] = useState<number>(1)
    const [ count, setCount ]  = useState<number>(0)
    const { loading, error, data, refetch } = useQuery(props.list, {
      context: { headers: { Authorization: `Bearer ${user?.access_token}` } },
      variables: { 
        limit: 10, 
        offset: ((page - 1) * 10)
      },
      notifyOnNetworkStatusChange: true
    });
    
    const [ records, setRecords ] = useState<any>([])

    useEffect(() => {
      const auxCount = data ? data[Object.keys(data)[0]].count : 0
      const results = data ? data[Object.keys(data)[0]].results : []
  
      if(error){
        message.error(error.message, 6);
      }else{
        setCount(auxCount)
        setRecords(results)
      }
    }, [data, error])

    return (
      <>
        <Text>{props.label}</Text>
        <Form.Item
          name={props.property}
          colon={false}
          rules={props.rules}>
          <Select
          dropdownRender={menu => (
            <div>
              {menu}
              <Divider style={{ margin: "4px 0" }} />
              <div style={{ padding: "8px", textAlign: "center" }}>
                <Pagination
                  simple
                  current={page}
                  total={count}
                  onChange={pageIndex => {
                    setPage(pageIndex)
                  }}
                />
              </div>
            </div>
          )}>
            {
              records.map((item: any, idx: number) => {
                return  (
                  <Select.Option value={item._id} key={idx}>{item[props.description]}</Select.Option>
                )
              })
            }
          </Select>
        </Form.Item>
      </>
    );
};
  
export default SelectInput;