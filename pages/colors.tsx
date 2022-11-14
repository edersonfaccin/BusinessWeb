import React from 'react';
import CustomList from '../src/components/customList';
import { LIST_COLORS, REMOVE_COLOR } from '../src/graphql/color';
import CustomMenu from '../src/utils/customMenu';
import { format } from 'date-fns';
import { Tag } from 'antd';

const Colors = () => {

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
        new={'color'} 
        report={'color_report'}
        columns={columns}
        method_list={LIST_COLORS}
        method_remove={REMOVE_COLOR}
      />
    </CustomMenu>
  )
}

export default Colors