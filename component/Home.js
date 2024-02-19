import { View, Text , StyleSheet,Image, TouchableOpacity, ScrollView, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Nav from '../component/Nav'

import Profil from '../img/profil.png'
import Icon from '../img/notifIcon.png'
import Banner from '../img/image.png'
import Training from '../img/Training.png'
import Suplment from '../img/suplement.png'
import Habit from '../img/HabitTracker.png'
import Weight from '../img/Weight.png'
import Produck1 from '../img/vitc.png'
import Ratting from '../img/star.png'
import Article from '../Prop/Article'
import Pisang from '../img/pisang.png'


export default function Home() {
  const navigation = useNavigation();

    const GoSuplement = () => {
        navigation.navigate('Suplement');
    };

  
  return (
    <View style={styles.container}>
      <ScrollView   showsVerticalScrollIndicator={false}>
      <View style={{marginTop: 68, alignItems: 'center'}}>
      <View style={{flexDirection: 'row', gap:125}}>
       <View style={{ flexDirection: 'row', gap: 8}}>
        <Image source={Profil} style={styles.profil} ></Image>
        <View style={{ justifyContent: 'center', }}>
            <Text style={{fontSize: 15, fontWeight: '600', color: 'black'}}>Hi King Hardiek</Text>
            <Text style={{fontSize:12, fontWeight: '400', color: '#9A8F8F'}}>Selamat pagi</Text>
        </View>
       </View>
        <View>
          <View style={styles.circle}>
            <Image source={Icon} style={styles.imgCircle}></Image>
            <View style={{width: 14, height: 14, backgroundColor: 'red', borderRadius: 100, position: 'absolute', top: 0, right: 0}}></View>
            
            </View>
        </View>
      </View>
      <Image source={Banner} style={{width: 345, height: 133, marginTop: 24}}></Image>
      <View style={styles.Menu} >
        <TouchableOpacity style={styles.menuC}><Image source={Training} style={{height: 19, width: 32}}></Image></TouchableOpacity>
        <TouchableOpacity onPress={GoSuplement} style={styles.menuC}><Image source={Suplment} style={{height: 24, width: 29}}></Image></TouchableOpacity>
        <TouchableOpacity style={styles.menuC}><Image source={Habit} style={{height: 18, width: 27}}></Image></TouchableOpacity>
        <TouchableOpacity style={styles.menuC}><Image source={Weight} style={{height: 32, width: 32}}></Image></TouchableOpacity>
      </View>
      </View>
      <Text style={{fontSize: 16, fontWeight: '600', marginLeft: 24 , marginTop:19}} >Popular Product</Text>
      <View style={{marginTop: 10, alignItems: 'center',}}>
 
          <View style={{ flexDirection: 'row' , marginLeft: 24}}>
            <ScrollView horizontal  showsHorizontalScrollIndicator={false} al>
              <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <View style={styles.card}>
                <Image style={{width: 59, height: 66, }} source={Produck1}></Image>
                <View style={{width: 80, height: 20, borderRadius: 8, backgroundColor: '#E8E8F5', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{fontSize: 8}}>BlackMores vit C</Text>
                </View>
                <View style={{ gap: 1,flexDirection: 'row', position: 'absolute', alignItems: 'center', top:7, right: 7}}>
                <Image style={{ width:10, height: 12}} source={Ratting}></Image>
                <Text style={{fontSize: 10}}>4.5</Text>
                </View>
              </View>
              
              <View style={styles.card}>
                <Image style={{width: 59, height: 66, }} source={Produck1}></Image>
                <View style={{width: 80, height: 20, borderRadius: 8, backgroundColor: '#E8E8F5', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{fontSize: 8}}>BlackMores vit C</Text>
                </View>
                <View style={{ gap: 1,flexDirection: 'row', position: 'absolute', alignItems: 'center', top:7, right: 7}}>
                <Image style={{ width:10, height: 12}} source={Ratting}></Image>
                <Text style={{fontSize: 10}}>4.5</Text>
                </View>
              </View>
              <View style={styles.card}>
                <Image style={{width: 59, height: 66, }} source={Produck1}></Image>
                <View style={{width: 80, height: 20, borderRadius: 8, backgroundColor: '#E8E8F5', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{fontSize: 8}}>BlackMores vit C</Text>
                </View>
                <View style={{ gap: 1,flexDirection: 'row', position: 'absolute', alignItems: 'center', top:7, right: 7}}>
                <Image style={{ width:10, height: 12}} source={Ratting}></Image>
                <Text style={{fontSize: 10}}>4.5</Text>
                </View>
              </View>
              <View style={styles.card}>
                <Image style={{width: 59, height: 66, }} source={Produck1}></Image>
                <View style={{width: 80, height: 20, borderRadius: 8, backgroundColor: '#E8E8F5', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{fontSize: 8}}>BlackMores vit C</Text>
                </View>
                <View style={{ gap: 1,flexDirection: 'row', position: 'absolute', alignItems: 'center', top:7, right: 7}}>
                <Image style={{ width:10, height: 12}} source={Ratting}></Image>
                <Text style={{fontSize: 10}}>4.5</Text>
                </View>
              </View>
              </View>
              </ScrollView>
          </View>
        
          <View style={{marginTop: 23}}>
            <Text style={{fontWeight: 600, fontSize: 16}}>Article</Text>
            <Article Img={Pisang} ></Article>
            <Article Img={Pisang} ></Article>
            <Article Img={Pisang} ></Article>
         
          </View>
      </View>
      </ScrollView>
      <Nav></Nav>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#F0F0F5',
    flex: 1,
  },
  profil:{
    width: 57,
    height: 57
  },
  circle: {
    width: 47,
    height: 47,
    backgroundColor: 'white',
    borderRadius: 100,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1
  },
  imgCircle: {
    width: 24,
    height: 24
  },
  Menu:{
    marginTop: 24,
    display: 'flex',
    flexDirection: 'row',
    gap: 29
  },
  menuC: {
    width: 62,
    height: 62,
    backgroundColor: 'white',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1
  },
  card: {
    width: 100,
    height: 120,
    elevation: 1,
    backgroundColor: 'white',
    shadowColor: '#18396B',
    borderRadius: 8,
    justifyContent:'center',
    alignItems: 'center',
    position: 'relative',
    marginRight: 22
  },
  navigasi:{
    alignItems: 'center'
  },
  nav:{
    backgroundColor: 'white', width: 410, height: 80,shadowColor: 'black',
    shadowOffset: {width: -2, height: -200},
    shadowOpacity: 20,
    shadowRadius: 20, elevation:30,
    flexDirection: 'row',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    gap: 67
  },
});
