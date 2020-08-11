import React, { useEffect, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Easing,
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
import { AntDesign, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { useAppContext } from "../context/Context";

interface CustomTabProps {
  state: TabNavigationState;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<
    Record<string, object | undefined>,
    BottomTabNavigationEventMap
  >;
}

const Icon = ({ name, color }: { name: string; color: string }) => {
  if (name === "Home") {
    return <Feather name="home" color={color} size={26} />;
  } else if (name === "Cart") {
    return <MaterialCommunityIcons name="shopping" color={color} size={28} />;
  } else {
    return <View />;
  }
};

const routes = [
  {
    id: "0",
    name: "Home",
  },
  {
    id: "1",
    name: "Cart",
  },
];

const CustomTab = ({ state, descriptors, navigation }: CustomTabProps) => {
  const translateY = useRef(new Animated.Value(70)).current;
  const { tabbarState } = useAppContext();

  const animateTabbar = (state: "hide" | "show") => {
    if (state === "hide") {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
        easing: Easing.linear,
      }).start();
    } else if (state === "show") {
      Animated.timing(translateY, {
        toValue: 70,
        duration: 500,
        useNativeDriver: false,
        easing: Easing.ease,
      }).start();
    }
  };

  useEffect(() => {
    animateTabbar(tabbarState);
  }, [tabbarState]);

  return (
    <Animated.View style={{ ...styles.container, height: translateY }}>
      {routes.map(({ id, name }, index) => {
        const isFocused = state.index === index;
        const color = isFocused ? "purple" : "#121212";
        return (
          <BorderlessButton onPress={() => navigation.navigate(name)} key={id}>
            <View
              style={{ ...styles.tab, borderBottomWidth: isFocused ? 4 : 0 }}
            >
              <Icon name={name} color={color} />
            </View>
          </BorderlessButton>
        );
      })}
    </Animated.View>
  );
};

export default CustomTab;

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: width,
    backgroundColor: "#f8f8f8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  tab: {
    height: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 20,
    borderColor: "purple",
    paddingBottom: 2,
    alignItems: "center",
  },
});
