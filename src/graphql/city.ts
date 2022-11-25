import { gql } from '@apollo/client';

export const REPORT_CITIES = gql`
  query{
    cities{
      name
      idcity
      active
      date_register
    }
  }
`;

export const LIST_CITIES = gql`
  query citiespage($limit: Float!, $offset: Float!) {
    citiespage(
      listStateInput: {
        limit: $limit,
        offset: $offset
      }
    ) {
      results {
        _id
        name
        idcity
        date_register
        active
      }
      count
    }
  }
`;

export const GET_CITY = gql`
  query city($_id: String!){
    city(_id: $_id){
      _id
      name
      idcity
      active
      date_register
    }
  }
`;

export const CREATE_CITY = gql`
  mutation createCity($name: String!, $idcity: String!, $active: Boolean!) {
    createCity(
      data: {
        name: $name,
        idcity: $idcity,
        active: $active
      }) {
        _id
        name
        idcity
        active
        date_register
    }
  }
`;

export const UPDATE_CITY = gql`
  mutation updateCity($_id: String!, $name: String!, $idcity: String!, $active: Boolean!) {
    updateCity(
      data: {
        _id: $_id,
        name: $name,
        idcity: $idcity,
        active: $active
      }
    ) {
      _id
      name
      idcity
      active
      date_register
    }
  }
`;

export const REMOVE_CITY = gql`
  mutation removeCity($_id: String!){
    removeCity(_id: $_id){
      _id
    }
  }
`;