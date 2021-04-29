/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {ColorSchemeName, Image, View} from 'react-native';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import Colors from "../constants/Colors";
import ChatsScreen from "../screens/ChatsScreen";
import ChatRoomScreen from "../screens/ChatRoomScreen";


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
    height: 50,
    width: 50,
    marginRight: 8
}

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: Colors.light.fieldsBackground,
            height: 130,
            borderRadius: 22
        },
        headerTintColor: Colors.light.headerTitle,
        headerTitleAlign: "left",
        headerTitleStyle: {
            fontSize: 30
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
                    title: route.params.name,
                    headerRight: () => {
                        return (
                            <View style={{flexDirection: "row"}}>
                                <Image source={require("../assets/icons/phone.png")} style={iconStyle}/>
                                <Image source={require("../assets/icons/videocall.png")} style={{...iconStyle, marginRight: 15}}/>
                            </View>
                        )
                    },
                    // headerLeft: () => {
                    //     return (
                    //         <View style={{flexDirection: "row"}}>
                    //             <Image source={require("../assets/icons/phone.png")} style={iconStyle}/>
                    //             <Image source={require("../assets/icons/videocall.png")} style={{...iconStyle, marginRight: 15}}/>
                    //         </View>
                    //     )
                    // }
                });
            }}
        />
    </Stack.Navigator>
  );
}
