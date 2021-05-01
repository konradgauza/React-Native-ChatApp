import React from "react";
import {View, Text, Image, TouchableWithoutFeedback} from "react-native";
import {ChatRoom} from "../../types";
import { styles } from "./style";
import { useNavigation } from '@react-navigation/native'

export type ChatListItemProps = {
    rooms: ChatRoom;
    userIndex: number;
    id: string
}

const ChatListItems = (props: ChatListItemProps) => {
    const { rooms, userIndex, id } = props;
    const navigation = useNavigation();

    const onClick = () => {
        navigation.navigate('ChatRoom', {id: rooms.id, name: rooms.name, roomPic: rooms.roomPic});
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={userIndex === 0? styles.firstContainer : styles.container}>
                <View style={styles.leftContainer}>
                    <Image source={{uri: rooms.roomPic}} style={styles.avatar}/>
                    <View style={styles.midContainer}>
                        <Text style={userIndex === 0? styles.firstUserName : styles.userName}>{rooms.name}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default ChatListItems;