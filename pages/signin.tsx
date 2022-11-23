import React from 'react';
import { Button, Form, Layout } from 'antd';
import { ISignInDefault, signinRules } from '../src/models/ISignInModel'
import EmailInput from '../src/components/inputs/EmailInput';
import { useRouter } from 'next/router';
import PasswordInput from '../src/components/inputs/PasswordInput';
import useAuthData from '../src/data/hook/useAuthData';

const { Content } = Layout;

const SignIn = () => {
    const router = useRouter()
    
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

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Layout className="layout">
            <Content
                className="site-layout-background"
                style={{
                    paddingTop: 200,
                    alignItems: 'center'
                }}>
                    <Form
                        name="basic"
                        style={{
                            width: '50%',
                            marginLeft: '30%'
                        }}
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={ISignInDefault}
                        onFinish={onSave}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off">
                        <EmailInput 
                            label='E-mail' 
                            property="email"
                            rules={signinRules.email}
                        />
                        <PasswordInput 
                            label='Senha' 
                            property="password"
                            rules={signinRules.password}
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
                                htmlType="submit">
                                Entrar
                            </Button>
                        </Form.Item>
                    </Form>
            </Content>
        </Layout>
    );
};

export default SignIn;