import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  StatusBar,
} from "react-native";
import StyledInput from "../components/Unknown/StyledInput";
import StyledPassword from "../components/Unknown/StyledPassword";
import StyledButton from "../components/Unknown/StyledButton";
import { useAuth } from "../context/AuthContext";
import { useUser } from "../context/SettingsContext";
import { Users } from "../data/Users";
interface Props {
  route?: any;
  navigation?: any;
}
const Register = ({ navigation }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const authData = useAuth();
  const userData = useUser();
  userData.user.deliveryAdress = address;
  userData.user.email = email;

  const registerHandler = () => {
    if (confirmPassword !== password) {
      alert("Passwords do not match!");
      return;
    } else if (Users.some((user) => user.email == email)) {
      alert("Such email already exists");
      return;
    }
    authData.signUp(email, password, address);
    navigation.navigate("Tab");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.inputs}>
        <View>
          <Text style={styles.large}>Sign Up</Text>
        </View>
        <View style={styles.centerContainer}>
          <StyledInput placeholder="Email" data={email} setData={setEmail} />
          <StyledInput
            placeholder="Delivery Address"
            data={address}
            setData={setAddress}
          />
          <StyledPassword text={password} setPassword={setPassword} />
          <StyledPassword
            text={confirmPassword}
            setPassword={setConfirmPassword}
          />

          <View style={styles.bottomContainer}>
            <StyledButton text="Sign Up" onPress={registerHandler} />
            <Pressable
              style={styles.bottomPressable}
              onPress={() => navigation.navigate("LogIn")}
            >
              <Text style={styles.medium}>
                Already have an account? Sign in
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEEAE8",
  },
  bottomContainer: {
    flex: 1,
    alignItems: "center",
    gap: 10,
    marginBottom: 150,
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
    gap: 20,
    marginTop: 50,
  },
  inputs: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    marginHorizontal: 30,
    marginVertical: 150,
    gap: 20,
  },
  medium: {
    fontSize: 17,
    width: "70%",
    textAlign: "center",
  },
  large: {
    fontSize: 34,
    fontWeight: "700",
    textAlign: "center",
  },
  bottomPressable: { height: 30 },
});
export default Register;
