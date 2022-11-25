interface IStateModel {
    _id: string,
    name: string,
    idcountry: string,
    active: boolean
}

export const IStateDefault = <IStateModel> {
    _id: '',
    name: '',
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
  idcountry: [{
    required: true, 
    message: 'Informe um pais'
  }]
}