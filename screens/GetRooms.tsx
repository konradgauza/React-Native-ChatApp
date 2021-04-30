import React, { useEffect } from "react";
import {View} from "react-native";
import {useQuery, gql} from "@apollo/client";
import {LOAD_ROOMS} from "../GraphQL/Queries";

const GetRooms = () => {

    const {error, loading, data} = useQuery(LOAD_ROOMS);

    useEffect(() => {
        // console.log(data);
    }, data);

    return (
        <View>

        </View>
    )
}

export default GetRooms;