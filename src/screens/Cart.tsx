import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  StatusBar,
  ScrollView,
  Dimensions,
} from "react-native";

import SearchIcon from "../icons/SearchIcon";
import ProductCard from "../components/Unknown/ProductCard";
import { useUser } from "../context/SettingsContext";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { Users } from "../data/Users";
import CartProductCard from "../components/Unknown/CartProductCard";
type Props = {
  route: any;
  navigation: any;
};

export default function Cart({ navigation, route }: Props) {
  const userData = useUser();
  const findCart = () => {
    const updatedUser = Users.find(
      (u: any, i: number) => u.email == userData.user.email
    );
    return updatedUser?.cart;
  };
  const showUserCart = () => {
    if (currentCart)
      return currentCart.map((p: any, n: number) => (
        <View key={n}>
          <CartProductCard product={p} navigation={undefined} />
        </View>
      ));
  };

  const [currentCart, setCurrentCart] = useState(findCart());

  useEffect(() => {
    currentCart;
    console.log(currentCart);
  }, [currentCart]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.headerContainer}>
        <Text style={styles.menuName}>Cart</Text>
      </View>
      <View style={styles.scrollableContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
        >
          {showUserCart()}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    marginHorizontal: 20,
  },
  headerContainer: {
    marginTop: 40,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFF",
    borderColor: "#D9D0E3",
    borderWidth: 1,
    borderRadius: 30,
    width: "100%",
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
  },
  scrollableContainer: {
    flex: 1,
    width: "100%",
    marginBottom: 20,
  },
  categoriesContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 20,
  },
  menuName: {
    fontSize: 34,
    fontWeight: "700",
    color: "#2D0C57",
  },
  input: {
    marginLeft: 10,
    fontSize: 18,
    color: "gray",
  },
  iconContainer: {
    margin: 5,
  },
});
