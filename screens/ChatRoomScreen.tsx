import React from "react";
import {View, Text, FlatList, SafeAreaView} from "react-native";
import { useRoute } from '@react-navigation/native';
import chatRoomData from '../data/Chats';
import ChatMessage from "../components/ChatMessage";

const ChatRoomScreen = () => {

    const route = useRoute()

    const style = {
        backgroundColor: "#F0F8FF",
    }

    return (
            <FlatList
                data={chatRoomData.messages}
                renderItem={({item}) => <ChatMessage message={item}/>}
                style={style}
                inverted={true}
            />
    )
}

export default ChatRoomScreen;