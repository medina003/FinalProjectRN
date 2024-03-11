import React, { createContext, useContext, useState } from "react";
import { Users } from "../data/Users";
import { useAuth } from "./AuthContext";

type Product = {
  title: string;
  price: number;
  country: string;
  description: string;
  isFavorite: boolean;
  isInCart: boolean;
  img: undefined;
  isPiece: false;
};
type CartContextType = {
  addToCart?: (product: Product) => void;
};

export const CartContext = createContext<CartContextType>({
  addToCart: (product: Product) => {},
});

interface CartProviderProps {
  children: React.ReactNode;
}
export const useCart = () => {
  return useContext(CartContext);
};
const CartProvider = ({ children }: CartProviderProps) => {
  const authData = useAuth();
  const currentUser = authData.getUser(authData.email!, authData.password!);
  const currentcart = currentUser.cart;
  const addToCart = (product: Product) => {
    currentcart.push(product);
    let index;
    Users.forEach((u, i) => {
      if (u.email === currentUser.email) {
        index = i;
        return;
      }
    });

    if (index != null) {
      Users[index].cart = currentcart;
    }
  };

  const contextValue = { addToCart };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;