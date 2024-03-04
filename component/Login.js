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
import Article from '../data';
import { scale } from 'react-native-size-matters';








const Login = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const GoRegister = () =>{
    navigation.navigate('Register')
  }
  const GoHome = () =>{
    navigation.navigate('Home')
  }

  const ValidasiLogin = (email, password) => {
    const emailUser = 'har'
    const passwordUser = '12345678';

    if(email === emailUser && password === passwordUser) {
      console.log('login berhasil')
      navigation.navigate('Home')
    } else{
      console.log('salah')
    }
  }
  
  return (
    <View style={ styles.container}>
      <View style={styles.main}>
      <Image source={Rec} style={{ width: 71 ,height: 134,top: 0 }}></Image>
      <Image source={Logo} style={styles.logo}></Image>
      </View>
      <View style={{ alignItems: 'center'}}>
      <Image source={LoginUi} style={styles.loginui}></Image>
      </View>
      <Title Value={"Sign In"}></Title>
      <View style={styles.text_input}>
        <TextInput Placrholder='Username' Placrholder1='Password' valEmail={email} valPassword={password}  EmailInput={(text) => setEmail(text)} PasswordInput={(text) => setPassword(text)}></TextInput>
      </View>
      <View style={{alignItems: 'center'}}>
     
      <Text style={{marginTop: 15,fontSize: 12 , color: '#938E8E', fontWeight: '400'}}>Or sign with</Text>
      <View style={styles.loginWith}>
        <TouchableOpacity  style={styles.btn}><Image source={WithGoogle} style={{width: 24, height: 25}}></Image></TouchableOpacity>
        <TouchableOpacity style={styles.btn}><Image source={WithFacebook} style={{width: 27, height: 27}}></Image></TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginTop: 13}}>
       <Text style={{color: '#938E8E'}}>Do you have an account ? </Text>
       <TouchableOpacity><Text style={{fontWeight: 'bold', color: '#2254C5'}} onPress={GoRegister}>Register</Text></TouchableOpacity>
      </View>
      
      </View>
      
    </View>
  );
};

   

export default Login;

const styles = StyleSheet.create({
  container: {
    
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
    width: scale(320),
    height:scale(220)
  },
  text_input:{
  

   marginHorizontal: scale(23),
   
   
  },
  btnLogin:{
    width: scale(310),
    height: scale(46),
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
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
