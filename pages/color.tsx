import React from 'react';
import CustomForm from '../src/components/customForm';
import SwitchInput from '../src/components/inputs/SwitchInput';
import TextInput from '../src/components/inputs/TextInput';
import CustomMenu from '../src/utils/customMenu';
import { IColorDefault, colorRules } from '../src/models/IColorModel';
import { CREATE_COLOR, GET_COLOR, UPDATE_COLOR } from '../src/graphql/color';

const Color = () => {

  return (
    <CustomMenu>
      <CustomForm list='colors' create={CREATE_COLOR} update={UPDATE_COLOR} 
        get={GET_COLOR} defaultData={IColorDefault}>
        <TextInput 
          label='Nome' 
          property="name"
          rules={colorRules.name}
        />
        <SwitchInput 
          label='Ativo' 
          property='active'
        />
      </CustomForm>
    </CustomMenu>
  )
}

export default Color