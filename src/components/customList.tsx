import React, { useState } from 'react';
import { Button, Space, Table, Breadcrumb, Modal, Pagination } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import router from 'next/router'
import { useMutation, useQuery } from '@apollo/client';

interface ICustomList {
  new: string
  report: string
  columns: any[]
  method_list: any
  method_remove: any
}

const CustomList = (props: ICustomList) => {

  const [ open, setOpen ] = useState(false);
  const [ id, setId ] = useState<string>('')
  const [ removeRecord, { data: del } ] = useMutation(props.method_remove);
  const { loading, error, data, refetch } = useQuery(props.method_list, { 
    variables: { 
      limit: 10, 
      offset: 0 
    },
    notifyOnNetworkStatusChange: true
  });
  
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

    removeRecord({variables: { _id: id }});

    refetch({
      limit: 10, 
      offset: 0
    })
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
console.log(loading)
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
        dataSource={data ? data[Object.keys(data)[0]].results : []}
        loading={loading}
        pagination={false}
      />

      <Pagination 
        defaultCurrent={3} 
        total={data ? data[Object.keys(data)[0]].count : 0} 
        showSizeChanger={false}
        showQuickJumper={false}
        showTotal={total => `Total ${data ? data[Object.keys(data)[0]].count : 0} items`}
      />
    </>
  )
}

export default CustomList;