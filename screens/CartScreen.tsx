import * as React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useAppContext } from "../context/Context";
import { CartItem, Text } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface CartScreenProps {}

const CartScreen = (props: CartScreenProps) => {
  const { cart, manageCart } = useAppContext();
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ ...styles.container, paddingTop: top }}>
      <View style={styles.header}>
        <Text text="Cart" variant="title" />
      </View>
      {cart.length === 0 ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text text="No items in cart" variant="tiny" />
        </View>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => <CartItem item={item} />}
        />
      )}
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
    height: 80,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingTop: 10,
  },
});
