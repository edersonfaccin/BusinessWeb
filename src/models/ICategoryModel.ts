import * as yup from 'yup'

export interface ICategoryModel {
    _id: string,
    name: string,
    active: boolean,
    //idcompany: string
}

export const ICategoryDefault = <ICategoryModel> {
    _id: '',
    name: '',
    active: true
}

export const categoryValidationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Nome da categoria é obrigatório')
      .max(50, 'Maximo 50 caracteres'),
    active: yup
      .boolean()
      .required()
      .default(true)
})