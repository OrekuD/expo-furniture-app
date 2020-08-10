import React, { useEffect, useState } from "react";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
  FontAwesome,
} from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          ...Feather.font,
          ...AntDesign.font,
          ...MaterialCommunityIcons.font,
          ...MaterialIcons.font,
          ...FontAwesome.font,
          HeeboR: require("../assets/fonts/Heebo-Regular.ttf"),
          HeeboT: require("../assets/fonts/Heebo-Thin.ttf"),
          HeeboB: require("../assets/fonts/Heebo-Bold.ttf"),
          HeeboM: require("../assets/fonts/Heebo-Medium.ttf"),
        });
      } catch (e) {
        console.log(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
