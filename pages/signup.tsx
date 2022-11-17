import React, { useState } from 'react';
import { Button, Form, Layout, Spin, message } from 'antd';
import { Formik } from 'formik';
import { signinValidationSchema, ISignUpDefault, ISignUpModel } from '../src/models/ISignUpModel'
import EmailInput from '../src/components/inputs/EmailInput';
import { useRouter } from 'next/router';
import PasswordInput from '../src/components/inputs/PasswordInput';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../src/graphql/user';

const { Content } = Layout;

const SignUp = () => {
    const router = useRouter()
    
    const [ data, setData ] = useState<ISignUpModel>(ISignUpDefault);
    const [ rendering, setRendering ] = useState<boolean>(false);
    const [ createUser, { data: ins } ] = useMutation(CREATE_USER);

    const onSignIn = () => {
        router.push({
            pathname: '/signup'
        })
    }

    const onSave = async(values: any) => {
        try {
            if(values.password !== values.confirm_password){
                message.warning('Senha e confirmacao de senha devem ser iguais');
                return
            }

            setRendering(true)

            const newValues = {
                email: values.email,
                password: values.password
            }
    
            createUser({variables: { ...newValues }});

            setRendering(false)
          
            router.push({
                pathname: '/'
            })
        } catch (error) {
            console.log(1, error)
        }
    }

    return (
        <Layout className="layout">
            <Content
                className="site-layout-background"
                style={{
                    margin: '0% 15% 0% 15%',
                    paddingTop: 200
                }}>
                <Formik
                    validationSchema={signinValidationSchema}
                    validateOnMount={true}
                    initialValues={data}
                    enableReinitialize
                    onSubmit={values => onSave(values)}>
                    {({ handleSubmit, values, errors, touched, setFieldValue }) => {
                        return (
                            <Spin tip="Aguarde" spinning={rendering}>
                                <Form
                                    name="basic"
                                    labelCol={{ span: 6 }}
                                    wrapperCol={{ span: 16 }}
                                    initialValues={{ remember: true }}
                                    autoComplete="off">
                                    <EmailInput 
                                        label='E-mail' 
                                        value={values?.email} 
                                        required={true}
                                        onChange={(ev: any) => {
                                            setFieldValue('email', ev.target.value)
                                        }}
                                        invalid={(errors?.email || '').toString().length > 0 && !!touched?.email}
                                        textError={errors?.email?.toString()}
                                    />
                                    <PasswordInput 
                                        label='Senha' 
                                        value={values?.password} 
                                        required={true}
                                        onChange={(ev: any) => {
                                            setFieldValue('password', ev.target.value)
                                        }}
                                        invalid={(errors?.password || '').toString().length > 0 && !!touched?.password}
                                        textError={errors?.password?.toString()}
                                    />
                                    <PasswordInput 
                                        label='Confirmar Senha' 
                                        value={values?.confirm_password} 
                                        required={true}
                                        onChange={(ev: any) => {
                                            setFieldValue('confirm_password', ev.target.value)
                                        }}
                                        invalid={(errors?.confirm_password || '').toString().length > 0 && !!touched?.confirm_password}
                                        textError={errors?.confirm_password?.toString()}
                                    />
                                    <Form.Item
                                        name="remember"
                                        valuePropName="checked"
                                        wrapperCol={{ offset: 6, span: 16 }}>
                                        <Button 
                                            type="link" 
                                            onClick={onSignIn}>
                                            Ja tenho conta, entrar
                                        </Button>
                                    </Form.Item>

                                    <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                                        <Button 
                                            type="primary" 
                                            htmlType="submit"
                                            onClick={() => handleSubmit()}>
                                            Salvar
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Spin>
                        )
                    }}
                </Formik>
            </Content>
        </Layout>
    );
};

export default SignUp;