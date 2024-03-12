import { createContext, useContext } from "react";
import { useAuth } from "./AuthContext";
import { useState } from "react";
import { Users } from "../data/Users";

type PaymentMethodType = {
  nameOfCard: string;
  hexCode: string;
  date: string;
  cvv: string;
};

type UserType = {
  email: string;
  password: string;
  paymentMethod?: PaymentMethodType;
  deliveryAdress?: string;
  deliveryOpptions?: string;
  nonContactDelivery?: boolean;
  favorites?: any[];
  cart?: any[];
  changeCard?: (hexCode: string, date: string, cvv: string) => boolean;
};

type UserContextType = {
  user: UserType;
  changeCard: (hexCode: string, date: string, cvv: string) => boolean;
};

export const UserContext = createContext<UserContextType>({
  user: {
    email: "",
    password: "",
    paymentMethod: {
      nameOfCard: "",
      hexCode: "",
      date: "",
      cvv: "",
    },
    deliveryAdress: "",
    deliveryOpptions: "",
    nonContactDelivery: false,
    favorites: [],
    cart: [],
  },
  changeCard: (hexCode: string, date: string, cvv: string) => false,
});

interface UserProviderProps {
  children: React.ReactNode;
}
export const useUser = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }: UserProviderProps) => {
  const userData = useAuth();
  const user = userData.getUser(userData.email!, userData.password!);
  const [hexCode, setHexCode] = useState("");
  const [date, setDate] = useState("");
  const [cvv, setCvv] = useState("");
  const changeCard = (hexCode: string, date: string, cvv: string) => {
    const cardNumberPattern = /^\d{16}$/;
    const expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const cvvPattern = /^\d{3,4}$/;

    if (!cardNumberPattern.test(hexCode)) {
      alert("Invalid card number");
      return false;
    } else if (!expiryDatePattern.test(date)) {
      alert("Invalid expiry date");
      return false;
    } else if (!cvvPattern.test(cvv)) {
      alert("Invalid CVV");
      return false;
    }
    user.paymentMethod.hexCode = hexCode;
    user.paymentMethod.date = date;
    user.paymentMethod.cvv = cvv;
    const index = Users.findIndex((u) => u.email === user.email);

    if (index !== -1) {
      Users[index] = user;
    }
    console.log(Users);

    return true;
  };

  const contextValue = { user, changeCard };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
