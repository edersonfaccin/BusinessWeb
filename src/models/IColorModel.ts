interface IColorModel {
    _id: string,
    name: string,
    active: boolean
}

export const IColorDefault = <IColorModel> {
    _id: '',
    name: '',
    active: true
}

export const colorRules = {
  name: [{
    required: true, 
    message: 'Informe um nome da cor'
  }, {
    max: 50,
    message: 'Maximo 50 caracateres'
  }]
}