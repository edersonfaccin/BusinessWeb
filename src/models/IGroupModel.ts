interface IGroupModel {
    _id: string,
    name: string,
    active: boolean
}

export const IGroupDefault = <IGroupModel> {
    _id: '',
    name: '',
    active: true
}

export const groupRules = {
  name: [{
    required: true, 
    message: 'Informe um nome do grupo'
  }, {
    max: 50,
    message: 'Maximo 50 caracateres'
  }]
}