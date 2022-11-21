import React, { useState } from 'react';
import { Button, Form, Layout, Spin, message } from 'antd';
import EmailInput from '../src/components/inputs/EmailInput';
import { useRouter } from 'next/router';
import PasswordInput from '../src/components/inputs/PasswordInput';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../src/graphql/user';
import { signupRules } from '../src/models/ISignUpModel';

const { Content } = Layout;

const SignUp = () => {
    const router = useRouter()
    
    const [ rendering, setRendering ] = useState<boolean>(false);
    const [ createUser ] = useMutation(CREATE_USER);

    const onSignIn = () => {
        router.push({
            pathname: '/signup'
        })
    }

    const onFinish = async(values: any) => {
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

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Layout className="layout">
            <Content
                className="site-layout-background"
                style={{
                    margin: '0% 15% 0% 15%',
                    paddingTop: 200
                }}>
                <Spin tip="Aguarde" spinning={rendering}>
                    <Form
                        name="basic"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ email: "", password: "", confirm_password: "" }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off">
                        <EmailInput 
                            label='E-mail' 
                            property="email"
                            rules={signupRules.email}
                        />
                        <PasswordInput 
                            label='Senha' 
                            property="password"
                            rules={signupRules.password}
                        />
                        <PasswordInput 
                            label='Confirmar Senha' 
                            property="confirm_password"
                            rules={signupRules.confirm_password}
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
                                htmlType="submit">
                                Salvar
                            </Button>
                        </Form.Item>
                    </Form>
                </Spin>
            </Content>
        </Layout>
    );
};

export default SignUp;