import React from 'react';
import CustomForm from '../src/components/customForm';
import SwitchInput from '../src/components/inputs/SwitchInput';
import TextInput from '../src/components/inputs/TextInput';
import CustomMenu from '../src/utils/customMenu';
import { ICountryDefault, countryRules } from '../src/models/ICountryModel';
import { CREATE_COUNTRY, GET_COUNTRY, UPDATE_COUNTRY } from '../src/graphql/country';

const Country = () => {

  return (
    <CustomMenu>
      <CustomForm list='countries' create={CREATE_COUNTRY} update={UPDATE_COUNTRY} 
        get={GET_COUNTRY} defaultData={ICountryDefault}>
        <TextInput 
          label='Nome' 
          property="name"
          rules={countryRules.name}
        />
        <SwitchInput 
          label='Ativo' 
          property='active'
        />
      </CustomForm>
    </CustomMenu>
  )
}

export default Country