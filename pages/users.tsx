import React from 'react';
import CustomList from '../src/components/customList';
import { LIST_USERS, REMOVE_USER, REPORT_USERS } from '../src/graphql/user';
import CustomMenu from '../src/utils/customMenu';
import { format } from 'date-fns';
import { Tag } from 'antd';

const Users = () => {

  const columnsReport = [{
    field: 'name',
    label: 'Nome',
    position: 'left',
    type: 'string',
    width: '*'
  }, {
    field: 'email',
    label: 'Email',
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
    dataIndex: 'name',
    key: 'name'
  }, {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
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
        new={'user'} 
        columns={columns}
        method_list={LIST_USERS}
        method_remove={REMOVE_USER}
        method_report={REPORT_USERS}
        columnsReport={columnsReport}
        titleReport={'Relatório de Usuarios'}
      />
    </CustomMenu>
  )
}

export default Users