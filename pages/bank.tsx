import React from 'react';
import CustomForm from '../src/components/customForm';
import SwitchInput from '../src/components/inputs/SwitchInput';
import TextInput from '../src/components/inputs/TextInput';
import CustomMenu from '../src/utils/customMenu';
import { IBankDefault, bankRules } from '../src/models/IBankModel';
import { CREATE_BANK, GET_BANK, UPDATE_BANK } from '../src/graphql/bank';
import NumberInput from '../src/components/inputs/NumberInput';

const Bank = () => {

  return (
    <CustomMenu>
      <CustomForm list='banks' create={CREATE_BANK} update={UPDATE_BANK} 
        get={GET_BANK} defaultData={IBankDefault}>
        <TextInput 
          label='Nome' 
          property="name"
          rules={bankRules.name}
        />
        <NumberInput 
          label='Codigo' 
          property="code"
          rules={bankRules.code}
        />
        <SwitchInput 
          label='Ativo' 
          property='active'
        />
      </CustomForm>
    </CustomMenu>
  )
}

export default Bank