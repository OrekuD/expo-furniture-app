import React, { useRef, useEffect } from "react";
import { View, StyleSheet, ScrollView, Animated } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { height, width } from "../constants/Layout";
import { Text } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const IMAGE_SIZE = width * 0.7;
const DOT_SIZE = 10;
const ACTIVE_DOT_SIZE = DOT_SIZE * 3;

const ProductScreen = ({ navigation, route }: StackScreenProps<{}>) => {
  const { top } = useSafeAreaInsets();
  const scrollX = useRef(new Animated.Value(0)).current;
  const { data } = route.params;
  const { images, name, price, description } = data;

  const activeDotInputRange = [-width, 0, width];
  const activeDotTranslateX = scrollX.interpolate({
    inputRange: activeDotInputRange,
    outputRange: [-ACTIVE_DOT_SIZE, 0, ACTIVE_DOT_SIZE],
  });
  return (
    <ScrollView style={{ ...styles.container, paddingTop: top }}>
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
                  style={{
                    ...styles.dot,
                    backgroundColor: color ? color : "purple",
                  }}
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
      <View style={styles.bottomSection}>
        <Text text={name} variant="title" />
        <Text text={description} />
      </View>
    </ScrollView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topSection: {
    width: width,
    height: height * 0.6,
    backgroundColor: "#ffffff",
    position: "relative",
  },
  priceContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  priceText: {
    fontSize: 50,
  },
  bottomSection: {
    flex: 1,
    width: width,
    height: 1000,
    padding: 10,
    backgroundColor: "#f4f4f4",
  },
  imageContainer: {
    width: width,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
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
