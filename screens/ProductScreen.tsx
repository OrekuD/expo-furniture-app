import React, { useRef } from "react";
import { Text, View, StyleSheet, ScrollView, Animated } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { height, width } from "../constants/Layout";

const IMAGE_WIDTH = width * 0.6;
const DOT_SIZE = 8;

const ProductScreen = ({ navigation, route }: StackScreenProps<{}>) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const { data } = route.params;
  const { images, name, price } = data;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.pagination}>
          {images.map((_, index) => {
            const inputRange = [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ];
            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.5, 1, 0.5],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={index}
                style={{ ...styles.dot, opacity }}
              ></Animated.View>
            );
          })}
        </View>
        <Animated.ScrollView
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
        >
          {images.map(({ source }, index) => {
            return (
              <View style={styles.imageContainer} key={index}>
                <Animated.Image
                  source={source}
                  resizeMode="contain"
                  style={{ ...styles.image }}
                />
              </View>
            );
          })}
        </Animated.ScrollView>
      </View>
    </ScrollView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
  topSection: {
    width: width,
    height: height * 0.6,
    backgroundColor: "#ffffff",
    position: "relative",
  },
  imageContainer: {
    width: width,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
  },
  pagination: {
    position: "absolute",
    bottom: 10,
    right: 10,
    // paddingHorizontal: 10,
    flexDirection: "row",
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    backgroundColor: "purple",
    marginRight: DOT_SIZE,
  },
});
