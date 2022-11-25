interface ICityModel {
    _id: string,
    name: string,
    idstate: string,
    active: boolean
}

export const ICityDefault = <ICityModel> {
    _id: '',
    name: '',
    idstate: '',
    active: true
}

export const stateRules = {
  name: [{
    required: true, 
    message: 'Informe um nome da cidade'
  }, {
    max: 50,
    message: 'Maximo 50 caracateres'
  }],
  idstate: [{
    required: true, 
    message: 'Informe um estado'
  }]
}