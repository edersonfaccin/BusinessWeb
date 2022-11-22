interface ICategoryModel {
    _id: string,
    name: string,
    active: boolean
}

export const ICategoryDefault = <ICategoryModel> {
    _id: '',
    name: '',
    active: true
}

export const categoryRules = {
  name: [{
    required: true, 
    message: 'Informe um nome da categoria'
  }, {
    max: 50,
    message: 'Maximo 50 caracateres'
  }]
}