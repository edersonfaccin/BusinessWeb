import React, { useEffect, useState } from 'react';
import CustomForm from '../src/components/customForm';
import SwitchInput from '../src/components/inputs/SwitchInput';
import TextInput from '../src/components/inputs/TextInput';
import CustomMenu from '../src/utils/customMenu';
import { Formik } from 'formik'
import { companyValidationSchema, ICompanyDefault, ICompanyModel } from '../src/models/ICompanyModel';
import { CREATE_COMPANY, GET_COMPANY, UPDATE_COMPANY } from '../src/graphql/company';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';
import { message } from 'antd';

const Company = () => {
  const router = useRouter()
  
  const [ data, setData ] = useState<ICompanyModel>(ICompanyDefault);
  const [ rendering, setRendering ] = useState<boolean>(true);
  const [ createCompany, { data: ins } ] = useMutation(CREATE_COMPANY);
  const [ updateCompany, { data: upd } ] = useMutation(UPDATE_COMPANY);
  const { loading, error, data: dataRetrieve } = router.query?._id ? useQuery(GET_COMPANY, { 
    variables: { 
      _id: router.query?._id
    }
  }) : { loading: false, error: null, data: null };

  useEffect(() => {
    setRendering(true)

    if(router.query?._id){
      setData(dataRetrieve?.company)
    }

    setRendering(false)
  }, [loading])

  const onSave = async(values: any) => {
    try {
      setRendering(true)

      if(router.query?._id){
        updateCompany({variables: { ...values }});
      }else{
        createCompany({variables: { ...values }});
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
        validationSchema={companyValidationSchema}
        validateOnMount={true}
        initialValues={data}
        enableReinitialize
        onSubmit={values => onSave(values)}>
          {({ handleSubmit, values, errors, touched, setFieldValue }) => {
            return (
              <CustomForm rendering={rendering} onSave={handleSubmit} list='companies'>
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
                <TextInput 
                  label='Nome fantasia' 
                  value={values?.nick_name} 
                  onChange={(ev: any) => {
                    setFieldValue('nick_name', ev.target.value)
                  }}
                  invalid={(errors?.nick_name || '').toString().length > 0 && !!touched?.nick_name}
                  textError={errors?.nick_name?.toString()}
                />
                <TextInput 
                  label='CNPJ' 
                  value={values?.national_identifier} 
                  onChange={(ev: any) => {
                    setFieldValue('national_identifier', ev.target.value)
                  }}
                  invalid={(errors?.national_identifier || '').toString().length > 0 && !!touched?.national_identifier}
                  textError={errors?.national_identifier?.toString()}
                />
                <TextInput 
                  label='Inscricao estadual' 
                  value={values?.state_identifier} 
                  onChange={(ev: any) => {
                    setFieldValue('state_identifier', ev.target.value)
                  }}
                  invalid={(errors?.state_identifier || '').toString().length > 0 && !!touched?.state_identifier}
                  textError={errors?.state_identifier?.toString()}
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

export default Company