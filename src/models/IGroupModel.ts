import * as yup from 'yup'

export interface IGroupModel {
    _id: string,
    name: string,
    active: boolean,
    //idcompany: string
}

export const IGroupDefault = <IGroupModel> {
    _id: '',
    name: '',
    active: true
}

export const groupValidationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Nome da grupo é obrigatório')
      .max(50, 'Maximo 50 caracteres'),
    active: yup
      .boolean()
      .required()
      .default(true)
})