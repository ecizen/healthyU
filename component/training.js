import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import Back from '../img/backnavigator.png'
import { useNavigation } from '@react-navigation/native';


const Training = () => {

    const navigation = useNavigation();

    const GoHome = () => {
        navigation.navigate('Home');
    };
  return (
    <View>
        <View style={{flexDirection: 'row', marginTop: 50, margin: 20, alignItems: 'center'}}>
        <TouchableOpacity onPress={GoHome}><Image source={Back} style={{width: 20, height: 20,}}></Image></TouchableOpacity>
        <Text style={{marginLeft: 120, fontSize: 16}}> Training</Text>
        </View>
    </View>
  );
};

export default Training;