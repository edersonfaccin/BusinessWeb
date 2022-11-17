import * as yup from 'yup'

export interface ISignUpModel {
    _id: string,
    email: string,
    password: string,
    confirm_password: string
}

export const ISignUpDefault = <ISignUpModel> {
    _id: '',
    email: '',
    password: '',
    confirm_password: ''
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
      .min(4, 'Minimo quatro caracteres'),
    confirm_password: yup
      .string()
      .required('Senha é obrigatório')
      .max(50, 'Maximo 50 caracteres')
      .min(4, 'Minimo quatro caracteres')
})