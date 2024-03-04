import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  ImageBackground,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FavoriteIcon from "../icons/FavoriteIcon";
import BasketIcon from "../icons/BasketIcon";
import { useState } from "react";

type Props = {
  route: any;
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Product({ route }: Props) {
  const [isActive, setIsActive] = useState(false);

  const { params } = route;
  const product = params.product;
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={product.img}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.whiteContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{product.price}</Text>
            <Text style={styles.pieceOrKg}>
              € / {product.isPiece === true ? "piece" : "kg"}
            </Text>
          </View>
          <Text style={styles.greenText}>~ 150 gr / piece</Text>
          <Text style={styles.country}>{product.country}</Text>
          <Text style={styles.desciption}>{product.description}</Text>
          <View style={styles.btns}>
            <Pressable
              style={styles.favContainer}
              onPress={() => setIsActive((prev) => !prev)}
            >
              <FavoriteIcon fill={isActive ? "red" : "none"} />
            </Pressable>
            <Pressable style={styles.basketContainer}>
              <BasketIcon height={80} width={80}></BasketIcon>
            </Pressable>
          </View>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  favContainer: {
    borderWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "#ffffff",
    width: 55,
    height: 50,
    borderRadius: 10,
    padding: 15,
  },
  basketContainer: {
    borderWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "#0bce83",
    width: 55,
    height: 50,
    borderRadius: 10,
    padding: 15,
  },
  image: {
    height: windowHeight / 2,
  },
  whiteContainer: {
    marginTop: 290,
    height: windowHeight * 0.7,
    width: windowWidth,
    backgroundColor: "#F6F5F5",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 25,
    paddingTop: 40,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  priceContainer: {
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  price: {
    color: "#2D0C57",
    fontSize: 28,
    fontWeight: "bold",
    marginRight: 5,
  },
  pieceOrKg: {
    color: "#9586A8",
    fontSize: 22,
  },
  title: {
    color: "#2D0C57",
    fontWeight: "bold",
    fontSize: 34,
  },
  greenText: {
    paddingBottom: 30,
    color: "#06BE77",
    fontWeight: "500",
    fontSize: 17,
  },
  country: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2D0C57",
  },
  desciption: {
    color: "#9586A8",
    flexWrap: "wrap",
    fontSize: 17,
    width: windowWidth * 0.9,
    paddingVertical: 10,
  },
  btns: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: 20,
  },
});
