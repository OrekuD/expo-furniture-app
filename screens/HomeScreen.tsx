import * as React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { products } from "../data/products";
import { Card } from "../components";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

const HomeScreen = ({ navigation }: BottomTabScreenProps<{}>) => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ ...styles.container, paddingTop: top }}>
      <FlatList
        data={products}
        renderItem={({ item }) => <Card data={item} navigation={navigation} />}
        keyExtractor={({ id }) => id}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
});
