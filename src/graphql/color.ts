import { gql } from '@apollo/client';

export const LIST_COLORS = gql`
  query colorspage($limit: Float!, $offset: Float!) {
    colorspage(
      listColorInput: {
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

export const GET_COLOR = gql`
  query color($_id: String!){
    color(_id: $_id){
      _id
      name
      active
      date_register
    }
  }
`;

export const CREATE_COLOR = gql`
  mutation createColor($name: String!, $active: Boolean!) {
    createColor(
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

export const UPDATE_COLOR = gql`
  mutation updateColor($_id: String!, $name: String!, $active: Boolean!) {
    updateColor(
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

export const REMOVE_COLOR = gql`
  mutation removeColor($_id: String!){
    removeColor(_id: $_id){
      _id
    }
  }
`;