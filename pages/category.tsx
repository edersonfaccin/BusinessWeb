import React from 'react';
import CustomForm from '../src/components/customForm';
import SwitchInput from '../src/components/inputs/SwitchInput';
import TextInput from '../src/components/inputs/TextInput';
import CustomMenu from '../src/utils/customMenu';
import { categoryRules, ICategoryDefault } from '../src/models/ICategoryModel';
import { CREATE_CATEGORY, GET_CATEGORY, UPDATE_CATEGORY } from '../src/graphql/category';

const Category = () => {

  return (
    <CustomMenu>
      <CustomForm list='categorys' create={CREATE_CATEGORY} update={UPDATE_CATEGORY} 
        get={GET_CATEGORY} defaultData={ICategoryDefault}>
        <TextInput 
          label='Nome' 
          property="name"
          rules={categoryRules.name}
        />
        <SwitchInput 
          label='Ativo' 
          property='active'
        />
      </CustomForm>
    </CustomMenu>
  )
}

export default Category