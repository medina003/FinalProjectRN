import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";
import Register from "../../screens/Register";
import LogIn from "../../screens/LogIn";
import BottomTabs from "../TabsNavigation";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
      <Stack.Screen name="LogIn" component={LogIn}></Stack.Screen>
      <Stack.Screen name="Register" component={Register}></Stack.Screen>
      <Stack.Screen name="Tab" component={BottomTabs}></Stack.Screen>
    </Stack.Navigator>
  );
};
export default RootNavigation;
