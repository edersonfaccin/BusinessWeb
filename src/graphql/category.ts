import { gql } from '@apollo/client';

export const REPORT_CATEGORIES = gql`
  query{
    categories{
      name
      active
      date_register
    }
  }
`;

export const LIST_CATEGORIES = gql`
  query categoriespage($limit: Float!, $offset: Float!) {
    categoriespage(
      listCategoryInput: {
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

export const GET_CATEGORY = gql`
  query category($_id: String!){
    category(_id: $_id){
      _id
      name
      active
      date_register
    }
  }
`;

export const CREATE_CATEGORY = gql`
  mutation createCategory($name: String!, $active: Boolean!) {
    createCategory(
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

export const UPDATE_CATEGORY = gql`
  mutation updateCategory($_id: String!, $name: String!, $active: Boolean!) {
    updateCategory(
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

export const REMOVE_CATEGORY = gql`
  mutation removeCategory($_id: String!){
    removeCategory(_id: $_id){
      _id
    }
  }
`;