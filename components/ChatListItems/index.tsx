import React from "react";
import {View, Text} from "react-native";
import {ChatRoom} from "../../types";

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItems = (props: ChatListItemProps) => {
    const { chatRoom } = props;
    return (
        <View>
            <Text>{chatRoom.lastMessage.content}</Text>
        </View>
    )
};

export default ChatListItems;