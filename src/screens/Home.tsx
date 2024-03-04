import {
  ImageBackground,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
} from "react-native";
import DIIcon from "../icons/DIIcon";
import BoxIcon from "../icons/BoxIcon";
import StyledButton from "../components/Unknown/StyledButton";
interface Props {
  route?: any;
  navigation?: any;
}

export default function Home({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.mainicon}>
      <ImageBackground
        source={require("../images/HomeBG.jpeg")}
        resizeMode="cover"
        style={styles.mainicon}
      >
        <View style={styles.iconContainer}>
          <DIIcon></DIIcon>
        </View>
        <View style={styles.bottomicon}>
          <BoxIcon />
          <Text style={styles.textTitle}>Non-Contact Deliveries</Text>
          <Text style={styles.text}>
            When placing an order, select the option “Contactless delivery” and
            the courier will leave your order at the door.
          </Text>
          <StyledButton
            text="Order now"
            onPress={() => navigation.navigate("LogIn")}
          />
        </View>
      </ImageBackground>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainicon: {
    flex: 1,
  },
  iconContainer: {
    marginTop: 50,
    maxHeight: 100,
    marginBottom: 150,
  },
  bottomicon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
    backgroundColor: "#F6F5F5",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  text: {
    color: "#9586A8",
    textAlign: "center",
    fontSize: 17,
    marginBottom: 15,
  },
  textTitle: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 34,
    width: "50%",
  },
});
