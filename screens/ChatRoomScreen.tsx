import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { useRoute } from '@react-navigation/native';
import ChatMessage from "../components/ChatMessage";
import InputText from "../components/InputText/index";
import { Route } from "../types";
import { GET_MESSAGES } from "../GraphQL/Queries";
import { useQuery } from "@apollo/client";
import {styles} from "./style";

export type ChatRoomProps = {
    route: Route
}

const ChatRoomScreen = (props : ChatRoomProps) => {
    const id = `${props.route.params.id}`;
    const [messages, setMessages] = useState([])
    const route = useRoute();
    const { data } = useQuery(GET_MESSAGES, {
        variables: {id},
    });

    useEffect(() => {
        if(data) {
            setMessages(data.room.messages);
        }
    }, [data])

    return (
        <View style={styles.container}>
            <FlatList
                data={messages}
                renderItem={({item}) => <ChatMessage message={item}/>}
                style={styles.list}
                inverted={false}
            />
            <InputText id={id}/>
        </View>
    )
}

export default ChatRoomScreen;