import {
  View,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Text,
  Pressable,
} from "react-native";
import InputField from "../components/Unknown/InputField";
import React, { useState } from "react";
import { useUser } from "../context/SettingsContext";
import TextField from "../components/Unknown/TextField";

type Props = {
  navigation: any;
};

const windowWidth = Dimensions.get("window").width;

const CardChange = ({ navigation }: Props) => {
  const user = useUser();
  const [cardNumber, setCardNumber] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cardCVV, setCardCVV] = useState("");

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <View style={styles.titleContainer}>
          <TextField title="Credit/Debit card" />
        </View>
        <Text style={styles.title}>Card number</Text>
        <InputField
          placeholder="1234567812345678"
          data={cardNumber}
          setData={setCardNumber}
        />
        <Text style={styles.title}>Date</Text>
        <InputField placeholder="05/05" data={cardDate} setData={setCardDate} />
        <Text style={styles.title}>CVV</Text>
        <InputField placeholder="123" data={cardCVV} setData={setCardCVV} />
        <View style={styles.container}>
          <Pressable
            onPress={() => {
              user.changeCard(cardNumber, cardDate, cardCVV);
              navigation.navigate("Profile");
            }}
          >
            <View style={styles.btnContainer}>
              <Text style={styles.heading}>Use this card</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CardChange;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 20,
    alignSelf: "center",
    width: windowWidth * 0.9,
  },
  textcontainer: {
    width: 380,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    color: "black",
  },
  btnContainer: {
    width: windowWidth * 0.9,
    backgroundColor: "#5DB075",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  heading: {
    fontSize: 20,
    color: "white",
  },
  titleContainer: {
    marginBottom: 20,
  },
});
