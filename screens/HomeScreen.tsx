import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Alert,
  ActivityIndicator,
} from "react-native";
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
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products/furniture`);
      const data = await response.json();
      setProducts(data.products);
      setIsLoading(false);
    } catch (error) {
      Alert.alert("Connection error", "Please try again later");
    }
  };

  return (
    <View style={{ ...styles.container, paddingTop: top }}>
      {isLoading ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color="darkslategrey" />
        </View>
      ) : (
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <Card data={item} navigation={navigation} />
          )}
          ListHeaderComponent={() => <Header navigation={navigation} />}
          keyExtractor={({ id }) => id}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
      )}
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
