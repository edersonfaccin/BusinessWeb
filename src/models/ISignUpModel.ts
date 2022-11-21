interface ISignUpModel {
    _id: string,
    email: string,
    password: string,
    confirm_password: string
}

export const ISignUpDefault = <ISignUpModel> {
    _id: '',
    email: '',
    password: '',
    confirm_password: ''
}

export const signupRules = {
  email: [{
    required: true, 
    message: 'Informe um nome do usuario'
  }, {
    max: 50,
    message: 'Maximo 50 caracateres'
  }],
  password: [{
    required: true, 
    message: 'Informe um password do usuario'
  }, {
    max: 50,
    message: 'Maximo 50 caracateres'
  }],
  confirm_password: [{
    required: true, 
    message: 'Informe um password do usuario'
  }, {
    max: 50,
    message: 'Maximo 50 caracateres'
  }]
}