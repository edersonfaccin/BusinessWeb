import * as yup from 'yup'

interface IUserModel {
    _id: string,
    iduser: string,
    active: string
}

export interface ICompanyModel {
    _id: string,
    name: string,
    nick_name: string,
    national_identifier: string,
    state_identifier: string,
    municipal_identifier: string,
    address: string,
    complement: string,
    district: string,
    zip_code: string,
    city: string,
    phone: string,
    cellphone: string,
    email: string,
    contact: string,
    users: IUserModel[],
    active: boolean
}

export const ICompanyDefault = <ICompanyModel> {
    _id: '',
    name: '',
    nick_name: '',
    national_identifier: '',
    state_identifier: '',
    municipal_identifier: '',
    address: '',
    complement: '',
    district: '',
    zip_code: '',
    city: '',
    phone: '',
    cellphone: '',
    email: '',
    contact: '',
    users: [],
    active: true
}

export const companyValidationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Nome da companhia é obrigatório')
      .max(50, 'Maximo 50 caracteres'),
    nick_name: yup
      .string()
      .max(50, 'Maximo 50 caracteres'),
    national_identifier: yup
      .string()
      .max(50, 'Maximo 50 caracteres'),
    state_identifier: yup
      .string()
      .max(50, 'Maximo 50 caracteres'),
    municipal_identifier: yup
      .string()
      .max(50, 'Maximo 50 caracteres'),
    address: yup
      .string()
      .max(50, 'Maximo 50 caracteres'),
    complement: yup
      .string()
      .max(50, 'Maximo 50 caracteres'),
    district: yup
      .string()
      .max(50, 'Maximo 50 caracteres'),
    zip_code: yup
      .string()
      .max(50, 'Maximo 50 caracteres'),
    city: yup
      .string()
      .max(50, 'Maximo 50 caracteres'),
    phone: yup
      .string()
      .max(50, 'Maximo 50 caracteres'),
    cellphone: yup
      .string()
      .max(50, 'Maximo 50 caracteres'),
    email: yup
      .string()
      .max(50, 'Maximo 50 caracteres'),
    contact: yup
      .string()
      .max(50, 'Maximo 50 caracteres'),
    users: yup
      .array(),
    active: yup
      .boolean()
      .required()
      .default(true)
})