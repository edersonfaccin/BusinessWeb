import * as yup from 'yup'

export interface ISignInModel {
    _id: string,
    email: string,
    password: string
}

export const ISignInDefault = <ISignInModel> {
    _id: '',
    email: 'edersonfrasson@gmail.com',
    password: '1234'
}

export const signinValidationSchema = yup.object().shape({
    email: yup
      .string()
      .required('Email é obrigatório')
      .max(50, 'Maximo 50 caracteres')
      .email('Informe um email valido'),
    password: yup
      .string()
      .required('Senha é obrigatório')
      .max(50, 'Maximo 50 caracteres')
      .min(4, 'Minimo quatro caracteres')
})