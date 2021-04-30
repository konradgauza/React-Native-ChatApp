import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { useRoute } from '@react-navigation/native';
import ChatMessage from "../components/ChatMessage";
import InputText from "../components/InputText/index";
import { Route } from "../types";
import { GET_MESSAGES } from "../GraphQL/Queries";
import { useQuery } from "@apollo/client";

export type ChatRoomProps = {
    route: Route
}

const style = {
    backgroundColor: "#F0F8FF",
    flexDirection: "column-reverse"
}

const ChatRoomScreen = (props : ChatRoomProps) => {
    const [id, setId] = useState(`${props.route.params.id}`);
    const [messages, setMessages] = useState([])
    const route = useRoute();
    const {loading, error, data, variables} = useQuery(GET_MESSAGES, {
        variables: {id},
    });

    useEffect(() => {
        if(data) {
            setMessages(data.room.messages);
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
            <InputText id={id}/>
        </View>
    )
}

export default ChatRoomScreen;