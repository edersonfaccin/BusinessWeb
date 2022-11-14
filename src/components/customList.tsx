import React, { useState } from 'react';
import { Button, Space, Table, Breadcrumb, Modal, Pagination } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import router from 'next/router'

interface ICustomList {
  new: string
  report: string
  rendering: boolean
  columns: any[]
  data: any[]
  count: number
  remove: any
}

const CustomList = (props: ICustomList) => {

  const [ open, setOpen ] = useState(false);
  const [ id, setId ] = useState<string>('')
  
  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const columns: ColumnsType<any> = [{
    title: 'Edit',
    key: 'action',
    render: (_: any, record: any) => (
      <Space size="middle">
        <EditOutlined onClick={() => onEdit(record)} style={{
          color: 'blue',
          cursor: 'pointer'
        }}/>
      </Space>
    )
  },
    ...props.columns,
  {
    title: 'Remove',
    key: 'action',
    render: (_: any, record: any) => (
      <Space size="middle">
        <DeleteOutlined onClick={() => onRemove(record)} style={{
          color: 'red',
          cursor: 'pointer'
        }}/>
      </Space>
    )
  }];
  
  const onNew = () => {
    router.push({
      pathname: props.new
    })
  }

  const onEdit = (item: any) => {
    router.push({
      pathname: props.new,
      query: {
        _id: item._id
      }
    })
  }

  const onRemove = (item: any) => {
    setId(item._id)
    showModal()
  }

  const confirmRemove = () => {
    hideModal()

    props.remove(id)
  }

  const onReport = () => {
    router.push({
      pathname: props.report
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
          <Breadcrumb.Item>Lista</Breadcrumb.Item>
      </Breadcrumb>
      <Space style={{ marginBottom: 16 }}>
          <Button onClick={onNew}>Novo</Button>
          <Button onClick={onReport}>Relatório</Button>
      </Space>

      <Modal
        title="Confirmar"
        open={open}
        onOk={confirmRemove}
        onCancel={hideModal}
        okText="Confirmar"
        cancelText="Cancelar">
        <p>Confirma remocao do registro?</p>
      </Modal>
      
      <Table 
        columns={columns} 
        dataSource={props.data}
        loading={props.rendering}
        pagination={false}
      />

      <Pagination 
        defaultCurrent={3} 
        total={props.count} 
        showSizeChanger={false}
        showQuickJumper={false}
        showTotal={total => `Total ${props.count} items`}
      />
    </>
  )
}

export default CustomList;