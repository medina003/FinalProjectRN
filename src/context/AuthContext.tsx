import React, { createContext, useContext, useState } from "react";
import { Users } from "../data/Users";

type AuthContextType = {
  email: string | null;
  password: string | null;
  address: string | null;
  logIn: (email: string, password: string) => boolean;
  signUp: (email: string, password: string, address: string) => void;
  getUser: (email: string, password: string) => any;
};

export const AuthContext = createContext<AuthContextType>({
  email: null,
  password: null,
  address: null,
  logIn: (email: string, password: string) => false,
  signUp: (email: string, password: string, address: string) => {},
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

  const signUp = (email: string, password: string, address: string) => {
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
    Users.push(user);
    console.log(Users);
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
