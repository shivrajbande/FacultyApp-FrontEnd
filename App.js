
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './Screen1';
import Screen3 from './Screen3';
import Screen2 from './Screen2';




const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => null,
        }}
      >
        <Stack.Screen name="Screen-A" component={Screen1} />

        <Stack.Screen name="Screen-B" component={Screen2} />
        <Stack.Screen name="Screen-C" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





   

 
