import React, { useState } from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import Back from '../img/backnavigator.png'
import { useNavigation } from '@react-navigation/native';
import plus from '../img/Plus.png'
import moon from '../img/Moon.png'
import { CheckBox } from 'react-native-elements';
import water from '../img/Water.png'
import walk from '../img/Walking.png'



const Habbit = () => {
    const navigation = useNavigation();
    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);

    const GoHome = () => {
        navigation.navigate('Home');
    };
    const GoAdd = () => {
      navigation.navigate('AddHabbit');
  };
  return (
    <View style={{backgroundColor: '#fff'}}>
        <View style={{flexDirection: 'row', marginTop: 50, margin: 20, alignItems: 'center'}}>
        <TouchableOpacity onPress={GoHome}><Image source={Back} style={{width: 20, height: 20,}}></Image></TouchableOpacity>
        <Text style={{marginLeft: 100, fontSize: 16}}> Habbit Tracker</Text>
        </View>
        <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 20}}>Kalender</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexDirection: 'row', marginBottom: 50}}>
          <View style={{backgroundColor: '#4376E8', flexDirection: 'column', justifyContent: 'center',width: 81, height: 98, borderRadius: 10, marginLeft: 20, marginTop: 24}}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 10, fontWeight: 'bold'}}>Senin</Text>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 15, fontWeight: 'bold'}}>05</Text>
          </View>
          <View style={{backgroundColor: '#4376E8', flexDirection: 'column', justifyContent: 'center',width: 81, height: 98, borderRadius: 10, marginLeft: 20, marginTop: 24}}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 10, fontWeight: 'bold'}}>Selasa</Text>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 15, fontWeight: 'bold'}}>06</Text>
          </View>
          <View style={{backgroundColor: 'rgba(64, 123, 255, 0.15)', flexDirection: 'column', justifyContent: 'center',width: 81, height: 98, borderRadius: 10, marginLeft: 20, marginTop: 24}}>
            <Text style={{color: '#4270D7', textAlign: 'center', fontSize: 10, fontWeight: 'bold'}}>Rabu</Text>
            <Text style={{color: '#4270D7', textAlign: 'center', fontSize: 15, fontWeight: 'bold'}}>07</Text>
          </View>
          <View style={{backgroundColor: '#4376E8', flexDirection: 'column', justifyContent: 'center',width: 81, height: 98, borderRadius: 10, marginLeft: 20, marginTop: 24}}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 10, fontWeight: 'bold'}}>Kamis</Text>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 15, fontWeight: 'bold'}}>08</Text>
          </View>
          <View style={{backgroundColor: '#4376E8', flexDirection: 'column', justifyContent: 'center',width: 81, height: 98, borderRadius: 10, marginLeft: 20, marginTop: 24}}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 10, fontWeight: 'bold'}}>Jumat</Text>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 15, fontWeight: 'bold'}}>09</Text>
          </View>
        </ScrollView>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 20,marginLeft: 20, }}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Habbit Anda</Text>
        <TouchableOpacity  onPress={GoAdd}><Image source={plus} style={{width: 30, height: 30}}></Image></TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', marginTop: 33, flexDirection: 'column', gap: 25}}>
          {/* habbit */}
          <View style={{backgroundColor: '#2254C5', width: 350, height: 99, borderRadius: 10, justifyContent: 'center'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
              <Image source={moon} style={{width: 35, height: 35, marginLeft: 20, marginRight: 16}}></Image>
                <View style={{flexDirection: 'column', }}>
                  <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>Tidur</Text>
                  <Text style={{fontSize: 15, color: 'white'}}>Selesai</Text>
                </View>
              <CheckBox
                checked={checked}
                onPress={() => setChecked(!checked)}
              />
            </View>
          </View>
          <View style={{backgroundColor: '#2254C5', width: 350, height: 99, borderRadius: 10, justifyContent: 'center'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
              <Image source={water} style={{width: 35, height: 35, marginLeft: 20, marginRight: 16}}></Image>
                <View style={{flexDirection: 'column', }}>
                  <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>Minum Air</Text>
                  <Text style={{fontSize: 15, color: 'white'}}>Selesai</Text>
                </View>
              <CheckBox
                checked={checked2}
                onPress={() => setChecked2(!checked2)}
              />
            </View>
          </View>
          <View style={{backgroundColor: '#2254C5', width: 350, height: 99, borderRadius: 10, justifyContent: 'center'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
              <Image source={walk} style={{width: 35, height: 35, marginLeft: 20, marginRight: 16}}></Image>
                <View style={{flexDirection: 'column', }}>
                  <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>Kardio</Text>
                  <Text style={{fontSize: 15, color: 'white'}}>Selesai</Text>
                </View>
              <CheckBox
                checked={checked3}
                onPress={() => setChecked3(!checked3)}
              />
            </View>
          </View>
        </View>
    </View>
  );
};

export default Habbit;