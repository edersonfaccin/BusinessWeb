import { gql } from '@apollo/client';

export const REPORT_USERS = gql`
  query{
    users{
      name
      email
      active
      date_register
    }
  }
`;

export const LIST_USERS = gql`
  query userspage($limit: Float!, $offset: Float!) {
    userspage(
      listUserInput: {
        limit: $limit,
        offset: $offset
      }
    ) {
      results {
        _id
        name
        email
        date_register
        active
      }
      count
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($name: String!, $email: String!, $password: String!) {
    createUser(
      data: {
        name: $name, 
        email: $email,
        password: $password
      }) {
        _id
        name
        email
        password
        active
        date_register
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(
      data: {
        email: $email,
        password: $password
      }) {
        _id
        name
        email
        access_token
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($_id: String!, $name: String!, $password: String!) {
    updateUser(
      data: {
        _id: $_id,
        name: $name, 
        password: $password
      }
    ) {
      _id
      name
      password
      date_register
      active
    }
  }
`;

export const GET_USER = gql`
  query user($_id: String!){
    user(_id: $_id){
      _id
      name
      email
      password
      active
      date_register
    }
  }
`;

export const REMOVE_USER = gql`
  mutation removeUser($_id: String!){
    removeUser(_id: $_id){
      _id
    }
  }
`;