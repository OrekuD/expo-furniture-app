import React, { useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { width } from "../constants/Layout";
import { recommendedProducts } from "../data/products";
import { RectButton } from "react-native-gesture-handler";
import Text from "./Text";

interface HeaderProps {
  navigation: any;
}

const ITEM_SIZE = width * 0.9 + width * 0.033;

const Header = ({ navigation }: HeaderProps) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
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
        {recommendedProducts.map((item, index) => {
          const { name, images, price, description, id } = item;
          return (
            <RectButton
              onPress={() => navigation.navigate("Product", { data: item })}
              key={id}
              style={{ ...styles.item }}
            >
              <Animated.Image
                source={images[0].source}
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
    height: 200,
    marginVertical: 20,
    width: ITEM_SIZE,
    borderRadius: 50,
    alignSelf: "center",
    overflow: "hidden",
  },
  item: {
    width: ITEM_SIZE,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: ITEM_SIZE,
    height: 100,
  },
});
