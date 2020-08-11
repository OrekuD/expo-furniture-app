import * as React from "react";
import { Text as RNText, View, StyleSheet, TextStyle } from "react-native";

interface TextProps {
  text: string;
  style?: TextStyle;
  variant?: "default" | "title" | "tiny" | "subtitle";
}

const Text = ({ text, style, variant }: TextProps) => {
  let textStyle;
  switch (variant) {
    case "default":
      textStyle = styles.default;
      break;
    case "title":
      textStyle = styles.title;
      break;
    case "tiny":
      textStyle = styles.tiny;
      break;
    case "subtitle":
      textStyle = styles.subtitle;
      break;

    default:
      break;
  }
  return <RNText style={{ ...textStyle, ...style }}>{text}</RNText>;
};

export default Text;

const styles = StyleSheet.create({
  title: {
    fontFamily: "HeeboB",
    fontSize: 30,
    marginVertical: 10,
  },
  default: {
    fontFamily: "HeeboR",
    fontSize: 20,
  },
  tiny: {
    fontFamily: "HeeboR",
    fontSize: 18,
  },
  subtitle: {
    fontFamily: "HeeboM",
    fontSize: 24,
  },
});

Text.defaultProps = {
  variant: "default",
};
