import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface HomeScreenProps {}

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ ...styles.container, paddingTop: top }}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
});
