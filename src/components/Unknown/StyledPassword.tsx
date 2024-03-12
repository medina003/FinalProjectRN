import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Pressable,
  Text,
  Dimensions,
} from "react-native";

type Props = {
  text: string;
  setPassword: (text: string) => void;
  placeholder: string;
};
const width = Dimensions.get("window").width;

const StyledPassword = ({ text, setPassword, placeholder }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.heading}
        placeholder={placeholder}
        secureTextEntry={!showPassword}
        value={text}
        onChangeText={(text) => setPassword(text)}
      />
      <Pressable
        onPress={() => setShowPassword(!showPassword)}
        style={({ pressed }) => ({
          opacity: pressed ? 0.6 : 1,
        })}
      >
        <Text style={styles.green}>{showPassword ? "Hide" : "Show"}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "lightgrey",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  heading: {
    fontSize: 17,
    color: "gray",
  },
  green: {
    color: "#5DB075",
  },
});

export default StyledPassword;
