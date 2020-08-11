import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";
import { width } from "../constants/Layout";
import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import {
  NavigationHelpers,
  TabNavigationState,
} from "@react-navigation/native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

interface CustomTabProps {
  state: TabNavigationState;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<
    Record<string, object | undefined>,
    BottomTabNavigationEventMap
  >;
}

const CustomTab = ({ state, descriptors, navigation }: CustomTabProps) => {
  const routes = [
    {
      id: "0",
      icon: <AntDesign name="home" color="#121212" size={30} />,
      name: "Home",
    },
    {
      id: "1",
      icon: (
        <MaterialCommunityIcons name="shopping" color="#121212" size={30} />
      ),
      name: "Cart",
    },
  ];

  return (
    <Animated.View style={styles.container}>
      {routes.map(({ id, icon, name }, index) => {
        const isFocused = state.index === index;
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate(name)}
            key={id}
          ></TouchableOpacity>
        );
      })}
    </Animated.View>
  );
};

export default CustomTab;

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: width,
    backgroundColor: "grey",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
