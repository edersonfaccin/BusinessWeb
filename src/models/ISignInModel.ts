interface ISignInModel {
    _id: string,
    email: string,
    password: string
}

export const ISignInDefault = <ISignInModel> {
    _id: '',
    email: 'edersonfrasson@gmail.com',
    password: '1234'
}

export const signinRules = {
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
  }]
}