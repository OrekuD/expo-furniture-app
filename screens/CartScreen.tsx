import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface CartScreenProps {}

const CartScreen = (props: CartScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>CartScreen</Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
