import React from 'react';
import CustomForm from '../src/components/customForm';
import SwitchInput from '../src/components/inputs/SwitchInput';
import TextInput from '../src/components/inputs/TextInput';
import CustomMenu from '../src/utils/customMenu';
import { IUserDefault, userRules } from '../src/models/IUserModel';
import { CREATE_USER, GET_USER, UPDATE_USER } from '../src/graphql/user';
import PasswordInput from '../src/components/inputs/PasswordInput';

const User = () => {
  
  return (
    <CustomMenu>
      <CustomForm list='users' create={CREATE_USER} update={UPDATE_USER} 
        get={GET_USER} defaultData={IUserDefault}>
        <TextInput 
          label='Nome' 
          property="name"
          rules={userRules.name}
        />
        <TextInput 
          label='Email' 
          property="email"
          rules={userRules.email}
        />
        <PasswordInput 
          label='Password' 
          property="password"
          rules={userRules.password}
        />
        <PasswordInput 
          label='Confirm password' 
          property="confirm_password"
          rules={userRules.confirm_password}
        />
        <SwitchInput 
          label='Ativo' 
          property='active'
        />
      </CustomForm>
    </CustomMenu>
  )
}

export default User