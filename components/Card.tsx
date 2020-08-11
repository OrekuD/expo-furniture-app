import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { ProductObj } from "../types";
import { RectButton } from "react-native-gesture-handler";
import { width } from "../constants/Layout";
import Text from "./Text";

interface CardProps {
  data: ProductObj;
  navigation: any;
}

const IMAGE_SIZE = width * 0.3;

const Card = ({ data, navigation }: CardProps) => {
  const { name, id, price, images } = data;
  return (
    <RectButton
      onPress={() => navigation.navigate("Product", { data })}
      style={styles.container}
    >
      <Image
        source={images[0].source}
        style={styles.image}
        resizeMode="contain"
      />
      <Text text={name} variant="tiny" />
      <Text text={price} variant="tiny" style={styles.priceText} />
    </RectButton>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: width * 0.45,
    height: 200,
    backgroundColor: "#ffffff",
    borderRadius: 50,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE * 0.8,
    marginBottom: 5,
  },
  priceText: {
    color: "grey",
    fontSize: 16,
  },
});
