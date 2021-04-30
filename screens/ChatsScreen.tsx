import * as React from 'react';
import { StyleSheet,  FlatList } from 'react-native';
import { Text, View } from '../components/Themed';
import ChatListItems from "../components/ChatListItems";
import ChatRooms from "../data/ChatRooms";
import {useQuery} from "@apollo/client";
import {LOAD_ROOMS} from "../GraphQL/Queries";
import {useEffect, useState} from "react";

export default function ChatsScreen() {
    const {error, loading, data} = useQuery(LOAD_ROOMS);
    const [rooms, setRooms] = useState();

    useEffect(() => {
        if (data) {
            setRooms(data.usersRooms.rooms);
        }
    }, data);

    console.log(rooms);

    return (
        <View style={style.roomsContainer}>
            <FlatList
                data={rooms}
                renderItem={({item, index}) => <ChatListItems rooms={item} userIndex={index} id={item.id}/>}
                keyExtractor={(item) => item.id}
            />
        </View>
    );

    // return (
    //     <View style={style.roomsContainer}>
    //         <FlatList
    //         data={ChatRooms}
    //         renderItem={({item, index}) => <ChatListItems chatRoom={item} userIndex={index}/>}
    //         keyExtractor={(item) => item.id}
    //         />
    //     </View>
    // );
}


const style = StyleSheet.create({
    roomsContainer: {
        alignItems: 'center',
        width: "100%",
        padding: 3
    }
});
