/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {ColorSchemeName, Image, View} from 'react-native';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import Colors from "../constants/Colors";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

const iconStyle ={
    height: 40,
    width: 40,
    marginRight: 8
}

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: Colors.light.headerBackground,
            height: 120,
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
          component={BottomTabNavigator}
          options={{
              title: "Rooms",
              headerRight: () => {
                  return <>
                      <View style={{flexDirection: "row"}}>
                          <Image source={require("../assets/icons/search.png")} style={iconStyle}/>
                          <Image source={require("../assets/icons/rooms.png")} style={{...iconStyle, marginRight: 15}}/>
                      </View>
                  </>
          }
          }}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
