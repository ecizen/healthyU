import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';

import Back from '../img/backnavigator.png'

import Produck1 from '../img/Whey.png'

const Suplement = () => {

    const navigation = useNavigation();

    const GoHome = () => {
        navigation.navigate('Home');
    };
    const [text, onChangeText] = React.useState('');
  return (
    <View>
        <View style={{flexDirection: 'row', marginTop: 50, margin: 20, alignItems: 'center'}}>
        <TouchableOpacity onPress={GoHome}><Image source={Back} style={{width: 20, height: 20,}}></Image></TouchableOpacity>
        <Text style={{marginLeft: 120, fontSize: 16}}> Suplement</Text>
        </View>
        <TextInput
        style=
        {{height: 40,
            margin: 20,
            borderWidth: 1,
            padding: 10,
            borderRadius: 8,
            borderColor: '#d9d9d9'
        }}
        onChangeText={onChangeText}
        placeholder="Search"
        />
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',marginBottom: 10}}>
            <Text style={{marginHorizontal: 13}}>All Item</Text>
            <Text style={{marginHorizontal: 13}}>Protein</Text>
            <Text style={{marginHorizontal: 13}}>Gainer</Text>
            <Text style={{marginHorizontal: 13}}>Booster</Text>
            <Text style={{marginHorizontal: 13}}>Vitamin</Text>
        </View>
        <View style={{ 
        borderBottomColor: '#d9d9d9', 
        borderBottomWidth: 1, 
        width: '100%' 
        }} />
        {/* PRODUCT */}
        <Text style={{fontSize: 14, fontWeight: 'bold', margin: 20}}>Interested</Text>
        <View style={{ flexDirection: 'row' , marginLeft: 20}}>
            <ScrollView horizontal  showsHorizontalScrollIndicator={false} al>
              <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <View style={styles.card}>
                <Image style={{width: 59, height: 66, }} source={Produck1}></Image>
                <View style={{width: 80, height: 20, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                  <Text style={{fontSize: 12}}>Whey Protein</Text>
                </View>
                <View style={{width: 78, height: 20, backgroundColor: '#2254C5', marginTop: 14, borderRadius: 5}}>
                    <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 12}}>Buy</Text>
                </View>
              </View>             
              <View style={styles.card}>
                <Image style={{width: 59, height: 66, }} source={Produck1}></Image>
                <View style={{width: 80, height: 20, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                  <Text style={{fontSize: 12}}>Whey Protein</Text>
                </View>
                <View style={{width: 78, height: 20, backgroundColor: '#2254C5', marginTop: 14, borderRadius: 5}}>
                    <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 12}}>Buy</Text>
                </View>
              </View>
              <View style={styles.card}>
                <Image style={{width: 59, height: 66, }} source={Produck1}></Image>
                <View style={{width: 80, height: 20, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                  <Text style={{fontSize: 12}}>Whey Protein</Text>
                </View>
                <View style={{width: 78, height: 20, backgroundColor: '#2254C5', marginTop: 14, borderRadius: 5}}>
                    <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 12}}>Buy</Text>
                </View>
              </View>
              <View style={styles.card}>
                <Image style={{width: 59, height: 66, }} source={Produck1}></Image>
                <View style={{width: 80, height: 20, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                  <Text style={{fontSize: 12}}>Whey Protein</Text>
                </View>
                <View style={{width: 78, height: 20, backgroundColor: '#2254C5', marginTop: 14, borderRadius: 5}}>
                    <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 12}}>Buy</Text>
                </View>
              </View>
              </View>
              </ScrollView>
          </View>
          {/* ENDPRODUCT */}
          <Text style={{fontSize: 14, fontWeight: 'bold', margin: 20}}>Recommendation</Text>
        <View style={{ flexDirection: 'row' , marginLeft: 20}}>
            <ScrollView horizontal  showsHorizontalScrollIndicator={false} al>
              <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <View style={styles.card}>
                <Image style={{width: 59, height: 66, }} source={Produck1}></Image>
                <View style={{width: 80, height: 20, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                  <Text style={{fontSize: 12}}>Whey Protein</Text>
                </View>
                <View style={{width: 78, height: 20, backgroundColor: '#2254C5', marginTop: 14, borderRadius: 5}}>
                    <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 12}}>Buy</Text>
                </View>
              </View>             
              <View style={styles.card}>
                <Image style={{width: 59, height: 66, }} source={Produck1}></Image>
                <View style={{width: 80, height: 20, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                  <Text style={{fontSize: 12}}>Whey Protein</Text>
                </View>
                <View style={{width: 78, height: 20, backgroundColor: '#2254C5', marginTop: 14, borderRadius: 5}}>
                    <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 12}}>Buy</Text>
                </View>
              </View>
              <View style={styles.card}>
                <Image style={{width: 59, height: 66, }} source={Produck1}></Image>
                <View style={{width: 80, height: 20, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                  <Text style={{fontSize: 12}}>Whey Protein</Text>
                </View>
                <View style={{width: 78, height: 20, backgroundColor: '#2254C5', marginTop: 14, borderRadius: 5}}>
                    <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 12}}>Buy</Text>
                </View>
              </View>
              <View style={styles.card}>
                <Image style={{width: 59, height: 66, }} source={Produck1}></Image>
                <View style={{width: 80, height: 20, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                  <Text style={{fontSize: 12}}>Whey Protein</Text>
                </View>
                <View style={{width: 78, height: 20, backgroundColor: '#2254C5', marginTop: 14, borderRadius: 5}}>
                    <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 12}}>Buy</Text>
                </View>
              </View>
              </View>
              </ScrollView>
          </View>
        <View style={{ flexDirection: 'row' , marginLeft: 20, marginTop: 20}}>
            <ScrollView horizontal  showsHorizontalScrollIndicator={false} al>
              <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <View style={styles.card}>
                <Image style={{width: 59, height: 66, }} source={Produck1}></Image>
                <View style={{width: 80, height: 20, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                  <Text style={{fontSize: 12}}>Whey Protein</Text>
                </View>
                <View style={{width: 78, height: 20, backgroundColor: '#2254C5', marginTop: 14, borderRadius: 5}}>
                    <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 12}}>Buy</Text>
                </View>
              </View>             
              <View style={styles.card}>
                <Image style={{width: 59, height: 66, }} source={Produck1}></Image>
                <View style={{width: 80, height: 20, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                  <Text style={{fontSize: 12}}>Whey Protein</Text>
                </View>
                <View style={{width: 78, height: 20, backgroundColor: '#2254C5', marginTop: 14, borderRadius: 5}}>
                    <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 12}}>Buy</Text>
                </View>
              </View>
              <View style={styles.card}>
                <Image style={{width: 59, height: 66, }} source={Produck1}></Image>
                <View style={{width: 80, height: 20, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                  <Text style={{fontSize: 12}}>Whey Protein</Text>
                </View>
                <View style={{width: 78, height: 20, backgroundColor: '#2254C5', marginTop: 14, borderRadius: 5}}>
                    <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 12}}>Buy</Text>
                </View>
              </View>
              <View style={styles.card}>
                <Image style={{width: 59, height: 66, }} source={Produck1}></Image>
                <View style={{width: 80, height: 20, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                  <Text style={{fontSize: 12}}>Whey Protein</Text>
                </View>
                <View style={{width: 78, height: 20, backgroundColor: '#2254C5', marginTop: 14, borderRadius: 5}}>
                    <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 12}}>Buy</Text>
                </View>
              </View>
              </View>
              </ScrollView>
          </View>
    </View>

    );
};

const styles = StyleSheet.create({
    card: {
        width: 112,
        height: 150,
        elevation: 1,
        backgroundColor: 'white',
        shadowColor: '#18396B',
        borderRadius: 8,
        justifyContent:'center',
        alignItems: 'center',
        position: 'relative',
        marginRight: 14
      },
})

export default Suplement;