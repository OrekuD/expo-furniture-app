import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, Alert } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// import { products } from "../data/products";
import { Card, Header } from "../components";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { width } from "../constants/Layout";
import { ProductObj } from "../types";
import { BASE_URL } from "../constants/Urls";

const HomeScreen = ({ navigation }: BottomTabScreenProps<{}>) => {
  const { top } = useSafeAreaInsets();
  const [products, setProducts] = useState<Array<ProductObj>>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products`);
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      Alert.alert("Ahh");
    }
  };

  return (
    <View style={{ ...styles.container, paddingTop: top }}>
      <FlatList
        data={products}
        renderItem={({ item }) => <Card data={item} navigation={navigation} />}
        ListHeaderComponent={() => <Header navigation={navigation} />}
        keyExtractor={({ id }) => id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    alignItems: "center",
  },
  row: {
    justifyContent: "space-evenly",
    width: width,
  },
});
