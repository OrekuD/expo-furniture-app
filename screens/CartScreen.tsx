import * as React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { useAppContext } from "../context/Context";
import { CartItem } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface CartScreenProps {}

const CartScreen = (props: CartScreenProps) => {
  const { cart, manageCart } = useAppContext();
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ ...styles.container, paddingTop: top }}>
      <View style={styles.header}>
        <Text>CartScreen</Text>
      </View>
      <FlatList
        data={cart}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <CartItem item={item} />}
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    alignItems: "center",
  },
  header: {
    height: 70,
  },
});
