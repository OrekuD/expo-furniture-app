import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { width } from "../constants/Layout";

interface HeaderProps {
  navigation: any;
}

const Header = (props: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: "yellow",
    marginVertical: 20,
    width: width * 0.9 + width * 0.033,
    borderRadius: 50,
    alignSelf: "center",
    overflow: "hidden",
  },
});
