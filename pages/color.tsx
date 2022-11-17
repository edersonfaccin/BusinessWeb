import React, { useEffect, useState } from 'react';
import CustomForm from '../src/components/customForm';
import SwitchInput from '../src/components/inputs/SwitchInput';
import TextInput from '../src/components/inputs/TextInput';
import CustomMenu from '../src/utils/customMenu';
import { Formik } from 'formik'
import { colorValidationSchema, IColorDefault, IColorModel } from '../src/models/IColorModel';
import { CREATE_COLOR, GET_COLOR, UPDATE_COLOR } from '../src/graphql/color';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';
import { message } from 'antd';

const Color = () => {
  const router = useRouter()
  
  const [ data, setData ] = useState<IColorModel>(IColorDefault);
  const [ rendering, setRendering ] = useState<boolean>(true);
  const [ createColor, { data: ins } ] = useMutation(CREATE_COLOR);
  const [ updateColor, { data: upd } ] = useMutation(UPDATE_COLOR);
  const { loading, error, data: dataRetrieve } = router.query?._id ? useQuery(GET_COLOR, { 
    variables: { 
      _id: router.query?._id
    }
  }) : { loading: false, error: null, data: null };

  useEffect(() => {
    setRendering(true)

    if(router.query?._id){
      setData(dataRetrieve?.color)
    }

    setRendering(false)
  }, [loading])

  const onSave = async(values: any) => {
    try {
      setRendering(true)

      if(router.query?._id){
        updateColor({variables: { ...values }});
      }else{
        createColor({variables: { ...values }});
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
        validationSchema={colorValidationSchema}
        validateOnMount={true}
        initialValues={data}
        enableReinitialize
        onSubmit={values => onSave(values)}>
          {({ handleSubmit, values, errors, touched, setFieldValue }) => {
            return (
              <CustomForm rendering={rendering} onSave={handleSubmit} list='colors'>
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

export default Color