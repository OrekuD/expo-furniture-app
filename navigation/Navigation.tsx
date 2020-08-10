import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { BottomTabParamList, HomeStackParamsList } from "../types";
import { HomeScreen } from "../screens";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();
const HomeStack = createStackNavigator<HomeStackParamsList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={HomeNavigator} />
    </BottomTab.Navigator>
  );
};

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;