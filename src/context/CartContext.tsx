import React, { createContext, useContext, useState } from "react";
import { Users } from "../data/Users";
import { useAuth } from "./AuthContext";
import { useUser } from "./SettingsContext";

type Product = {
  title: string;
  price: number;
  country: string;
  description: string;
  isFavorite: boolean;
  isInCart: boolean;
  img: undefined;
  isPiece: boolean;
};
type CartContextType = {
  cart: any[];
  addToCart: (product: Product) => void;
  removeFromCart: (index: number) => void;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: (product: Product) => {},
  removeFromCart: (index: number) => {},
});

interface CartProviderProps {
  children: React.ReactNode;
}
export const useCart = () => {
  return useContext(CartContext);
};
const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Product[]>([]);
  const userData = useUser();
  const authData = useAuth();
  // userData.user.email = "jh";
  console.log(authData.email);
  const user = Users.find((user) => user.email == "k");
  const addToCart = (product: Product) => {
    const userIndex = Users.findIndex((u) => u.email === authData.email);
    if (userIndex !== -1) {
      Users[userIndex].cart.push(product);
      const updatedCart = [...cart, product];
      setCart(updatedCart);
    }
  };
  const removeFromCart = (index: number) => {
    const userIndex = Users.findIndex((u) => u.email === authData.email);
    if (userIndex !== -1) {
      console.log(index);
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setCart(updatedCart);
      Users[userIndex].cart = updatedCart;
    }
  };

  const contextValue = { cart, addToCart, removeFromCart };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
