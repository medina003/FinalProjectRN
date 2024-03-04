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
type Props = {
  route: any;
  navigation: any;
};

export default function Products({ navigation, route }: Props) {
  const { params } = route;
  const data = params.data.products;
  function renderProducts() {
    return data.map((product: any, i: number) => (
      <ProductCard product={product} key={i} navigation={navigation} />
    ));
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.headerContainer}>
        <Text style={styles.menuName}>Products</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.iconContainer}>
          <SearchIcon />
        </View>
        <TextInput style={styles.input} placeholder="Search"></TextInput>
      </View>
      <View style={styles.scrollableContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
        >
          {renderProducts()}
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
