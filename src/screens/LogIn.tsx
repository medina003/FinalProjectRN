import React, { useContext, useState } from "react";
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
import AuthContext, { useAuth } from "../context/AuthContext";
import { useUser } from "../context/SettingsContext";
interface Props {
  route?: any;
  navigation?: any;
}
const Login = ({ navigation }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authData = useAuth();
  const userData = useUser();
  userData.user.email = email;
  const loginHandler = () => {
    if (authData.logIn(email, password)) navigation.navigate("Tab");
    else alert("Incorrect");
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.inputs}>
        <View>
          <Text style={styles.large}>Log In</Text>
        </View>
        <View style={styles.centerContainer}>
          <StyledInput placeholder="Email" data={email} setData={setEmail} />
          <StyledPassword
            placeholder="Password"
            text={password}
            setPassword={setPassword}
          />
          <View style={styles.bottomContainer}>
            <StyledButton text="Log In" onPress={loginHandler} />
            <Pressable
              style={styles.bottomPressable}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={styles.medium}>Don't have an account? Sign up</Text>
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
    marginBottom: 100,
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
    marginVertical: 50,
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
export default Login;
