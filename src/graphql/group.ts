import { gql } from '@apollo/client';

export const REPORT_GROUPS = gql`
  query{
    groups{
      name
      active
      date_register
    }
  }
`;

export const LIST_GROUPS = gql`
  query groupspage($limit: Float!, $offset: Float!) {
    groupspage(
      listGroupInput: {
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

export const GET_GROUP = gql`
  query group($_id: String!){
    group(_id: $_id){
      _id
      name
      active
      date_register
    }
  }
`;

export const CREATE_GROUP = gql`
  mutation createGroup($name: String!, $active: Boolean!) {
    createGroup(
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

export const UPDATE_GROUP = gql`
  mutation updateGroup($_id: String!, $name: String!, $active: Boolean!) {
    updateGroup(
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

export const REMOVE_GROUP = gql`
  mutation removeGroup($_id: String!){
    removeGroup(_id: $_id){
      _id
    }
  }
`;