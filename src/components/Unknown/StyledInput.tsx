import React from "react";
import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  data: string;
  setData: (data: string) => void;
  placeholder: string;
};
const width = Dimensions.get("window").width;

const StyledInput = ({ placeholder, data, setData }: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.heading}
        placeholder={placeholder}
        value={data}
        onChangeText={(text) => setData(text)}
      ></TextInput>
    </View>
  );
};

export default StyledInput;

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "lightgrey",
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: 8,
    borderStyle: "solid",
  },
  heading: {
    fontSize: 17,
    color: "gray",
  },
});
