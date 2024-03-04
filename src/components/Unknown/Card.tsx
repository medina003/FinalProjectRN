import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { ImageSourcePropType } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
// import { RootStackParams } from "../navigation/Index";
import { Image } from "expo-image";

interface CategoryProps {
  title: string;
  img: ImageSourcePropType;
  quantity: number;
  products: any[];
}

interface Props {
  data: CategoryProps;
  navigation: any;
}

const Card = ({ data, navigation }: Props) => {
  return (
    <Pressable onPress={() => navigation.navigate("Products", { data: data })}>
      <View style={styles.container}>
        <Image source={data.img} contentFit="cover" style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.quantity}>({data.quantity})</Text>
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 165,
    borderColor: "#D9D0E3",
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  image: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flex: 1,
  },
  content: {
    width: 165,
    height: 60,
    padding: 5,
    borderColor: "#D9D0E3",
    borderWidth: 1,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 18,
    color: "#2D0C57",
    fontWeight: "500",
  },
  quantity: {
    color: "#9586A8",
    fontSize: 12,
  },
});
