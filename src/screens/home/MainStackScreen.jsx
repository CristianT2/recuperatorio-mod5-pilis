import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./HomeScreen";
import { FoodListScreen } from "../food-list/FoodListScreen";
import { ProfileScreen } from "../profile/ProfileScreen";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { COLORS } from '../../utils/theme'

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: 'home-variant',
  Profile: 'account',
  Search: 'food-variant'
}

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]
  return {
    tabBarIcon: ({ color }) => (
      <MaterialCommunityIcons name={iconName} size={35} color={color} />
    ),
    tabBarActiveTintColor: COLORS.primary,
    tabBarInactiveTintColor: COLORS.inactive,
    headerShown: false,
    tabBarStyle: { height: 59, },
  }
}

export const MainStackScreen = () => {

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" options={{ title: 'Inicio' }} component={HomeScreen}/>
      <Tab.Screen name="Search" options={{ title: 'Explorar' }} component={FoodListScreen}/>
      <Tab.Screen name="Profile" options={{ title: 'Perfil' }} component={ProfileScreen}/>
    </Tab.Navigator>
  ) 
};
