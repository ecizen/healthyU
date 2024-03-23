import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';

import { moderateScale, scale } from 'react-native-size-matters';
import Nav from '../component/Nav';
import Img from '../img/profil.png'
import Google from '../img/Google.png'
import Timer from '../img/Timer.png'
import arrow from '../img/arrow.png'

import Instagram from '../img/instagram.png'
import Web from '../img/Web.png'
import Habit from '../img/Habit1.png'
import History from '../img/History1.png'
import Privasi from '../img/privacy1.png'
import Pencil from '../img/Pencil1.png'
import Star from '../img/star1.png'


export default function Profile({ navigation }) {
  const GoRemind =()=>{
    navigation.navigate('Remind')
  }
  const GoHistory =()=>{
    navigation.navigate('History')
  }
  const GoPrivacy =()=>{
    navigation.navigate('Privacy')
  }
  return (
    <View style={styles.container}>
      <View style={{marginTop: 0 , width: 410, height:106, borderBottomWidth: 1, borderColor: '#D6D6D6',backgroundColor: 'white', justifyContent: 'center', paddingLeft: 20}}>
      <Text style={styles.hdrtext}>My Profile</Text>
      </View>
      <ScrollView>
      <View style={{width: 360, height: 250, backgroundColor: 'white', borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
      <View style={styles.container2}>
        <View style={styles.group1}>
          <Image source={Img} style={{ width: 29, height: 32, margin: 11, }}></Image>
          <View style={{flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.teks}>
              <Text style={{color: 'black'}}>HealthyU</Text>
              <Text style={styles.teks2}>healthyu@gmail.com</Text>
            </View>
        <Image style={{width: 17, height: 17, marginLeft:scale(100) }} source={Google}></Image>
        </View>
        </View>
        <View>
        {/* <TouchableOpacity style={{marginTop: 30, width: scale(295), height: 50, borderBottomWidth:1, borderBlockColor: '#EDE7E7', flexDirection: 'row', alignItems: 'center', paddingBottom: 14}} onPress={GoRemind}>
        <View style={{width: scale(200), height: 24, flexDirection: 'row', alignItems: 'center'}}>
           <View style={{width: 35, height: 35, backgroundColor: '#4CD964', borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={Timer} style={{width: 24, height: 24}}></Image>
           </View>
              <Text style={{fontSize: 15, fontWeight: '600',marginLeft: 20 }}>Remind me of practice</Text>
          </View>
          <Image source={arrow} style={{width: 29, height: 29, marginLeft: scale(70)}}></Image>
        </TouchableOpacity> */}
        <TouchableOpacity style={{marginTop: 30, width: scale(295), height: 50, borderBottomWidth:1, borderBlockColor: '#EDE7E7', flexDirection: 'row', alignItems: 'center', paddingBottom: 14}}>
        <View style={{width: scale(200), flexDirection: 'row', alignItems: 'center'}}>
           <View style={{width: 35, height: 35, backgroundColor: '#FFC727', borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={Habit} style={{width: 24, height: 24}}></Image>
           </View>
              <Text style={{fontSize: 15, fontWeight: '600',marginLeft: 20 }}> My Habit</Text>
          </View>
          <Image source={arrow} style={{width: 29, height: 29, marginLeft: scale(70)}}></Image>
        </TouchableOpacity>
        {/* <TouchableOpacity style={{marginTop: 30, width: scale(295), height: 50, borderBottomWidth:1, borderBlockColor: '#EDE7E7', flexDirection: 'row', alignItems: 'center', paddingBottom: 14}} onPress={GoHistory}>
        <View style={{width: scale(200), flexDirection: 'row', alignItems: 'center'}}>
           <View style={{width: 35, height: 35, backgroundColor: '#407BFF', borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={History} style={{width: 24, height: 24}}></Image>
           </View>
              <Text style={{fontSize: 15, fontWeight: '600',marginLeft: 20 }}>History</Text>
          </View>
          <Image source={arrow} style={{width: 29, height: 29, marginLeft: scale(70)}}></Image>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={GoPrivacy} style={{marginTop: 30, width: scale(295), height: 50, borderBottomWidth:1, borderBlockColor: '#EDE7E7', flexDirection: 'row', alignItems: 'center', paddingBottom: 14}}>
        <View style={{width: scale(200), flexDirection: 'row', alignItems: 'center'}}>
           <View style={{width: 35, height: 35, backgroundColor: '#F06A58', borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={Privasi} style={{width: 24, height: 24}}></Image>
           </View>
              <Text style={{fontSize: 15, fontWeight: '600',marginLeft: 20 }}>Privacy Police</Text>
          </View>
          <Image source={arrow} style={{width: 29, height: 29,marginLeft: scale(70)}}></Image>
        </TouchableOpacity> 
        </View>
        <View>
 
        </View>
      </View>
      </View>
      <View style={{width: 410, height: 530, backgroundColor: 'white', borderRadius: 20, marginTop: 10}}>
      <View style={{ marginLeft: 20 }}>
      <TouchableOpacity style={{marginTop: 30, width: scale(291), height: 50, borderBottomWidth:1, borderBlockColor: '#EDE7E7', flexDirection: 'row', alignItems: 'center', paddingBottom: 14}}>
      <View style={{width: scale(200), flexDirection: 'row', alignItems: 'center'}}>
           <View style={{width: 35, height: 35, backgroundColor: '#868484', borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={Pencil} style={{width: 24, height: 24}}></Image>
           </View>
          <Text style={{fontSize: 15, fontWeight: '600', marginLeft: 20}}>Kirim masukan</Text>
          </View>
          <Image source={arrow} style={{width: 29, height: 29,marginLeft: scale(70)}}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 30, width: scale(291), height: 50, borderBottomWidth:1, borderBlockColor: '#EDE7E7', flexDirection: 'row', alignItems: 'center', paddingBottom: 14}}>
        <View style={{width: scale(200), flexDirection: 'row', alignItems: 'center'}}>
           <View style={{width: 35, height: 35, backgroundColor: '#868484', borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={Timer} style={{width: 24, height: 24}}></Image>
           </View>
          <Text style={{fontSize: 15, fontWeight: '600', marginLeft: 20}}>Rate me</Text>
          </View>
          <Image source={arrow} style={{width: 29, height: 29, marginLeft: scale(70)}}></Image>
        </TouchableOpacity>
      </View>
      <View style={{marginLeft:26, marginTop: 21}}>
      <Text >Social</Text>
      <TouchableOpacity style={{marginTop: 30, width: scale(291), height: 50, borderBottomWidth:1, borderBlockColor: '#EDE7E7', flexDirection: 'row', alignItems: 'center', paddingBottom: 14}}>
           <View style={{width: 35, height: 35, backgroundColor: '#white', borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={Instagram} style={{width: 24, height: 24}}></Image>
           </View>
          <Text style={{fontSize: 15, fontWeight: '600', marginLeft: 20}}>Instagram</Text>

        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 30, width:scale(291) , height: 50, borderBottomWidth:1, borderBlockColor: '#EDE7E7', flexDirection: 'row', alignItems: 'center', paddingBottom: 14}}>
           <View style={{width: 35, height: 35, backgroundColor: '#white', borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={Web} style={{width: 24, height: 24}}></Image>
           </View>
          <Text style={{fontSize: 15, fontWeight: '600', marginLeft: 20}}>Website</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:scale(291) , height: 35, backgroundColor: '#D9D9D9', marginTop: 27, justifyContent:'center',alignItems: 'center'}}><Text style={{fontSize: 16, fontWeight: 'bold'}}>Log out</Text></TouchableOpacity>
      </View>
      </View>
      </ScrollView>
     
      <Nav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4E4E4',
    alignItems: 'center',
    display: 'flex'
  },
  container2: {
    margin: 20,
  },
  hdrtext: {
    fontSize: 14,
    marginTop: 32,

    marginLeft: 24,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
    marginBottom: 10,
  },
  group1: {
    width: scale(300),
    height: 51,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    
  },

  teks1: {
    fontWeight:'bold',
    fontSize: 14,
    color: 'black'
  },
  teks2: {
    fontSize: 12,
    color: '#d9d9d9'
  }
});
