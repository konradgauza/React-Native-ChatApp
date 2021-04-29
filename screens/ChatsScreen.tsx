import * as React from 'react';
import { StyleSheet,  FlatList } from 'react-native';
import { Text, View } from '../components/Themed';
import ChatListItems from "../components/ChatListItems";

import ChatRooms from "../data/ChatRooms";

export default function ChatsScreen() {
    return (
        <View style={style.roomsContainer}>
            <FlatList
            data={ChatRooms}
            renderItem={({item}) => <ChatListItems chatRoom={item}/>}
            keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const style = StyleSheet.create({
    roomsContainer: {
        alignItems: 'center',
        width: "100%",
        marginTop: 30
    }
});
