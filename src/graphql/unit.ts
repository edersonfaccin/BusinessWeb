import { gql } from '@apollo/client';

export const REPORT_UNITS = gql`
  query{
    units{
      name
      initials
      active
      date_register
    }
  }
`;

export const LIST_UNITS = gql`
  query unitspage($limit: Float!, $offset: Float!) {
    unitspage(
      listUnitInput: {
        limit: $limit,
        offset: $offset
      }
    ) {
      results {
        _id
        name
        initials
        date_register
        active
      }
      count
    }
  }
`;

export const GET_UNIT = gql`
  query unit($_id: String!){
    unit(_id: $_id){
      _id
      name
      initials
      active
      date_register
    }
  }
`;

export const CREATE_UNIT = gql`
  mutation createUnit($name: String!, $initials: String!, $active: Boolean!) {
    createUnit(
      data: {
        name: $name, 
        initials: $initials,
        active: $active
      }) {
        _id
        name
        initials
        active
        date_register
    }
  }
`;

export const UPDATE_UNIT = gql`
  mutation updateUnit($_id: String!, $name: String!, $initials: String!, $active: Boolean!) {
    updateUnit(
      data: {
        _id: $_id,
        name: $name,
        initials: $initials, 
        active: $active
      }
    ) {
      _id
      name
      initials
      active
      date_register
    }
  }
`;

export const REMOVE_UNIT = gql`
  mutation removeUnit($_id: String!){
    removeUnit(_id: $_id){
      _id
    }
  }
`;