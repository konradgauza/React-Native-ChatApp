import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import ChatListItems from "../components/ChatListItems";

export default function ChatsScreen() {
    return (
        <View style={styles.container}>
            <ChatListItems chatRoom={{lastMessage: {content: "Hello there"}}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
