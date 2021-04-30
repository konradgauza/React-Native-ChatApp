import React from "react";
import { View, Text } from 'react-native';
import { Message} from "../../types";
import { styles } from './style'

export type ChatMessageProps = {
    message: Message;
}

const ChatMessage = (props: ChatMessageProps) => {
    const {message} = props;

    const myMessage = () : boolean => {
        if(message.user.id === "u1") {
            return true
        }else {
            return false
        }
    }

    return (
        <View style={myMessage() ? styles.myMessage : styles.message}>
            <Text style={myMessage() ? styles.myText : styles.text}>{message.user.firstName}</Text>
            <Text style={myMessage() ? styles.myText : styles.text}>{message.body}</Text>
        </View>
    )
}

export default ChatMessage;