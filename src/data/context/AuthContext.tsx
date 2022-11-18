import { createContext, useEffect, useState } from "react";
import route from 'next/router'
import Cookies from 'js-cookie'
import { LOGIN_USER } from "../../graphql/user";
import { useMutation } from "@apollo/client";

interface ISignInModel {
    _id?: string
    name?: string
    email?: string
    access_token?: string
}

interface AuthContextProps {
    user?: ISignInModel,
    loading?: boolean,
    signIn: (email: string, password: string) => Promise<void>,
    errorMessage?: string
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export const AuthProvider = ({ children }: any) => {
    const [ user, setUser ] = useState<ISignInModel>(() => {
        const _id = Cookies.get('@BusinessApp:_id');
        const name = Cookies.get('@BusinessApp:name');
        const email = Cookies.get('@BusinessApp:email');
        const access_token = Cookies.get('@BusinessApp:access_token');

        if (access_token && _id) {
            // para não precisar ficar passando no header das requisições a api
            /*api.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
                return { token, user: JSON.parse(user) };
            */
        }
      
        return { } as ISignInModel;
    });
    const [ loading, setLoading ] = useState<boolean>(false)
    const [ errorMessage, setErrorMessage ] = useState<string>()
    const [ login ] = useMutation(LOGIN_USER);

    const signIn = async(email: string, password: string) => {
        const data = {
            email,
            password
        }
        
        setErrorMessage('')

        try {
            setLoading(true)
            login({ variables: { ...data }}).then((result: any) => {
                const { _id, name, email, access_token } = result?.data?.login

                Cookies.set('@BusinessApp:_id', _id, { expires: 1 });
                Cookies.set('@BusinessApp:name', name, { expires: 1 });
                Cookies.set('@BusinessApp:email', email, { expires: 1 });
                Cookies.set('@BusinessApp:access_token', access_token, { expires: 1 });

                setUser(result?.data?.login)
                route.push('/')
            })
        }
        catch(error) {
            setErrorMessage('Usuário ou senha inválidos')
            setLoading(false)
        } finally {
            setLoading(false)
        } 
    }

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            signIn,
            errorMessage
        }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContext