import { gql } from '@apollo/client';

export const REPORT_COMPANIES = gql`
  query{
    companies{
      _id
      name
      nick_name
      national_identifier
      state_identifier
      municipal_identifier
      address
      complement
      district
      zip_code
      city
      phone
      cellphone
      email
      contact
      users {
          _id
          iduser
          active
          date_register
      }
      active
      date_register
    }
  }
`;

export const LIST_COMPANIES = gql`
  query companiespage($limit: Float!, $offset: Float!) {
    companiespage(
      listCompanyInput: {
        limit: $limit,
        offset: $offset
      }
    ) {
      results {
        _id
        name
        nick_name
        national_identifier
        state_identifier
        municipal_identifier
        address
        complement
        district
        zip_code
        city
        phone
        cellphone
        email
        contact
        users {
            _id
            iduser
            active
            date_register
        }
        active
        date_register
      }
      count
    }
  }
`;

export const GET_COMPANY = gql`
  query company($_id: String!){
    company(_id: $_id){
      _id
      name
      nick_name
      national_identifier
      state_identifier
      municipal_identifier
      address
      complement
      district
      zip_code
      city
      phone
      cellphone
      email
      contact
      users {
          _id
          iduser
          active
          date_register
      }
      active
      date_register
    }
  }
`;

export const CREATE_COMPANY = gql`
  mutation createCompany($name: String!, $nick_name: String!, $national_identifier: String!, $state_identifier: String!, 
    $address: String!, $district: String!, $zip_code: String!, $city: String!, $phone: String!, 
    $cellphone: String!, $email: String!, $contact: String!, $active: Boolean!, $iduser: String!) {
    createCompany(
      data: {
        name: $name,
        nick_name: $nick_name,
        national_identifier: $national_identifier,
        state_identifier: $state_identifier,
        address: $address,
        district: $district,
        zip_code: $zip_code,
        city: $city,
        phone: $phone,
        cellphone: $cellphone,
        email: $email,
        contact: $contact,
        users: [{
          iduser: $iduser
        }],
        active:  $active
      }) {
        _id
        name
        nick_name
        national_identifier
        state_identifier
        municipal_identifier
        address
        complement
        district
        zip_code
        city
        phone
        cellphone
        email
        contact
        users {
          _id
          iduser
          active
          date_register
        }
        active
        date_register
    }
  }
`;

export const UPDATE_COMPANY = gql`
  mutation updateCompany($name: String!, $nick_name: String!, $national_identifier: String!, $state_identifier: String!, 
    $address: String!, $district: String!, $zip_code: String!, $city: String!, $phone: String!, 
    $cellphone: String!, $email: String!, $contact: String!, $active: Boolean!) {
    updateCompany(
      data: {
        name: $name,
        nick_name: $nick_name,
        national_identifier: $national_identifier,
        state_identifier: $state_identifier,
        address: $address,
        district: $district,
        zip_code: $zip_code,
        city: $city,
        phone: $phone,
        cellphone: $cellphone,
        email: $email,
        contact: $contact,
        active:  $active
      }
    ) {
      _id
      name
      nick_name
      national_identifier
      state_identifier
      municipal_identifier
      address
      complement
      district
      zip_code
      city
      phone
      cellphone
      email
      contact
      users {
        _id
        iduser
        active
        date_register
      }
      active
      date_register
    }
  }
`;

export const REMOVE_COMPANY = gql`
  mutation removeCompany($_id: String!){
    removeCompany(_id: $_id){
      _id
    }
  }
`;