import React, { useRef, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView, Animated } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { height, width } from "../constants/Layout";

const IMAGE_WIDTH = width * 0.6;
const DOT_SIZE = 10;
const ACTIVE_DOT_SIZE = DOT_SIZE * 3;

const ProductScreen = ({ navigation, route }: StackScreenProps<{}>) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const { data } = route.params;
  const { images, name, price } = data;

  const activeDotInputRange = [-width, 0, width];
  const activeDotTranslateX = scrollX.interpolate({
    inputRange: activeDotInputRange,
    outputRange: [-ACTIVE_DOT_SIZE, 0, ACTIVE_DOT_SIZE],
  });
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.pagination}>
          <Animated.View
            style={{
              ...styles.activeDot,
              transform: [{ translateX: activeDotTranslateX }],
            }}
          />
          {images.map(({ color }, index) => {
            return (
              <View key={index} style={styles.dotContainer}>
                <Animated.View
                  style={{ ...styles.dot, backgroundColor: color }}
                ></Animated.View>
              </View>
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
            const inputRange = [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ];
            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.2, 1, 0.2],
              extrapolate: "clamp",
            });

            const scale = scrollX.interpolate({
              inputRange,
              outputRange: [0.2, 1, 0.2],
              extrapolate: "clamp",
            });

            return (
              <View style={styles.imageContainer} key={index}>
                <Animated.Image
                  source={source}
                  resizeMode="contain"
                  style={{ ...styles.image, opacity, transform: [{ scale }] }}
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
    flexDirection: "row",
  },
  dotContainer: {
    width: DOT_SIZE * 3,
    height: DOT_SIZE * 3,
    borderRadius: DOT_SIZE * 1.5,
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    backgroundColor: "purple",
  },
  activeDot: {
    position: "absolute",
    width: ACTIVE_DOT_SIZE,
    height: ACTIVE_DOT_SIZE,
    borderRadius: ACTIVE_DOT_SIZE * 0.5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "purple",
  },
});
