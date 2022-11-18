import React, { useState } from 'react';
import { Button, Form, Layout } from 'antd';
import { Formik } from 'formik';
import { signinValidationSchema, ISignInDefault, ISignInModel } from '../src/models/ISignInModel'
import EmailInput from '../src/components/inputs/EmailInput';
import { useRouter } from 'next/router';
import PasswordInput from '../src/components/inputs/PasswordInput';
import useAuthData from '../src/data/hook/useAuthData';

const { Content } = Layout;

const SignIn = () => {
    const router = useRouter()
    
    const [ data, setData ] = useState<ISignInModel>(ISignInDefault);
    const { signIn } = useAuthData()

    const onCreateAccount = () => {
        router.push({
            pathname: '/signup'
        })
    }

    const onSave = async(values: any) => {
        const { email, password } = values || { email: '', password: '' }

        try {
            await signIn(email!, password!)
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
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    wrapperCol={{ offset: 6, span: 16 }}>
                                    <Button 
                                        type="link" 
                                        onClick={onCreateAccount}>
                                        Nao tenho conta, criar
                                    </Button>
                                </Form.Item>

                                <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                                    <Button 
                                        type="primary" 
                                        htmlType="submit"
                                        onClick={() => handleSubmit()}>
                                        Entrar
                                    </Button>
                                </Form.Item>
                            </Form>
                        )
                    }}
                </Formik>
            </Content>
        </Layout>
    );
};

export default SignIn;