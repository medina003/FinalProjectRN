import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Dimensions } from "react-native";
// import { useUser } from "../context/UserContext";
import { SafeAreaView } from "react-native-safe-area-context";
import PayIcon from "../icons/PayIcon";
import HomeIcon from "../icons/HomeIcon";
import HandIcon from "../icons/HandIcon";
import { useUser } from "../context/SettingsContext";
import { useAuth } from "../context/AuthContext";

type Props = {
  navigation: any;
};

const windowWidth = Dimensions.get("window").width;

const Profile = ({ navigation }: Props) => {
  //   const userData = useAuth();
  //   const user = userData.getUser(userData.email!, userData.password!);
  const userData = useUser();
  const user = userData.user;
  const cardCode = user.paymentMethod?.hexCode?.slice(12, 16);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Payment method</Text>
          <Pressable
            onPress={() => navigation.navigate("CardChange")}
            style={styles.btnChangeContainer}
          >
            <Text style={styles.changeText}>Change</Text>
          </Pressable>
        </View>
        <View style={styles.payContainer}>
          <PayIcon width={40} height={40} />
          <Text style={styles.cardText}>**** **** **** </Text>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Delivery address</Text>
          <Pressable onPress={() => {}} style={styles.btnChangeContainer}>
            <Text style={styles.changeText}>Change</Text>
          </Pressable>
        </View>
        <View style={styles.payContainer}>
          <HomeIcon width={40} height={40} />
          <View>
            <Text style={styles.textAdress}>{user.deliveryAdress}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  containerProfile: {
    height: 80,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textProfile: {
    fontSize: 28,
    color: "#2D0C57",
    fontWeight: "600",
  },
  hiContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "45%",
    alignItems: "center",
  },
  container: {
    flex: 1,
    paddingTop: 40,
    alignSelf: "center",
    width: windowWidth * 0.9,
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    paddingVertical: 20,
  },
  cardText: {
    fontSize: 17,
    color: "#9586A8",
    fontWeight: "600",
  },
  payContainer: {
    display: "flex",
    flexDirection: "row",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  changeText: {
    color: "#7203FF",
    fontSize: 18,
    fontWeight: "bold",
  },
  btnChangeContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textAdress: {
    fontSize: 18,
    color: "#9586A8",
  },
});
