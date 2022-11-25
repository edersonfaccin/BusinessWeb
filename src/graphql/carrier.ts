import { gql } from '@apollo/client';

export const REPORT_CARRIERS = gql`
  query{
    carriers{
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
      accounts {
        _id
        idbank
        agency
        number_account
        active
        date_register
      }
      pixs {
        _id
        code
        active
        date_register
      }
      active
      date_register
    }
  }
`;

export const LIST_CARRIERS = gql`
  query carrierspage($limit: Float!, $offset: Float!) {
    carrierspage(
      listCarrierInput: {
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
        accounts {
          _id
          idbank
          agency
          number_account
          active
          date_register
        }
        pixs {
          _id
          code
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

export const GET_CARRIER = gql`
  query carrier($_id: String!){
    carrier(_id: $_id){
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
      accounts {
        _id
        idbank
        agency
        number_account
        active
        date_register
      }
      pixs {
        _id
        code
        active
        date_register
      }
      active
      date_register
    }
  }
`;

export const CREATE_CARRIER = gql`
  mutation createCarrier($name: String!, $nick_name: String!, $national_identifier: String!, $state_identifier: String!, 
    $address: String!, $district: String!, $zip_code: String!, $city: String!, $phone: String!, 
    $cellphone: String!, $email: String!, $contact: String!, $active: Boolean!) {
    createCarrier(
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
        accounts {
          _id
          idbank
          agency
          number_account
          active
          date_register
        }
        pixs {
          _id
          code
          active
          date_register
        }
        active
        date_register
    }
  }
`;

export const UPDATE_CARRIER = gql`
  mutation updateCarrier($name: String!, $nick_name: String!, $national_identifier: String!, $state_identifier: String!, 
    $address: String!, $district: String!, $zip_code: String!, $city: String!, $phone: String!, 
    $cellphone: String!, $email: String!, $contact: String!, $active: Boolean!) {
    updateCarrier(
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
      accounts {
        _id
        idbank
        agency
        number_account
        active
        date_register
      }
      pixs {
        _id
        code
        active
        date_register
      }
      active
      date_register
    }
  }
`;

export const REMOVE_CARRIER = gql`
  mutation removeCarrier($_id: String!){
    removeCarrier(_id: $_id){
      _id
    }
  }
`;