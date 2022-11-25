import React from 'react';
import CustomList from '../src/components/customList';
import { LIST_COUNTRIES, REMOVE_COUNTRY, REPORT_COUNTRIES } from '../src/graphql/country';
import CustomMenu from '../src/utils/customMenu';
import { format } from 'date-fns';
import { Tag } from 'antd';

const Countries = () => {

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
    dataIndex: 'name',
    key: 'name'
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
        new={'country'} 
        columns={columns}
        method_list={LIST_COUNTRIES}
        method_remove={REMOVE_COUNTRY}
        method_report={REPORT_COUNTRIES}
        columnsReport={columnsReport}
        titleReport={'Relatório de paises'}
      />
    </CustomMenu>
  )
}

export default Countries