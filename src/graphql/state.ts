import { gql } from '@apollo/client';

export const REPORT_STATES = gql`
  query{
    states{
      _id
      name
      uf
      idcountry
      active
      date_register
    }
  }
`;

export const LIST_STATES = gql`
  query statespage($limit: Float!, $offset: Float!) {
    statespage(
      listStateInput: {
        limit: $limit,
        offset: $offset
      }
    ) {
      results {
        _id
        name
        uf
        idcountry
        date_register
        active
      }
      count
    }
  }
`;

export const GET_STATE = gql`
  query state($_id: String!){
    state(_id: $_id){
      _id
      name
      uf
      idcountry
      active
      date_register
    }
  }
`;

export const CREATE_STATE = gql`
  mutation createState($name: String!, $uf: String!, $idcountry: String!, $active: Boolean!) {
    createState(
      data: {
        name: $name,
        uf: $uf,
        idcountry: $idcountry,
        active: $active
      }) {
        _id
        name
        uf
        idcountry
        active
        date_register
    }
  }
`;

export const UPDATE_STATE = gql`
  mutation updateState($_id: String!, $uf: String!, $name: String!, $idcountry: String!, $active: Boolean!) {
    updateState(
      data: {
        _id: $_id,
        name: $name,
        uf: $uf,
        idcountry: $idcountry,
        active: $active
      }
    ) {
      _id
      name
      uf
      idcountry
      active
      date_register
    }
  }
`;

export const REMOVE_STATE = gql`
  mutation removeState($_id: String!){
    removeState(_id: $_id){
      _id
    }
  }
`;