import * as React from 'react';
import { FlatList } from 'react-native';
import { View } from '../components/Themed';
import ChatListItems from "../components/ChatListItems";
import {useQuery} from "@apollo/client";
import {LOAD_ROOMS} from "../GraphQL/Queries";
import {useEffect, useState} from "react";
import {styles} from "./style";

export default function ChatsScreen() {
    const {data} = useQuery(LOAD_ROOMS);
    const [rooms, setRooms] = useState();

    useEffect(() => {
        if (data) {
            setRooms(data.usersRooms.rooms);
        }
    }, [data]);

    return (
        <View style={styles.roomsContainer}>
            <FlatList
                data={rooms}
                renderItem={({item, index}) => <ChatListItems rooms={item} userIndex={index} id={item.id}/>}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}
