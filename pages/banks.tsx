import React from 'react';
import CustomList from '../src/components/customList';
import { LIST_BANKS, REMOVE_BANK, REPORT_BANKS } from '../src/graphql/bank';
import CustomMenu from '../src/utils/customMenu';
import { format } from 'date-fns';
import { Tag } from 'antd';

const Banks = () => {

  const columnsReport = [{
    field: 'name',
    label: 'Nome',
    position: 'left',
    type: 'string',
    width: '*'
  }, {
    field: 'code',
    label: 'Codigo',
    position: 'right',
    type: 'number',
    width: 40
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
    dataIndex: 'name',
    key: 'name'
  }, {
    title: 'Codigo',
    dataIndex: 'code',
    key: 'code'
  }, {
    title: 'Active',
    dataIndex: 'active',
    key: 'active',
    render: (active: boolean) => {
      return active ? <Tag color="green">Sim</Tag> : <Tag color="red">Nao</Tag>
    }
  }, {
    title: 'Date register',
    dataIndex: 'date_register',
    key: 'date_register',
    render: (date_register: Date) => {
      if(date_register) return format(new Date(date_register), 'dd/MM/uuuu HH:mm')

      return (<p>--/--/----</p>)
    }
  }]

  return (
    <CustomMenu>
      <CustomList 
        new={'bank'} 
        columns={columns}
        method_list={LIST_BANKS}
        method_remove={REMOVE_BANK}
        method_report={REPORT_BANKS}
        columnsReport={columnsReport}
        titleReport={'Relatório de Bancos'}
      />
    </CustomMenu>
  )
}

export default Banks