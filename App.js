import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from './src/screens/home/HomeScreen';
import { ProfileScreen } from './src/screens/profile/ProfileScreen';
//import { useColorScheme } from 'nativewind';

const Tab = createBottomTabNavigator();
//const { colorScheme, toggleColorScheme } = useColorScheme();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Home' component={HomeScreen} />
          <Tab.Screen name='Profile' component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style='auto' />
    </>
  );
};

