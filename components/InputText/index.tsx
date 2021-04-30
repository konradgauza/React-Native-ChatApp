import React, {useState} from "react";
import {View, Image, TextInput, TouchableOpacity} from "react-native";
import {styles} from "./styles";

const InputText = () => {

    const [message, setMessage] = useState('');
    const onPress = () => {
        if(message.length !== 0){
            console.warn("Sent")
            //send a message to the backend
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                multiline={true}
                value={message}
                onChangeText={setMessage}
            />
            <TouchableOpacity onPress={onPress} style={{alignSelf: "flex-end"}}>
                <Image source={require("../../assets/icons/send.png")} style={styles.icon}/>
            </TouchableOpacity>
        </View>
    )
}

export default InputText;