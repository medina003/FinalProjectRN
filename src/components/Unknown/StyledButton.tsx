import React from "react";
import { Pressable, StyleSheet, View, Text, Dimensions } from "react-native";

type Props = {
  text: string;
  onPress: () => void;
};
const width = Dimensions.get("window").width;
const StyledButton = ({ text, onPress }: Props) => {
  return (
    <Pressable style={styles.btnContainer} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    width: width * 0.9,
    height: 56,
    backgroundColor: "#0BCE83",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  text: {
    fontSize: 17,
    color: "white",
    lineHeight: 18,
  },
});

export default StyledButton;
