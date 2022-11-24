interface IUserModel {
    _id: string
    name: string
    email: string
    password: string
    confirm_password: string
    active: boolean
}

export const IUserDefault = <IUserModel> {
    _id: '',
    name: '',
    email: '',
    password: '',
    confirm_password: '',
    active: true
}

export const userRules = {
  name: [{
    required: true, 
    message: 'Informe um nome do usuario'
  }, {
    max: 50,
    message: 'Maximo 50 caracateres'
  }],
  email: [{
    required: true, 
    message: 'Informe um email para o usuario'
  }, {
    max: 50,
    message: 'Maximo 20 caracateres'
  }],
  password: [{
    required: true, 
    message: 'Informe um password para o usuario'
  }, {
    max: 50,
    message: 'Maximo 20 caracateres'
  }],
  confirm_password: [{
    required: true, 
    message: 'Informe um confirm password para o usuario'
  }, {
    max: 50,
    message: 'Maximo 20 caracateres'
  }]
}