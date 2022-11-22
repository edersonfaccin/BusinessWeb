import React from 'react';
import CustomForm from '../src/components/customForm';
import SwitchInput from '../src/components/inputs/SwitchInput';
import TextInput from '../src/components/inputs/TextInput';
import CustomMenu from '../src/utils/customMenu';
import { IUnitDefault, unitRules } from '../src/models/IUnitModel';
import { CREATE_UNIT, GET_UNIT, UPDATE_UNIT } from '../src/graphql/unit';

const Unit = () => {
  
  return (
    <CustomMenu>
      <CustomForm list='units' create={CREATE_UNIT} update={UPDATE_UNIT} 
        get={GET_UNIT} defaultData={IUnitDefault}>
        <TextInput 
          label='Nome' 
          property="name"
          rules={unitRules.name}
        />
        <TextInput 
          label='Sigla' 
          property="initials"
          rules={unitRules.initials}
        />
        <SwitchInput 
          label='Ativo' 
          property='active'
        />
      </CustomForm>
    </CustomMenu>
  )
}

export default Unit