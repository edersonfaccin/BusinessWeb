import React from 'react';
import CustomForm from '../src/components/customForm';
import SwitchInput from '../src/components/inputs/SwitchInput';
import TextInput from '../src/components/inputs/TextInput';
import CustomMenu from '../src/utils/customMenu';
import { groupRules, IGroupDefault } from '../src/models/IGroupModel';
import { CREATE_GROUP, GET_GROUP, UPDATE_GROUP } from '../src/graphql/group';

const Group = () => {
  
  return (
    <CustomMenu>
      <CustomForm list='groups' create={CREATE_GROUP} update={UPDATE_GROUP} 
        get={GET_GROUP} defaultData={IGroupDefault}>
        <TextInput 
          label='Nome' 
          property="name"
          rules={groupRules.name}
        />
        <SwitchInput 
          label='Ativo' 
          property='active'
        />
      </CustomForm>
    </CustomMenu>
  )
}

export default Group