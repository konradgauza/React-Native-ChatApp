import {gql} from '@apollo/client';

export const ADD_MESSAGE = gql`
    mutation sendMessage($body: String!, $roomId: String!){
      sendMessage(body: $body, roomId: $roomId) {
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
    }
`