import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./src/screens/HomeScreen.js";
import AddEditScreen from "./src/screens/AddEditScreen.js";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "HomeScreen">
        <Stack.Screen name = "HomeScreen" component = {HomeScreen} options = {{headerShown: false}} />
        <Stack.Screen name = "AddEditScreen" component = {AddEditScreen} options = {{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
