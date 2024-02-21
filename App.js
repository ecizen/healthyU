import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import Slider from './component/Slider'
import Login from './component/Login'
import Register from './component/Register'
import Home from './component/Home'
import Tes from './component/Tes'
import Profile from './component/Profile'
import Suplement from './component/Suplement.js'
import BMI from './component/Bmi.js'
import Training from './component/training.js';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Tes"
          component={Tes}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="Slider"
          component={Slider}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="Suplement"
          component={Suplement}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="Training"
          component={Training}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BMI"
          component={BMI}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
     
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
