import React, {useEffect} from "react";
import {View, Text, Image, TouchableWithoutFeedback} from "react-native";
import {ChatRoom} from "../../types";
import { styles } from "./style";
import moment from "moment";
import { useNavigation } from '@react-navigation/native'

export type ChatListItemProps = {
    rooms: ChatRoom;
    userIndex: number;
    id: string
}

const ChatListItems = (props: ChatListItemProps) => {
    // const { chatRoom, userIndex } = props;
    const { rooms, userIndex, id } = props;
    const navigation = useNavigation();
    // const messageTime = moment().diff(moment(rooms.lastMessage.createdAt), 'hours');

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
                        {/*<Text numberOfLines={1} style={userIndex === 0? {color: "white"} : {color: "black"}}>{chatRoom.lastMessage.content}</Text>*/}
                    </View>
                </View>
                {/*<Text style={styles.time}>*/}
                {/*    {messageTime > 24? moment(chatRoom.lastMessage.createdAt).format('DD/MM/YYYY')*/}
                {/*        : moment(chatRoom.lastMessage.createdAt).fromNow()}*/}
                {/*</Text>*/}
            </View>
        </TouchableWithoutFeedback>
    )
};

export default ChatListItems;