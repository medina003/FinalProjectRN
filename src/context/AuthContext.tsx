import React, { createContext, useContext, useState } from "react";
import { Users } from "../data/Users";
import { Alert } from "react-native";

type AuthContextType = {
  email: string | null;
  password: string | null;
  address: string | null;
  logIn: (email: string, password: string) => boolean;
  signUp: (
    email: string,
    password: string,
    confirmPassword: string,
    address: string
  ) => boolean;
  getUser: (email: string, password: string) => any;
};

export const AuthContext = createContext<AuthContextType>({
  email: null,
  password: null,
  address: null,
  logIn: (email: string, password: string) => false,
  signUp: (
    email: string,
    password: string,
    confirmPassword: string,
    address: string
  ) => false,
  getUser: (email: string, password: string) => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}
export const useAuth = () => {
  return useContext(AuthContext);
};
const AuthProvider = ({ children }: AuthProviderProps) => {
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = (email: string, password: string) => {
    setEmail(email);
    setPassword(password);
    return Users.some(
      (user) => user.email == email && user.password == password
    );
  };

  const signUp = (
    email: string,
    password: string,
    confirmPassword: string,
    address: string
  ) => {
    const user = {
      email: email,
      password: password,
      paymentMethod: {
        nameOfCard: "",
        hexCode: "",
        date: "",
        cvv: "",
      },
      deliveryAdress: address,
      deliveryOpptions: "",
      nonContactDelivery: false,
      favorites: [],
      cart: [],
    };
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (Users.some((user) => user.email == email)) {
      alert("Such email already exists");
      return false;
    } else if (!emailPattern.test(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address");
      return false;
    } else if (!passwordPattern.test(password)) {
      Alert.alert(
        "Weak Password",
        "Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters"
      );
      return false;
    } else if (confirmPassword !== password) {
      alert("Passwords do not match!");
      return false;
    }
    Users.push(user);
    setEmail(email);
    setPassword(password);
    console.log(Users);
    return true;
  };
  const getUser = (email: string, password: string) => {
    const user = Users.find(
      (user) => user.email == email && user.password == password
    );
    return user;
  };

  const contextValue = { email, password, address, logIn, signUp, getUser };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
