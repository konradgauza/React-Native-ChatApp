import React, {useState} from "react";
import {View, Image, TextInput, TouchableOpacity} from "react-native";
import {styles} from "./styles";
import {useMutation} from "@apollo/client";
import {ADD_MESSAGE} from "../../GraphQL/Mutations";


export type TextInputProps = {
    id: string
}

const InputText = (props: TextInputProps) => {
    const [addTodo, { data }] = useMutation(ADD_MESSAGE);
    const { id } = props;
    const roomId = id;
    const [body, setBody] = useState('');
    const onPress = () => {
            addTodo({ variables: {body: body, roomId: roomId}});
            setBody('')
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                multiline={true}
                value={body}
                onChangeText={setBody}
            />
            <TouchableOpacity onPress={onPress} style={{alignSelf: "flex-end"}}>
                <Image source={require("../../assets/icons/send.png")} style={styles.icon}/>
            </TouchableOpacity>
        </View>
    )
}

export default InputText;