import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  ImageBackground,
} from "react-native";
import { ImageSourcePropType } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import FavoriteIcon from "../../icons/FavoriteIcon";
import BasketIcon from "../../icons/BasketIcon";
import { useCart } from "../../context/CartContext";
import { Users } from "../../data/Users";
import { useAuth } from "../../context/AuthContext";
import { useUser } from "../../context/SettingsContext";
import Product from "../../screens/Product";
import DeleteIcon from "./DeleteIcon";

const windowWidth = Dimensions.get("window").width;

type Product = {
  title: string;
  price: number;
  country: string;
  description: string;
  isPiece: boolean;
  isFavorite: boolean;
  isInCart: boolean;
  img: undefined;
};
type Props = {
  product: Product;
  navigation: any;
};

const CartProductCard = ({ product, navigation }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const cart = useCart();
  const authData = useAuth();
  const user = authData.getUser(authData.email!, authData.password!);
  const userData = useUser();
  return (
    <Pressable>
      <View style={styles.mainContainer}>
        <ImageBackground
          source={product.img}
          borderRadius={15}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.container}></View>
        </ImageBackground>
        <View style={styles.content}>
          <Text style={styles.title}>{product.title}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{product.price}</Text>
            <Text style={styles.pieceOrKg}>
              € / {product.isPiece === true ? "piece" : "kg"}
            </Text>
          </View>
          <View style={styles.btnsContainer}>
            <Pressable
              style={styles.favContainer}
              onPress={() => setIsActive((prev) => !prev)}
            >
              <FavoriteIcon fill={isActive ? "red" : "none"} />
            </Pressable>
            <Pressable onPress={() => {}} style={styles.basketContainer}>
              <DeleteIcon height={60} width={80}></DeleteIcon>
            </Pressable>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.5,
    borderColor: "#D9D0E3",
    borderWidth: 1,
    height: 210,
    borderRadius: 15,
  },
  mainContainer: {
    flexDirection: "row",
    width: windowWidth * 0.5,
  },
  favContainer: {
    borderWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "#ffffff",
    width: 45,
    height: 40,
    borderRadius: 10,
    padding: 10,
  },
  basketContainer: {
    borderWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "red",
    width: 45,
    height: 40,
    borderRadius: 10,
    padding: 10,
    marginBottom: 4,
  },
  image: {
    alignItems: "center",
    borderColor: "#D9D0E3",
    borderWidth: 1,
    borderRadius: 15,
  },
  content: {
    width: windowWidth * 0.42,
    height: 210,
    paddingHorizontal: 10,
  },
  title: {
    color: "#2D0C57",
    fontWeight: "500",
    fontSize: 22,
  },
  priceContainer: {
    paddingVertical: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  price: {
    color: "#2D0C57",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 5,
  },
  pieceOrKg: {
    color: "#9586A8",
    fontSize: 18,
  },
  btnsContainer: {
    flex: 1,
    width: "80%",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});

export default CartProductCard;
