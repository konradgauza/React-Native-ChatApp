import {gql} from '@apollo/client';

export const LOAD_ROOMS = gql`
    query {
      usersRooms {
        rooms {
          id
          name
          roomPic
        }
        user {
          email
          firstName
          id
          lastName
          profilePic
          role
        }
      }
    }
`

export const GET_MESSAGES = gql`
    query GetMessage($id: String!){
      room (id: $id) {
        id
        name
        messages {
          body
          id
          insertedAt
          user {
            email
          firstName
          id
          lastName
          profilePic
          role
          }
        }
        roomPic
        user{
          email
          firstName
          id
          lastName
          profilePic
          role
        }
      }
    }
`