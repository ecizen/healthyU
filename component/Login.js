import {Animated, FlatList, StyleSheet, Text, View, TouchableOpacity, Image, Dimensions} from 'react-native';
import React, {useRef, useState} from 'react';
import Rec from '../img/Rectangle2.png'
import Logo from '../assets/logo_text.png'

import LoginUi from '../img/rafiki.png'
import Title from '../Prop/title_reg_log'
import TextInput from '../Prop/Text_Input'
import WithGoogle from '../img/Google.png'
import WithaApple from '../img/apple.png'
import WithFacebook from '../img/facebook.png'

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
size + (scale(size) - size) * factor;


export { scale, verticalScale, moderateScale, screenSize };


const { width, height } = Dimensions.get('screen');

const screenSize = Math.sqrt(width * height) / 100;


const Login = ({navigation}) => {

  const GoRegister = () =>{
    navigation.navigate('Register')
  }
  const GoHome = () =>{
    navigation.navigate('Home')
  }
  
  

  return (
    <View style={ styles.container}>
      <View style={styles.main}>
      <Image source={Rec} style={{ width: 71 ,height: 134, marginTop: 0}}></Image>
      <Image source={Logo} style={styles.logo}></Image>
      </View>
      <View style={{ alignItems: 'center'}}>
      <Image source={LoginUi} style={styles.loginui}></Image>
      </View>
      <Title Value={"Sign In"}></Title>
      <View style={styles.text_input}>
        <TextInput Placrholder='Username' Placrholder1='Password'></TextInput>
      </View>
      <View style={{alignItems: 'center'}}>
      <TouchableOpacity style={styles.btnLogin}><Text style={{ color: 'white'}} onPress={GoHome}>Sign in</Text></TouchableOpacity>
      <Text style={{marginTop: 22,fontSize: 12 , color: '#938E8E', fontWeight: '400'}}>Or sign with</Text>
      <View style={styles.loginWith}>
        <TouchableOpacity style={styles.btn}><Image source={WithGoogle} style={{width: 24, height: 25}}></Image></TouchableOpacity>
        <TouchableOpacity style={styles.btn}><Image source={WithaApple} style={{width: 24, height: 30}}></Image></TouchableOpacity>
        <TouchableOpacity style={styles.btn}><Image source={WithFacebook} style={{width: 27, height: 27}}></Image></TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginTop: 13}}>
       <Text style={{color: '#938E8E'}}>Do you have not account ? </Text>
       <TouchableOpacity><Text style={{fontWeight: 'bold', color: '#2254C5'}} onPress={GoRegister}>Register</Text></TouchableOpacity>
      </View>
      
      </View>
      
    </View>
  );
};

   

export default Login;

const styles = StyleSheet.create({
  container: {
    width: width,
    height,
    marginTop: 0,
 
    flex: 1

  },
  main :{
    marginTop: 0,
   flexDirection: 'row',
   alignItems: 'center',

   gap: 57
  },
  logo:{
    width: 145,
    height: 36
  },
  loginui:{
    width: 371,
    height: 276
  },
  text_input:{
   alignItems: 'center',
   paddingHorizontal: 23,
   marginHorizontal: 23
   
  },
  btnLogin:{
    width: 345,
    height: 46,
    backgroundColor: '#2254C5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 12,
   
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
    marginTop: 21,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
