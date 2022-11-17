import * as yup from 'yup'

export interface IUnitModel {
    _id: string,
    name: string,
    initials: string,
    active: boolean,
    //idcompany: string
}

export const IUnitDefault = <IUnitModel> {
    _id: '',
    name: '',
    initials: '',
    active: true
}

export const unitValidationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Nome da unidade é obrigatório')
      .max(50, 'Maximo 50 caracteres'),
      initials: yup
      .string()
      .required('Nome da unidade é obrigatório')
      .max(10, 'Maximo 10 caracteres'),
    active: yup
      .boolean()
      .required()
      .default(true)
})