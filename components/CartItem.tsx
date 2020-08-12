import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { CartObj } from "../types";
import { width } from "../constants/Layout";
import { IMAGE_BASE_URL } from "../constants/Urls";
import { useAppContext } from "../context/Context";
import Text from "./Text";
import { RectButton } from "react-native-gesture-handler";
import { Ionicons, Entypo } from "@expo/vector-icons";

interface CartItemProps {
  item: CartObj;
}

const CartItem = ({ item }: CartItemProps) => {
  const { name, images, price, count, total } = item;
  const { manageCart } = useAppContext();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: `${IMAGE_BASE_URL + images[0].source}` }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <View>
          <Text text={name} variant="tiny" style={styles.priceText} />
          <Text text={total} variant="tiny" price />
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={() => manageCart("DECREASE", item)}
          >
            <Entypo name="minus" size={20} />
          </TouchableOpacity>
          <View style={{ ...styles.button }}>
            <Text text={count} />
          </View>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={() => manageCart("INCREASE", item)}
          >
            <Entypo name="plus" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: 170,
    backgroundColor: "#ffffff",
    borderRadius: 50,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: "53%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "80%",
    height: "80%",
  },
  content: {
    flex: 1,
    height: "100%",
    justifyContent: "space-between",
    padding: 10,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    height: 60,
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 5,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
  priceText: {
    fontSize: 20,
    marginBottom: 20,
  },
});
