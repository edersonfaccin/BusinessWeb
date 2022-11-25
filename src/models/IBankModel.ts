interface IBankModel {
    _id: string,
    name: string,
    code: number,
    active: boolean
}

export const IBankDefault = <IBankModel> {
    _id: '',
    name: '',
    code: 0,
    active: true
}

export const bankRules = {
  name: [{
    required: true, 
    message: 'Informe um nome da banco'
  }, {
    max: 50,
    message: 'Maximo 50 caracateres'
  }],
  code: [{
    required: true, 
    message: 'Informe um codigo da banco'
  }]
}