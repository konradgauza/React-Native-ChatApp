import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {Image, Text, View} from 'react-native';
import { RootStackParamList } from '../types';
import Colors from "../constants/Colors";
import ChatsScreen from "../screens/ChatsScreen";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import { ApolloProvider } from '@apollo/client';
import {client} from "../GraphQL/Auth";
import {styles} from "./style";

const Stack = createStackNavigator<RootStackParamList>();


export function RootNavigator() {
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
                              <Image source={require("../assets/icons/search.png")} style={styles.iconStyle}/>
                              <Image source={require("../assets/icons/rooms.png")} style={{...styles.iconStyle, marginRight: 15}}/>
                          </View>
                      )}
              }}
          />
            <Stack.Screen
                name="ChatRoom"
                component={ChatRoomScreen}
                options={({route}) => {
                    return ({
                        title: ' ',
                        headerRight: () => {
                            return (
                                <View style={{flexDirection: "row"}}>
                                    <Image source={require("../assets/icons/phone.png")} style={styles.iconStyle}/>
                                    <Image source={require("../assets/icons/videocall.png")} style={{...styles.iconStyle, marginRight: 15}}/>
                                </View>
                            )
                        },
                        gestureEnabled: true,
                        headerLeft: () => {
                            return (
                                <View style={{flexDirection: "row"}}>
                                    <Image source={{uri: route.params.roomPic}} style={styles.avatar}/>
                                    <View>
                                        <Text style={styles.name}>{route.params.name}</Text>
                                    </View>
                                </View>
                            )
                        }
                    });
                }}
            />
        </Stack.Navigator>
      </ApolloProvider>
  );
}
