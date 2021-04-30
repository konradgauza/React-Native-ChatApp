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
export const getMessages = (id : string) => {
    const messages = gql`
    query {
      room (id: ${id}) {
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
    return messages;
}