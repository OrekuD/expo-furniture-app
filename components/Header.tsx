import React, { useRef, useEffect, useState } from "react";
import { View, StyleSheet, Animated, Alert } from "react-native";
import { width } from "../constants/Layout";
// import { recommendedProducts } from "../data/products";
import { RectButton } from "react-native-gesture-handler";
import Text from "./Text";
import { BASE_URL, IMAGE_BASE_URL } from "../constants/Urls";
import { ProductObj } from "../types";

interface HeaderProps {
  navigation: any;
}

const ITEM_SIZE = width * 0.9 + width * 0.033;

const Header = ({ navigation }: HeaderProps) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [products, setProducts] = useState<Array<ProductObj>>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/products/furniture/recommended`
      );
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      Alert.alert("Connection error", "Please try again later");
    }
  };

  return (
    <View style={styles.container}>
      <Text text="Categories" variant="title" style={styles.title} />
      <Animated.ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_SIZE}
        decelerationRate="fast"
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { x: scrollX } },
            },
          ],
          { useNativeDriver: false }
        )}
      >
        {products.map((item, index) => {
          const { name, images, price, description, id } = item;
          return (
            <RectButton
              onPress={() => navigation.navigate("Product", { data: item })}
              key={id}
              style={{ ...styles.item }}
            >
              <Animated.Image
                source={{ uri: `${IMAGE_BASE_URL}${images[0].source}` }}
                style={{ ...styles.image }}
                resizeMode="contain"
              />
              <Text text={name} variant="tiny" style={{ fontSize: 16 }} />
            </RectButton>
          );
        })}
      </Animated.ScrollView>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 240,
    marginVertical: 20,
    width: ITEM_SIZE,
    borderRadius: 50,
    alignSelf: "center",
    overflow: "hidden",
  },
  item: {
    width: ITEM_SIZE,
    borderRadius: 50,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    marginRight: 5,
  },
  image: {
    width: ITEM_SIZE,
    height: 100,
  },
  title: {
    marginLeft: 10,
  },
});
