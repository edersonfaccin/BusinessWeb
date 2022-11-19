import React from 'react';
import CustomList from '../src/components/customList';
import { LIST_COMPANIES, REMOVE_COMPANY, REPORT_COMPANIES } from '../src/graphql/company';
import CustomMenu from '../src/utils/customMenu';
import { format } from 'date-fns';
import { Tag } from 'antd';

const Companies = () => {

  const columnsReport = [{
    field: 'name',
    label: 'Nome',
    position: 'left',
    type: 'string',
    width: '*'
  }, {
    field: 'nick_name',
    label: 'Nome fantasia',
    position: 'left',
    type: 'string',
    width: 80
  }, {
    field: 'address',
    label: 'Endereco',
    position: 'left',
    type: 'string',
    width: 80
  }, {
    field: 'city',
    label: 'Cidade',
    position: 'left',
    type: 'string',
    width: 80
  }, {
    field: 'date_register',
    label: 'Data registro',
    position: 'center',
    type: 'datetime',
    width: 80
  }, {
    field: 'active',
    label: 'Ativo',
    position: 'left',
    type: 'boolean',
    width: 80
  }]

  const columns = [{
    title: 'Name',
    dataIndex: 'name'
  }, {
    title: 'Nome fantasia',
    dataIndex: 'nick_name'
  }, {
    title: 'Endereco',
    dataIndex: 'address'
  }, {
    title: 'Cidade',
    dataIndex: 'city'
  }, {
    title: 'Active',
    dataIndex: 'active',
    render: (active: boolean) => {
      return active ? <Tag color="green">Sim</Tag> : <Tag color="red">Nao</Tag>
    }
  }, {
    title: 'Date register',
    dataIndex: 'date_register',
    render: (date_register: Date) => {
      if(date_register) return format(new Date(date_register), 'dd/MM/uuuu HH:mm')

      return (<p>--/--/----</p>)
    }
  }]

  return (
    <CustomMenu>
      <CustomList 
        new={'company'} 
        columns={columns}
        method_list={LIST_COMPANIES}
        method_remove={REMOVE_COMPANY}
        method_report={REPORT_COMPANIES}
        columnsReport={columnsReport}
        titleReport={'Relatório de Companhias'}
      />
    </CustomMenu>
  )
}

export default Companies