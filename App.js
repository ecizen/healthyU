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
import SearchMenu from './component/SearchMenu.js'
import ArtiklePage from './component/Artikel/Artikel.js'
import Channels from './component/Channels.js'
import Remind from './component/Remind.js';
import History from './component/History.js';
import Chat from './component/Channels2.js'
import Habbit from './component/Habbit.js'
import Privacy from './component/Privacy.js'
import mainChann from './component/mainChannels.js'
import AddHabbit from './component/Addhabbit.js'


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
        <Stack.Screen
          name="SearchMenu"
          component={SearchMenu}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ArtikelPage"
          component={ArtiklePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Channels"
          component={Channels}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Remind"
          component={Remind}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="History"
          component={History}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Habbit"
          component={Habbit}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Privacy"
          component={Privacy}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="main"
          component={mainChann}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddHabbit"
          component={AddHabbit}
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
