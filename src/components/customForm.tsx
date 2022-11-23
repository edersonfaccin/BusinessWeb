import React, { useEffect, useState } from 'react';
import { Breadcrumb, Button, Form, message, Spin } from 'antd';
import { CheckOutlined, LoadingOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'
import { useMutation, useQuery } from '@apollo/client';
import useAuthData from '../data/hook/useAuthData';

interface ICustomForm {
  children: any
  list: any
  get: any
  create: any
  update: any
  defaultData: any
}

const CustomForm = (props: ICustomForm) => {
  const router = useRouter()
  const { user } = useAuthData()

  const [ data, setData ] = useState<any>(props.defaultData);
  const [ rendering, setRendering ] = useState<boolean>(true);
  const [ create ] = useMutation(props.create, {
    context: { headers: { Authorization: `Bearer ${user?.access_token}` } },
  });
  const [ update ] = useMutation(props.update, {
    context: { headers: { Authorization: `Bearer ${user?.access_token}` } },
  });

  const { loading, error, data: dataRetrieve } = router.query?._id ? useQuery(props.get, { 
    context: { headers: { Authorization: `Bearer ${user?.access_token}` } },
    variables: { 
      _id: router.query?._id
    }
  }) : { loading: false, error: null, data: null };

  useEffect(() => {
    setRendering(true)

    if(router.query?._id){
      setData(dataRetrieve ? dataRetrieve[Object.keys(dataRetrieve)[0]] : props.defaultData)
    }

    setTimeout(() => {
      setRendering(false)
    }, 1500);
  }, [loading])
    
  const onGoToList = () => {
    router.push({
      pathname: props.list
    })
  }

  const onGoToHome = () => {
    router.push({
      pathname: '/'
    })
  }

  const onFinish = (values: any) => {
    try {
      setRendering(true)

      if(router.query?._id){
        update({variables: { ...values, ...{_id: router.query?._id} }});
      }else{
        create({variables: { ...values }});
      }

      setRendering(false)
      router.back()
    } catch (error) {
      message.error(error?.toString());
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  if(rendering) return null

  return (
    <>
      <Breadcrumb separator=">" style={{
            paddingBottom: 24,
            cursor: 'pointer'
          }}>
          <Breadcrumb.Item onClick={onGoToHome}>Home</Breadcrumb.Item>
          <Breadcrumb.Item onClick={onGoToList}>Lista</Breadcrumb.Item>
          <Breadcrumb.Item>Cadastro</Breadcrumb.Item>
      </Breadcrumb>

      <Spin tip="Aguarde" spinning={rendering}>
        <Form
          //labelCol={{ span: 2 }}
          //wrapperCol={{ span: 18 }}
          initialValues={data}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off">
            { props.children }
          <Form.Item /*wrapperCol={{ offset: 6, span: 6 }}*/>
            <Button type="primary" htmlType="submit" 
              icon={rendering ? <LoadingOutlined /> : <CheckOutlined />}>
              Salvar
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </>
  );
};

export default CustomForm;