import { gql } from '@apollo/client';

export const REPORT_BANKS = gql`
  query{
    banks{
      name
      code
      active
      date_register
    }
  }
`;

export const LIST_BANKS = gql`
  query bankspage($limit: Float!, $offset: Float!) {
    bankspage(
      listBankInput: {
        limit: $limit,
        offset: $offset
      }
    ) {
      results {
        _id
        name
        code
        date_register
        active
      }
      count
    }
  }
`;

export const GET_BANK = gql`
  query bank($_id: String!){
    bank(_id: $_id){
      _id
      name
      code
      active
      date_register
    }
  }
`;

export const CREATE_BANK = gql`
  mutation createBank($name: String!, $code: Float!, $active: Boolean!) {
    createBank(
      data: {
        name: $name, 
        code: $code, 
        active: $active
      }) {
        _id
        name
        code
        active
        date_register
    }
  }
`;

export const UPDATE_BANK = gql`
  mutation updateBank($_id: String!, $name: String!, $code: Float!, $active: Boolean!) {
    updateBank(
      data: {
        _id: $_id,
        name: $name, 
        code: $code, 
        active: $active
      }
    ) {
      _id
      name
      code
      active
      date_register
    }
  }
`;

export const REMOVE_BANK = gql`
  mutation removeBank($_id: String!){
    removeBank(_id: $_id){
      _id
    }
  }
`;