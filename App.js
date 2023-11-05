import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { MainStackScreen } from './src/screens/home/MainStackScreen';
import { FoodDetailScreen } from './src/screens/food-detail/FoodDetailScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserProvider} from './src/contexts/UserContext';

const FoodListStack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <UserProvider>
        <NavigationContainer>
          <FoodListStack.Navigator screenOptions={{ headerShown: false }}>
            <FoodListStack.Screen name='Main' component={MainStackScreen} />
            <FoodListStack.Screen name='FoodDetail' component={FoodDetailScreen} />
          </FoodListStack.Navigator>
        </NavigationContainer>
      </UserProvider>
      <StatusBar style='auto' />
    </>
  );
};

