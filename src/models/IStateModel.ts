interface IStateModel {
    _id: string,
    name: string,
    uf: string,
    idcountry: string,
    active: boolean
}

export const IStateDefault = <IStateModel> {
    _id: '',
    name: '',
    uf: '',
    idcountry: '',
    active: true
}

export const stateRules = {
  name: [{
    required: true, 
    message: 'Informe um nome do estado'
  }, {
    max: 50,
    message: 'Maximo 50 caracateres'
  }],
  uf: [{
    required: true, 
    message: 'Informe uma UF do estado'
  }, {
    max: 2,
    message: 'Maximo 2 caracateres'
  }],
  idcountry: [{
    required: true, 
    message: 'Informe um pais'
  }]
}