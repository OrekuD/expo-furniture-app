import * as React from "react";
import { Text as RNText, View, StyleSheet, TextStyle } from "react-native";

interface TextProps {
  text: string | number;
  style?: TextStyle;
  variant?: "default" | "title" | "tiny" | "subtitle";
  price?: boolean;
}

const Text = ({ text, style, variant, price }: TextProps) => {
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

  if (price) {
    return <RNText style={{ ...textStyle, ...style }}>&#8373; {text}</RNText>;
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
    fontFamily: "HeeboB",
    fontSize: 16,
  },
  subtitle: {
    fontFamily: "HeeboM",
    fontSize: 24,
  },
});

Text.defaultProps = {
  variant: "default",
};
