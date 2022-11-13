import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import CustomList from '../src/components/customList';
import { LIST_COLORS, REMOVE_COLOR } from '../src/graphql/color';
import CustomMenu from '../src/utils/customMenu';
import { format } from 'date-fns';
import { Tag } from 'antd';

const Colors = () => {

  const [ removeColor, { data: del } ] = useMutation(REMOVE_COLOR);
  const { loading, error, data, refetch } = useQuery(LIST_COLORS, { 
    variables: { 
      limit: 10, 
      offset: 0 
    }
  });

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

  const remove = (_id: string) => {
    removeColor({variables: { _id: _id }});

    refetch({
      limit: 10, 
      offset: 0 
    })
  }

  return (
    <CustomMenu>
      <CustomList 
        new={'color'} 
        report={'color_report'} 
        rendering={loading}
        columns={columns}
        data={data?.colorspage}
        remove={remove}
      />
    </CustomMenu>
  )
}

export default Colors