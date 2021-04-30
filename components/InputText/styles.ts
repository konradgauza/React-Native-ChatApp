import {StyleSheet} from 'react-native';
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        backgroundColor: Colors.light.fieldsBackground,
        padding: 17,
        flexDirection: "row",
    },
    input: {
        backgroundColor: "white",
        borderRadius: 12,
        borderBottomRightRadius: 0,
        flex: 1,
        padding: 10,
        fontSize: 20
    },
    icon: {
        height: 50,
        width: 50,
        marginLeft: 7,
        marginRight: -3,
    }
});