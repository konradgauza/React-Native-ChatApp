import {Dimensions, StyleSheet} from 'react-native';
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
    message: {
        backgroundColor: "white",
        padding: 10,
        marginBottom: 15,
        marginLeft: "12%",
        borderRadius: 13,
        width: "auto",
        maxWidth: "65%",
        alignSelf: "flex-start",
        borderBottomLeftRadius: 0
    },
    myMessage: {
        backgroundColor: "#993AFC",
        padding: 10,
        marginBottom: 15,
        marginRight: "6%",
        borderRadius: 13,
        width: "auto",
        maxWidth: "65%",
        alignSelf: "flex-end",
        borderBottomRightRadius: 0,
    },
    text: {
        color: "black"
    },
    myText: {
        color: "white"
    }
});