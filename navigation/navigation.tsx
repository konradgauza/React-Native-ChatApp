import {ColorSchemeName} from "react-native";
import {DarkTheme, DefaultTheme, NavigationContainer} from "@react-navigation/native";
import LinkingConfiguration from "./LinkingConfiguration";
import * as React from "react";
import {RootNavigator} from "./index";



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
