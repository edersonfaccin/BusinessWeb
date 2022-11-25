interface ICountryModel {
    _id: string,
    name: string,
    active: boolean
}

export const ICountryDefault = <ICountryModel> {
    _id: '',
    name: '',
    active: true
}

export const countryRules = {
  name: [{
    required: true, 
    message: 'Informe um nome do pais'
  }, {
    max: 50,
    message: 'Maximo 50 caracateres'
  }]
}