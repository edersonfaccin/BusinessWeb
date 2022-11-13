import * as yup from 'yup'

export interface IColorModel {
    _id: string,
    name: string,
    active: boolean,
    //idcompany: string
}

export const IColorDefault = <IColorModel> {
    _id: '',
    name: '',
    active: true
}

export const colorValidationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Nome da cor é obrigatório'),
    active: yup
      .boolean()
      .required()
      .default(true)
})