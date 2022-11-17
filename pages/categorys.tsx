import React from 'react';
import CustomList from '../src/components/customList';
import { LIST_CATEGORYS, REMOVE_CATEGORY, REPORT_CATEGORYS } from '../src/graphql/category';
import CustomMenu from '../src/utils/customMenu';
import { format } from 'date-fns';
import { Tag } from 'antd';

const Categorys = () => {

  const columnsReport = [{
    field: 'name',
    label: 'Nome',
    position: 'left',
    type: 'string',
    width: '*'
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
        new={'category'} 
        columns={columns}
        method_list={LIST_CATEGORYS}
        method_remove={REMOVE_CATEGORY}
        method_report={REPORT_CATEGORYS}
        columnsReport={columnsReport}
        titleReport={'Relatório de Categorias'}
      />
    </CustomMenu>
  )
}

export default Categorys