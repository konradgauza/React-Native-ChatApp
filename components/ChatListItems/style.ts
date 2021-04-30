import {Dimensions, StyleSheet} from 'react-native';
import Colors from "../../constants/Colors";

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        width: width - 13,
        justifyContent: "space-between",
        marginBottom: 12
    },
    firstContainer: {
        flexDirection: "row",
        backgroundColor: "#5603AD",
        borderRadius: 13,
        padding: 10,
        width: width - 10,
        justifyContent: "space-between",
        marginBottom: 12,
        marginTop: 30
    },
    leftContainer: {
        flexDirection: "row",
        maxWidth: "70%"
    },
    midContainer: {
        justifyContent: "center"
    },
    avatar: {
        width: 70,
        height: 70,
        marginRight: 10,
        borderRadius: 50
    },
    userName: {
        marginBottom: 5,
        fontWeight: "bold",
        fontSize: 14
    },
    firstUserName: {
        color: "white",
        marginBottom: 5,
        fontWeight: "bold",
        fontSize: 14
    },
    time: {
        color: "gray"
    }
});