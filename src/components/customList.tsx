import React, { useEffect, useState } from 'react';
import { Button, Space, Table, Breadcrumb, Modal, Pagination, message } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { EditOutlined, DeleteOutlined, PrinterOutlined, PlusOutlined } from '@ant-design/icons';
import router from 'next/router'
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { GeneratePDF } from '../utils/printerUtil';

interface ICustomList {
  new: string
  columns: any[]
  columnsReport: any[]
  method_list: any
  method_remove: any
  method_report: any
  titleReport: string
}

const CustomList = (props: ICustomList) => {

  const [ open, setOpen ] = useState(false);
  const [ id, setId ] = useState<string>('')
  const [ page, setPage ] = useState<number>(1)
  const [ count, setCount ]  = useState<number>(0)
  const [ records, setRecords ] = useState<any>([])
  const [ removeRecord, { data: del } ] = useMutation(props.method_remove);
  const { loading, error, data, refetch } = useQuery(props.method_list, { 
    variables: { 
      limit: 10, 
      offset: ((page - 1) * 10)
    },
    notifyOnNetworkStatusChange: true
  });
  const [ loadReport, { 
    error: errorReport, 
    data: dataReport
  }] = useLazyQuery(props.method_report, {
    variables: {},
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'no-cache'
  });

  useEffect(() => {
    const auxCount = data ? data[Object.keys(data)[0]].count : 0

    setCount(auxCount)
    setRecords(data ? data[Object.keys(data)[0]].results : [])
  }, [data])

  useEffect(()  => {
    if(dataReport) {
      GeneratePDF(props.titleReport, props.columnsReport, dataReport ? dataReport[Object.keys(dataReport)[0]] : [], [], true)
    }
  }, [dataReport])
  
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
      <Space size="small">
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
      <Space size="small">
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
    try {
      hideModal()

      removeRecord({variables: { _id: id }});

      refetch({
        limit: 10, 
        offset: 0
      })
    } catch (error) {
      hideModal()
      message.error(error?.toString());
    }
  }

  const onReport = () => {
    loadReport()
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
          <Button 
            type={'primary'} 
            icon={<PlusOutlined />}
            onClick={onNew}>
              Novo
            </Button>
          <Button 
            type={'default'} 
            icon={<PrinterOutlined />}
            onClick={onReport}>
              Relatório
            </Button>
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
        dataSource={records}
        loading={loading}
        pagination={false}
      />

      <Pagination 
        defaultCurrent={page > 0 ? page : 1} 
        total={count} 
        showSizeChanger={false}
        showQuickJumper={false}
        showTotal={total => `Total ${count} items`}
        onChange={(newPage) => setPage(newPage)}
      />
    </>
  )
}

export default CustomList;