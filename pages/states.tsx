import React from 'react';
import CustomList from '../src/components/customList';
import { LIST_STATES, REMOVE_STATE, REPORT_STATES } from '../src/graphql/state';
import CustomMenu from '../src/utils/customMenu';
import { format } from 'date-fns';
import { Tag } from 'antd';

const States = () => {

  const columnsReport = [{
    field: 'name',
    label: 'Nome',
    position: 'left',
    type: 'string',
    width: '*'
  }, {
    field: 'uf',
    label: 'UF',
    position: 'left',
    type: 'string',
    width: '40'
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
    title: 'UF',
    dataIndex: 'uf',
    key: 'uf'
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
        new={'state'} 
        columns={columns}
        method_list={LIST_STATES}
        method_remove={REMOVE_STATE}
        method_report={REPORT_STATES}
        columnsReport={columnsReport}
        titleReport={'Relatório de estados'}
      />
    </CustomMenu>
  )
}

export default States