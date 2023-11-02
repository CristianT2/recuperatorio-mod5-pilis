import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { MainStackScreen } from './src/screens/home/MainStackScreen';
import { FoodDetailScreen } from './src/screens/food-detail/FoodDetailScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const FoodListStack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <FoodListStack.Navigator screenOptions={{ headerShown: false }}>
          <FoodListStack.Screen name='Main' component={MainStackScreen} />
          <FoodListStack.Screen name='FoodDetail' component={FoodDetailScreen} />
        </FoodListStack.Navigator>
      </NavigationContainer>
      <StatusBar style='auto' />
    </>
  );
};

