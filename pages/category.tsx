import React, { useEffect, useState } from 'react';
import CustomForm from '../src/components/customForm';
import SwitchInput from '../src/components/inputs/SwitchInput';
import TextInput from '../src/components/inputs/TextInput';
import CustomMenu from '../src/utils/customMenu';
import { Formik } from 'formik'
import { categoryValidationSchema, ICategoryDefault, ICategoryModel } from '../src/models/ICategoryModel';
import { CREATE_CATEGORY, GET_CATEGORY, UPDATE_CATEGORY } from '../src/graphql/category';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';
import { message } from 'antd';

const Category = () => {
  const router = useRouter()
  
  const [ data, setData ] = useState<ICategoryModel>(ICategoryDefault);
  const [ rendering, setRendering ] = useState<boolean>(true);
  const [ createCategory, { data: ins } ] = useMutation(CREATE_CATEGORY);
  const [ updateCategory, { data: upd } ] = useMutation(UPDATE_CATEGORY);
  const { loading, error, data: dataRetrieve } = router.query?._id ? useQuery(GET_CATEGORY, { 
    variables: { 
      _id: router.query?._id
    }
  }) : { loading: false, error: null, data: null };

  useEffect(() => {
    setRendering(true)

    if(router.query?._id){
      setData(dataRetrieve?.category)
    }

    setRendering(false)
  }, [loading])

  const onSave = async(values: any) => {
    try {
      setRendering(true)

      if(router.query?._id){
        updateCategory({variables: { ...values }});
      }else{
        createCategory({variables: { ...values }});
      }

      setRendering(false)
      router.back()
    } catch (error) {
      message.error(error?.toString());
    }
  }

  return (
    <CustomMenu>
      <Formik
        validationSchema={categoryValidationSchema}
        validateOnMount={true}
        initialValues={data}
        enableReinitialize
        onSubmit={values => onSave(values)}>
          {({ handleSubmit, values, errors, touched, setFieldValue }) => {
            return (
              <CustomForm rendering={rendering} onSave={handleSubmit} list='categorys'>
                <TextInput 
                  label='Nome' 
                  value={values?.name} 
                  required={true}
                  onChange={(ev: any) => {
                    setFieldValue('name', ev.target.value)
                  }}
                  invalid={(errors?.name || '').toString().length > 0 && !!touched?.name}
                  textError={errors?.name?.toString()}
                />
                <SwitchInput 
                  label='Ativo' 
                  value={values?.active} 
                  onChange={(ev: any) => {
                    setFieldValue('active', ev)
                  }}
                />
              </CustomForm>
            )
          }}
      </Formik>
    </CustomMenu>
  )
}

export default Category