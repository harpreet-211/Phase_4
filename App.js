import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import LoginPage from "./Components/LoginPage";
import SearchComponent from "./Components/Search";
import AddPostScreen from "./Components/chatscreen";
import ProfileScreen from "./Components/ProfilePage";
import SettingsScreen from "./Components/SettingsScreen";
import EditProfileScreen from "./Components/EditProfileScreen";
import ActivityHistoryScreen from "./Components/ActivityHistoryScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "search-outline";
            } else if (route.name === "Chat") {
              iconName = focused ? "add-circle" : "add-circle-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={LoginPage} />
        <Tab.Screen name="Search" component={SearchComponent} />
        <Tab.Screen name="Chat" component={AddPostScreen} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="ActivityHistory" component={ActivityHistoryScreen} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
    </Stack.Navigator>
  );
};

export default App;
