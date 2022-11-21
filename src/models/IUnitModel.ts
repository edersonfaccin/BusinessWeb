interface IUnitModel {
    _id: string,
    name: string,
    initials: string
    active: boolean
}

export const IUnitDefault = <IUnitModel> {
    _id: '',
    name: '',
    initials: '',
    active: true
}

export const unitRules = {
  name: [{
    required: true, 
    message: 'Informe um nome da unidade'
  }, {
    max: 50,
    message: 'Maximo 50 caracateres'
  }],
  initials: [{
    required: true, 
    message: 'Informe um sigla da unidade'
  }, {
    max: 50,
    message: 'Maximo 20 caracateres'
  }]
}