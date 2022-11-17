import React, { useEffect, useState } from 'react';
import CustomForm from '../src/components/customForm';
import SwitchInput from '../src/components/inputs/SwitchInput';
import TextInput from '../src/components/inputs/TextInput';
import CustomMenu from '../src/utils/customMenu';
import { Formik } from 'formik'
import { unitValidationSchema, IUnitDefault, IUnitModel } from '../src/models/IUnitModel';
import { CREATE_UNIT, GET_UNIT, UPDATE_UNIT } from '../src/graphql/unit';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';
import { message } from 'antd';

const Unit = () => {
  const router = useRouter()
  
  const [ data, setData ] = useState<IUnitModel>(IUnitDefault);
  const [ rendering, setRendering ] = useState<boolean>(true);
  const [ createUnit, { data: ins } ] = useMutation(CREATE_UNIT);
  const [ updateUnit, { data: upd } ] = useMutation(UPDATE_UNIT);
  const { loading, error, data: dataRetrieve } = router.query?._id ? useQuery(GET_UNIT, { 
    variables: { 
      _id: router.query?._id
    }
  }) : { loading: false, error: null, data: null };

  useEffect(() => {
    setRendering(true)

    if(router.query?._id){
      setData(dataRetrieve?.unit)
    }

    setRendering(false)
  }, [loading])

  const onSave = async(values: any) => {
    try {
      setRendering(true)

      if(router.query?._id){
        updateUnit({variables: { ...values }});
      }else{
        createUnit({variables: { ...values }});
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
        validationSchema={unitValidationSchema}
        validateOnMount={true}
        initialValues={data}
        enableReinitialize
        onSubmit={values => onSave(values)}>
          {({ handleSubmit, values, errors, touched, setFieldValue }) => {
            return (
              <CustomForm rendering={rendering} onSave={handleSubmit} list='units'>
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
                  label='Sigla' 
                  value={values?.initials} 
                  required={true}
                  onChange={(ev: any) => {
                    setFieldValue('initials', ev.target.value)
                  }}
                  invalid={(errors?.initials || '').toString().length > 0 && !!touched?.initials}
                  textError={errors?.initials?.toString()}
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

export default Unit