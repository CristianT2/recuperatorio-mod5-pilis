import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from './src/screens/home/HomeScreen';
import { ProfileScreen } from './src/screens/profile/ProfileScreen';
import { FoodListScreen } from './src/screens/food-list/FoodListScreen';
//import { useColorScheme } from 'nativewind';

const Tab = createBottomTabNavigator();
//const { colorScheme, toggleColorScheme } = useColorScheme();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Home' options={{ title: 'Inicio' }} component={HomeScreen} />
          <Tab.Screen name='Search' options={{ title: 'Explorar' }} component={FoodListScreen} />
          <Tab.Screen name='Profile' options={{ title: 'Cuenta' }} component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style='auto' />
    </>
  );
};

