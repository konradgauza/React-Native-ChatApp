import React, {useEffect, useState} from "react";
import {View, FlatList } from "react-native";
import { useRoute } from '@react-navigation/native';
import chatRoomData from '../data/Chats';
import ChatMessage from "../components/ChatMessage";
import InputText from "../components/InputText/index";
import { Route } from "../types";
import {getMessages, LOAD_ROOMS} from "../GraphQL/Queries";
import {gql, useQuery} from "@apollo/client";

export type ChatRoomProps = {
    route: Route
}

const ChatRoomScreen = (props : ChatRoomProps) => {
    const [id, setId] = useState(`${props.route.params.id}`);
    const [messages, setMessages] = useState([])
    const style = {
        backgroundColor: "#F0F8FF",
        flexDirection: "column-reverse"

    }
    const route = useRoute();
    // const id = `${props.route.params.id}`
    // console.log(id)
//
//     const RandomGiphyQuery = gql`
//   query QRandomGiphy($tag: String!) {
//     giphy {
//       random(tag: $tag) {
//         images {
//           original {
//             width
//             height
//             url
//           }
//         }
//       }
//     }
//   }
// `;

    const GET_MESSAGES = gql`
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
    // const {error, loading, data} = useQuery(GET_MESSAGES);
    const {loading, error, data, variables} = useQuery(GET_MESSAGES, {
        variables: {id},
    });

    useEffect(() => {
        if(data) {
            setMessages(data.room.messages);
            console.log(data.room.messages);
            // console.log(messages)
        }
    }, [data])
    return (
        <View style={{width: "100%", height: "100%"}}>
            <FlatList
                data={messages}
                renderItem={({item}) => <ChatMessage message={item}/>}
                style={style}
                inverted={false}
            />
            <InputText/>
        </View>
    )
}

export default ChatRoomScreen;