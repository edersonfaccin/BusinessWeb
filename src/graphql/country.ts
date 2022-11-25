import { gql } from '@apollo/client';

export const REPORT_COUNTRIES = gql`
  query{
    countries{
      name
      active
      date_register
    }
  }
`;

export const LIST_COUNTRIES = gql`
  query countriespage($limit: Float!, $offset: Float!) {
    countriespage(
      listCountryInput: {
        limit: $limit,
        offset: $offset
      }
    ) {
      results {
        _id
        name
        date_register
        active
      }
      count
    }
  }
`;

export const GET_COUNTRY = gql`
  query country($_id: String!){
    country(_id: $_id){
      _id
      name
      active
      date_register
    }
  }
`;

export const CREATE_COUNTRY = gql`
  mutation createCountry($name: String!, $active: Boolean!) {
    createCountry(
      data: {
        name: $name,
        active: $active
      }) {
        _id
        name
        active
        date_register
    }
  }
`;

export const UPDATE_COUNTRY = gql`
  mutation updateCountry($_id: String!, $name: String!, $active: Boolean!) {
    updateCountry(
      data: {
        _id: $_id,
        name: $name,
        active: $active
      }
    ) {
      _id
      name
      active
      date_register
    }
  }
`;

export const REMOVE_COUNTRY = gql`
  mutation removeCountry($_id: String!){
    removeCountry(_id: $_id){
      _id
    }
  }
`;