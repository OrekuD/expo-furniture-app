import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { ProductObj } from "../types";
import { RectButton } from "react-native-gesture-handler";

interface CardProps {
  data: ProductObj;
  navigation: any;
}

const Card = ({ data, navigation }: CardProps) => {
  const { name, id, price, images } = data;
  return (
    <RectButton
      onPress={() => navigation.navigate("Product", { data })}
      style={styles.container}
    >
      <Text>{name}</Text>
    </RectButton>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
    backgroundColor: "purple",
    borderRadius: 10,
    marginBottom: 10,
  },
});
