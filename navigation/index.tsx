/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {ColorSchemeName, Image, Text, View} from 'react-native';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import Colors from "../constants/Colors";
import ChatsScreen from "../screens/ChatsScreen";
import ChatRoomScreen from "../screens/ChatRoomScreen";
//
// import { ApolloProvider} from "react-apollo";
// import { ApolloClient} from "apollo-client";
// import { HttpLink } from "apollo-link-http";
// import { InMemoryCache } from "apollo-cache-inmemory";
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {useEffect} from "react";
import {split, useSubscription} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import {onError} from "@apollo/client/link/error";
import GetRooms from "../screens/GetRooms";
import {setContext} from "@apollo/client/link/context";


const rooms  = gql`
    query {
        usersRooms {
            rooms {
              id
              name
              roomPic
            }
            user {
              email
              firstName
              id
              lastName
              profilePic
              role
            }
        }
    }`


const httpLink = new HttpLink({
    uri: "https://chat.thewidlarzgroup.com/api/graphql"
});

const authLink = setContext((_, { headers }) => {
    const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2MjE1MDY1NTYsImlhdCI6MTYxOTA4NzM1NiwiaXNzIjoiY2hhdGx5IiwianRpIjoiZTVkYTk1YjUtYzRkOC00NmMyLWI2NGEtOGYxNjMzN2UzNmJlIiwibmJmIjoxNjE5MDg3MzU1LCJzdWIiOiI4Y2IzZGRlNC1iZTRjLTRhYmQtYmI0ZS05MWE0NWI4MDk3ZGUiLCJ0eXAiOiJhY2Nlc3MifQ.YXmANaLyeh7kBM2QpA1bSIj9rpQXb86mp-g03sv7My24DvsPs4SO3E2J4spYWsU0i8McPUw9G7S0laGSAVSxjg";

    return {
        headers: {
            ...headers,
            authorization: `Bearer ${token}`
        }
    }
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink)
})













export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
        <RootNavigator/>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

const iconStyle ={
    height: 40,
    width: 40,
    marginRight: 8,
    borderRadius: 50
}

const avatar = {
    height: 40,
    width: 40,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 50
}

const name = {
    maxWidth: "80%",
}


function RootNavigator() {


  return (
      <ApolloProvider client={client}>
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: Colors.light.fieldsBackground,
                height: 125,
                borderRadius: 25
            },
            headerTintColor: Colors.light.headerTitle,
            headerTitleAlign: "left",
            headerTitleStyle: {
                fontSize: 36,
                lineHeight: 54
            },
            cardStyle: {
                backgroundColor: "#F0F8FF"
            }
        }}>
          <Stack.Screen
              name="Root"
              component={ChatsScreen}
              options={{
                  title: "Rooms",
                  headerRight: () => {
                      return(
                          <View style={{flexDirection: "row"}}>
                              <Image source={require("../assets/icons/search.png")} style={iconStyle}/>
                              <Image source={require("../assets/icons/rooms.png")} style={{...iconStyle, marginRight: 15}}/>
                          </View>
                      )}
              }}
          />
            <Stack.Screen
                name="ChatRoom"
                component={ChatRoomScreen}
                options={({route}) => {
                    return ({
                        title: '',
                        headerRight: () => {
                            return (
                                <View style={{flexDirection: "row"}}>
                                    <Image source={require("../assets/icons/phone.png")} style={iconStyle}/>
                                    <Image source={require("../assets/icons/videocall.png")} style={{...iconStyle, marginRight: 15}}/>
                                </View>
                            )
                        },
                        gestureEnabled: true,
                        headerLeft: () => {
                            return (
                                <View style={{flexDirection: "row"}}>
                                    <Image source={{uri: route.params.roomPic}} style={avatar}/>
                                    <View>
                                        <Text style={name}>{route.params.name}</Text>
                                    </View>
                                </View>
                            )
                        }
                    });
                }}
            />
        </Stack.Navigator>
      </ApolloProvider>

      // <ApolloProvider client={client}>
      //     <GetRooms/>
      // </ApolloProvider>
  );
}
