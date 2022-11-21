import React from 'react';
import CustomForm from '../src/components/customForm';
import SwitchInput from '../src/components/inputs/SwitchInput';
import TextInput from '../src/components/inputs/TextInput';
import CustomMenu from '../src/utils/customMenu';
import { companyRules, ICompanyDefault } from '../src/models/ICompanyModel';
import { CREATE_COMPANY, GET_COMPANY, UPDATE_COMPANY } from '../src/graphql/company';
import { Col, Row } from 'antd';

const Company = () => {
  
  return (
    <CustomMenu>
      <CustomForm list='companies' create={CREATE_COMPANY} update={UPDATE_COMPANY} 
        get={GET_COMPANY} defaultData={ICompanyDefault}>

        <TextInput 
          label='Nome' 
          property="name"
          rules={companyRules.name}
        />

        <TextInput 
          label='Nome fantasia' 
          property="nick_name"
          rules={companyRules.nick_name}
        />

        <TextInput 
          label='CNPJ' 
          property="national_identifier"
          rules={companyRules.national_identifier}
        />

        <TextInput 
          label='Inscricao estadual' 
          property="state_identifier"
          rules={companyRules.state_identifier}
        />
        
        <SwitchInput 
          label='Ativo' 
          property='active'
        />
      </CustomForm>
    </CustomMenu>
  )
}

export default Company