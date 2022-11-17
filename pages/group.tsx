import React, { useEffect, useState } from 'react';
import CustomForm from '../src/components/customForm';
import SwitchInput from '../src/components/inputs/SwitchInput';
import TextInput from '../src/components/inputs/TextInput';
import CustomMenu from '../src/utils/customMenu';
import { Formik } from 'formik'
import { groupValidationSchema, IGroupDefault, IGroupModel } from '../src/models/IGroupModel';
import { CREATE_GROUP, GET_GROUP, UPDATE_GROUP } from '../src/graphql/group';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';
import { message } from 'antd';

const Group = () => {
  const router = useRouter()
  
  const [ data, setData ] = useState<IGroupModel>(IGroupDefault);
  const [ rendering, setRendering ] = useState<boolean>(true);
  const [ createGroup, { data: ins } ] = useMutation(CREATE_GROUP);
  const [ updateGroup, { data: upd } ] = useMutation(UPDATE_GROUP);
  const { loading, error, data: dataRetrieve } = router.query?._id ? useQuery(GET_GROUP, { 
    variables: { 
      _id: router.query?._id
    }
  }) : { loading: false, error: null, data: null };

  useEffect(() => {
    setRendering(true)

    if(router.query?._id){
      setData(dataRetrieve?.group)
    }

    setRendering(false)
  }, [loading])

  const onSave = async(values: any) => {
    try {
      setRendering(true)

      if(router.query?._id){
        updateGroup({variables: { ...values }});
      }else{
        createGroup({variables: { ...values }});
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
        validationSchema={groupValidationSchema}
        validateOnMount={true}
        initialValues={data}
        enableReinitialize
        onSubmit={values => onSave(values)}>
          {({ handleSubmit, values, errors, touched, setFieldValue }) => {
            return (
              <CustomForm rendering={rendering} onSave={handleSubmit} list='groups'>
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

export default Group