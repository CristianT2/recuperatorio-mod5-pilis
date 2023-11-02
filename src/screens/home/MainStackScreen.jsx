import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./HomeScreen";
import { FoodListScreen } from "../food-list/FoodListScreen";
import { ProfileScreen } from "../profile/ProfileScreen";

const Tab = createBottomTabNavigator();

export const MainStackScreen = () => {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" options={{ title: 'Inicio' }} component={HomeScreen}/>
      <Tab.Screen name="Search" options={{ title: 'Explorar' }} component={FoodListScreen}/>
      <Tab.Screen name="Profile" options={{ title: 'Perfil' }} component={ProfileScreen}/>
    </Tab.Navigator>
  ) 
};