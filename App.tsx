import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import LogIn from "./src/screens/LogIn";
import Register from "./src/screens/Register";
import AuthProvider from "./src/context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./src/navigation/RootNavigation";
import Categories from "./src/screens/Categories";
import CartProvider from "./src/context/CartContext";
import UserProvider from "./src/context/SettingsContext";
export default function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <CartProvider>
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
        </CartProvider>
      </UserProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
