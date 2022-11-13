import React from 'react';
import { Breadcrumb, Button, Form, Spin } from 'antd';
import { CheckOutlined, LoadingOutlined } from '@ant-design/icons';
import router from 'next/router'

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

interface ICustomForm {
  children: any
  rendering: boolean
  onSave: any
  list: any
}

const CustomForm = (props: ICustomForm) => {
    
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

      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        validateMessages={validateMessages}
        size={"middle"}>
          {
            <Spin tip="Aguarde" spinning={props.rendering}>
              { props.children }
            </Spin>
          }
        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button 
            type="primary" 
            icon={props.rendering ? <LoadingOutlined /> : <CheckOutlined />}
            onClick={props.onSave}>
            Salvar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CustomForm;