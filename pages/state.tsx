import React from 'react';
import CustomForm from '../src/components/customForm';
import SwitchInput from '../src/components/inputs/SwitchInput';
import TextInput from '../src/components/inputs/TextInput';
import CustomMenu from '../src/utils/customMenu';
import { IStateDefault, stateRules } from '../src/models/IStateModel';
import { CREATE_STATE, GET_STATE, UPDATE_STATE } from '../src/graphql/state';
import SelectInput from '../src/components/inputs/SelectInput';
import { LIST_COUNTRIES } from '../src/graphql/country';

const State = () => {

  return (
    <CustomMenu>
      <CustomForm list='states' create={CREATE_STATE} update={UPDATE_STATE} 
        get={GET_STATE} defaultData={IStateDefault}>
        <TextInput 
          label='Nome' 
          property="name"
          rules={stateRules.name}
        />
        <SelectInput 
          label='Pais' 
          property="idcountry"
          list={LIST_COUNTRIES}
          description={'name'}
          rules={stateRules.idcountry}
        />
        <SwitchInput 
          label='Ativo' 
          property='active'
        />
      </CustomForm>
    </CustomMenu>
  )
}

export default State