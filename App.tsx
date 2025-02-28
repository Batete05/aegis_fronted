import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import Welcome from "./screens/welcome/welcome";
import Navigation from "./navigation/navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Register from './screens/auth/register';
SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();
export default function SplashScreenComponent() {
  useEffect(() => {
    const loadApp = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      await SplashScreen.hideAsync();
    };

    loadApp();
  }, []);

  return (
    <NavigationContainer >
       <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
