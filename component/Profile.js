import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';

import Nav from '../component/Nav';
import Img from '../img/profil.png'
import Google from '../img/Google.png'
import Timer from '../img/Timer.png'
import arrow from '../img/arrow.png'

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{marginTop: 45 , width: 393, height:46, borderBottomWidth: 1, borderColor: '#D6D6D6', justifyContent: 'center'}}>
      <Text style={styles.hdrtext}>My Profile</Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.group1}>
          <Image source={Img} style={{ width: 29, height: 29, margin: 11, }}></Image>
            <View style={styles.teks}>
              <Text style={{color: 'black'}}>HealthyU</Text>
              <Text style={styles.teks2}>healthyu@gmail.com</Text>
            </View>
        <Image style={{width: 17, height: 15, marginLeft: 140}} source={Google}></Image>
        </View>
        <View>
        <TouchableOpacity style={{marginTop: 30, width: 351, height: 50, borderBottomWidth:1, borderBlockColor: '#EDE7E7', flexDirection: 'row', alignItems: 'center', paddingBottom: 14}}>
           <View style={{width: 35, height: 35, backgroundColor: '#4CD964', borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={Timer} style={{width: 24, height: 24}}></Image>
           </View>
          <Text style={{fontSize: 15, fontWeight: '600', marginLeft: 20}}>Remind me of practice</Text>
          <Image source={arrow} style={{width: 29, height: 29, marginLeft: 100}}></Image>
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity style={{marginTop: 30, width: 351, height: 50, borderBottomWidth:1, borderBlockColor: '#EDE7E7', flexDirection: 'row', alignItems: 'center', paddingBottom: 14}}>
           <View style={{width: 35, height: 35, backgroundColor: '#FFC727', borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={Timer} style={{width: 24, height: 24}}></Image>
           </View>
          <Text style={{fontSize: 15, fontWeight: '600', marginLeft: 20}}>Remind me of practice</Text>
          <Image source={arrow} style={{width: 29, height: 29, marginLeft: 100}}></Image>
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity style={{marginTop: 30, width: 351, height: 50, borderBottomWidth:1, borderBlockColor: '#EDE7E7', flexDirection: 'row', alignItems: 'center', paddingBottom: 14}}>
           <View style={{width: 35, height: 35, backgroundColor: '#407BFF', borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={Timer} style={{width: 24, height: 24}}></Image>
           </View>
          <Text style={{fontSize: 15, fontWeight: '600', marginLeft: 20}}>Remind me of practice</Text>
          <Image source={arrow} style={{width: 29, height: 29, marginLeft: 100}}></Image>
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity style={{marginTop: 30, width: 351, height: 50, borderBottomWidth:1, borderBlockColor: '#EDE7E7', flexDirection: 'row', alignItems: 'center', paddingBottom: 14}}>
           <View style={{width: 35, height: 35, backgroundColor: '#F06A58', borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={Timer} style={{width: 24, height: 24}}></Image>
           </View>
          <Text style={{fontSize: 15, fontWeight: '600', marginLeft: 20}}>Remind me of practice</Text>
          <Image source={arrow} style={{width: 29, height: 29, marginLeft: 100}}></Image>
        </TouchableOpacity>
        </View>
      </View>
     
      <Nav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative'
  },
  container2: {
    margin: 20
  },
  hdrtext: {
    fontSize: 14,

    marginLeft: 24,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
    marginBottom: 10,
  },
  group1: {
    width: 351,
    height: 51,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center' // Ensure image content does not overflow
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
