import {Animated, FlatList, StyleSheet, Text, View, TouchableOpacity, Image, Dimensions} from 'react-native';
import React, {useRef, useState} from 'react';
import Rec from '../img/Rectangle2.png'
import Logo from '../assets/logo_text.png'
const { width, height } = Dimensions.get('screen');
import RegisternUi from '../img/pana.png'
import Title from '../Prop/title_reg_log'
import Inputs from '../Prop/Text_input2'
import WithGoogle from '../img/Google.png'
import WithaApple from '../img/apple.png'
import WithFacebook from '../img/facebook.png'
import { scale } from 'react-native-size-matters';



const Slider = ({navigation}) => {

  const Gologin = () =>{
    navigation.navigate('Login')
  }
  const GoHome = () =>{
    navigation.navigate('Home')
  }
  
  

  return (
    <View style={styles.container}>
      <View style={styles.main}>
      <Image source={Rec} style={{ width: 71 ,height: 134, marginTop: 0}}></Image>
      <Image source={Logo} style={styles.logo}></Image>
      </View>
      <View style={{alignItems:'center'}}>
      <Image source={RegisternUi} style={styles.loginui}></Image>
      </View>
      <Title Value={"Sign Up"}></Title>
      <View style={styles.text_input}>
        <Inputs Placrholder='Username' Placrholder1='Password' Placrholder3='confirm password'></Inputs>
      </View>
     
      
    </View>
  );
};

   

export default Slider;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    backgroundColor: 'white',
    flex: 1

  },
  main :{
    marginTop: scale(0),
   flexDirection: 'row',
   alignItems: 'center',

   gap: 57
  },
  logo:{
    width: 145,
    height: 36
  },
  loginui:{
    width: scale(220),
    height: scale(200)
  },
  text_input:{
    marginHorizontal: 24
 
  },
  btnLogin:{
    width: 300,
    height: 46,
    backgroundColor: '#2254C5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
   
  },
  loginWith: {
    flexDirection: 'row',
     gap: 7

  },
  btn:{
    width: 108,
    height: 43,
    borderWidth: 1,
    borderColor: '#B5B5B5',
    borderRadius: 10,
    marginTop: scale(10),
    justifyContent: 'center',
    alignItems: 'center'
  }
});
