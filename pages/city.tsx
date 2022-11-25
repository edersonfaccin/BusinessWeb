import React from 'react';
import CustomForm from '../src/components/customForm';
import SwitchInput from '../src/components/inputs/SwitchInput';
import TextInput from '../src/components/inputs/TextInput';
import CustomMenu from '../src/utils/customMenu';
import { ICityDefault, cityRules } from '../src/models/ICityModel';
import { CREATE_CITY, GET_CITY, UPDATE_CITY } from '../src/graphql/city';
import SelectInput from '../src/components/inputs/SelectInput';
import { LIST_STATES } from '../src/graphql/state';

const City = () => {

  return (
    <CustomMenu>
      <CustomForm list='cities' create={CREATE_CITY} update={UPDATE_CITY} 
        get={GET_CITY} defaultData={ICityDefault}>
        <TextInput 
          label='Nome' 
          property="name"
          rules={cityRules.name}
        />
        <SelectInput 
          label='Estado' 
          property="idstate"
          list={LIST_STATES}
          description={'name'}
          rules={cityRules.idstate}
        />
        <SwitchInput 
          label='Ativo' 
          property='active'
        />
      </CustomForm>
    </CustomMenu>
  )
}

export default City