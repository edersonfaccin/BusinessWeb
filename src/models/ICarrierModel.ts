interface IAccountModel {
    _id: string,
    idbank: string,
    agency: string,
    number_account: string,
    active: string
}

interface IPixModel {
  _id: string,
  code: string,
  active: string
}

export interface ICarrierModel {
    _id: string,
    name: string,
    nick_name: string,
    national_identifier: string,
    state_identifier: string,
    municipal_identifier: string,
    address: string,
    complement: string,
    district: string,
    zip_code: string,
    city: string,
    phone: string,
    cellphone: string,
    email: string,
    contact: string,
    accounts: IAccountModel[],
    pixs: IPixModel[],
    active: boolean
}

export const ICarrierDefault = <ICarrierModel> {
    _id: '',
    name: '',
    nick_name: '',
    national_identifier: '',
    state_identifier: '',
    municipal_identifier: '',
    address: '',
    complement: '',
    district: '',
    zip_code: '',
    city: '',
    phone: '',
    cellphone: '',
    email: '',
    contact: '',
    accounts: [],
    pixs: [],
    active: true
}

export const carrierRules = {
  name: [{
    required: true, 
    message: 'Informe um nome da companhia'
  }, {
    max: 50,
    message: 'Maximo 50 caracateres'
  }],
  nick_name: [{
    max: 50,
    message: 'Maximo 50 caracateres'
  }],
  national_identifier: [{
    max: 50,
    message: 'Maximo 50 caracateres'
  }],
  state_identifier: [{
    max: 50,
    message: 'Maximo 50 caracateres'
  }],
  municipal_identifier: [{
    max: 50,
    message: 'Maximo 50 caracateres'
  }],
  address: [{
    max: 50,
    message: 'Maximo 50 caracateres'
  }],
  complement: [{
    max: 50,
    message: 'Maximo 50 caracateres'
  }],
  district: [{
    max: 50,
    message: 'Maximo 50 caracateres'
  }],
  zip_code: [{
    max: 50,
    message: 'Maximo 50 caracateres'
  }],
  city: [{
    max: 50,
    message: 'Maximo 50 caracateres'
  }],
  phone: [{
    max: 50,
    message: 'Maximo 50 caracateres'
  }],
  cellphone: [{
    max: 50,
    message: 'Maximo 50 caracateres'
  }],
  email: [{
    max: 50,
    message: 'Maximo 50 caracateres'
  }],
  contact: [{
    max: 50,
    message: 'Maximo 50 caracateres'
  }]
}
