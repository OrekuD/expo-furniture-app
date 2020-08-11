import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { BottomTabParamList, HomeStackParamsList } from "../types";
import { HomeScreen, ProductScreen, CartScreen } from "../screens";
import { CustomTabbar } from "../components";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();
const HomeStack = createStackNavigator<HomeStackParamsList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      tabBarOptions={{ keyboardHidesTabBar: true }}
      // screenOptions={{ tabBarVisible: false }}
      tabBar={({ descriptors, navigation, state }) => (
        <CustomTabbar {...{ descriptors, navigation, state }} />
      )}
    >
      <BottomTab.Screen name="Home" component={HomeNavigator} />
      <BottomTab.Screen name="Cart" component={CartScreen} />
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
      <HomeStack.Screen name="Product" component={ProductScreen} />
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
