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
        if(message.user.id === "8cb3dde4-be4c-4abd-bb4e-91a45b8097de") {
            return true
        }else {
            return false
        }
    }

    return (
        <View style={myMessage() ? styles.myMessage : styles.message}>
            {/*<Text style={myMessage() ? styles.myText : styles.name}>{message.user.firstName}</Text>*/}
            <Text style={myMessage() ? styles.myText : styles.text}>{message.body}</Text>
        </View>
    )
}

export default ChatMessage;