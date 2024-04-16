import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "./components/LoginPage";
import SignupScreen from "./components/SignupScreen";
import SettingsScreen from "./components/Settings"; 
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
