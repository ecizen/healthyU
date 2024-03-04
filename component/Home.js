import { View, Text , StyleSheet,Image, TouchableOpacity,  FlatList, Switch, ImageBackground } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';
import Nav from '../component/Nav'

import Profil from '../img/profil.png';
import Icon from '../img/notifIcon.png';
import Banner from '../img/banner.png';
import Training from '../img/Training.png';
import Suplment from '../img/suplement.png';
import Habit from '../img/HabitTracker.png';
import Weight from '../img/Weight.png';
import Trnd from '../img/Trend.png';
import Rekomendasi from '../Prop/Rekomendasi';
import { scale } from 'react-native-size-matters';
import { ScrollView } from 'react-native-virtualized-view';

const TRENDING = [
  {
    id: '1',
    judul: 'your entire arm Exercise',
    deskripsi: 'Train your arms consistently to achieve aesthetic arms with the movements we provide',
    gambar: require('../img/Trend.png'),
    gambar2: require('../img/bicep.png')
  },
  {
    id: '2',
    judul: 'your entire arm Exercise',
    deskripsi: 'Train your arms consistently to achieve aesthetic arms with the movements we provide',
    gambar: require('../img/Trend.png'),
    gambar2: require('../img/bicep.png')
  },
  {
    id: '3',
    judul: 'your entire arm Exercise',
    deskripsi: 'Train your arms consistently to achieve aesthetic arms with the movements we provide',
    gambar: require('../img/Trend.png'),
    gambar2: require('../img/bicep.png')
  },
];

const renderItem = ({ item }) => (
  <ImageBackground
    source={item.gambar}
    style={{ width: 204, height: 204, position: 'relative', paddingTop: 30, paddingLeft: 10 }}
  >
    <Image source={item.gambar2} style={{width: scale(75),height:scale(90), position: 'absolute', right: 0, top: 10}}></Image>
    <Text style={{ fontSize: 15, maxWidth: 100, fontWeight: 'bold', color: 'white' }}>{item.judul}</Text>
    <Text style={{ fontSize: 10, color: 'white', maxWidth: 120, marginTop: 10 }}>{item.deskripsi}</Text>
    <TouchableOpacity
      style={{
        width: 154,
        height: 21,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
      }}
    >
      <Text style={{ fontWeight: 'bold', color: 'blue' }}>Start</Text>
    </TouchableOpacity>
  </ImageBackground>
);





export default function Home() {
  const navigation = useNavigation();

  const GoSuplement = () => {
    navigation.navigate('Suplement');
  };

  const GoTraining = () => {
    navigation.navigate('Training');
  };

  const GoBMI = () => {
    navigation.navigate('BMI');
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View style={{ flexDirection: 'row', marginTop: 50, alignItems: 'center', justifyContent: 'space-between', width: 321, marginLeft: 22 }}>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <Image source={Profil} style={styles.profil} />
            <View style={{ justifyContent: 'center' }}>
              <Text style={{ fontSize: 15, fontWeight: '600', color: 'black' }}>Hi King Hardiek</Text>
              <Text style={{ fontSize: 12, fontWeight: '400', color: '#9A8F8F' }}>Selamat pagi</Text>
            </View>
          </View>
          <View>
            <View style={styles.circle}>
              <Image source={Icon} style={styles.imgCircle} />
              <View style={{ width: 14, height: 14, backgroundColor: 'red', borderRadius: 100, position: 'absolute', top: 0, right: 0 }} />
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.imageContainer}>
          <Image source={require('../img/banner.png')  }style={styles.Banner1} ></Image>
            <Text style={styles.textStyle}>Healthy Life style</Text>
            <Text style={styles.subTextStyle}>Researchers from the Harvard T.H. Chan School of Public Health conducted a massive study of the impact of health habits</Text>
            <TouchableOpacity style={styles.buttonStyle}>
              <Text style={styles.buttonText}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Menu}>
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity onPress={GoTraining} style={styles.menuC}>
                <Image source={Training} style={{ height: 19, width: 32 }} />
              </TouchableOpacity>
              <Text style={{ fontSize: 10, marginTop: 5 }}>Training</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity onPress={GoSuplement} style={styles.menuC}>
                <Image source={Suplment} style={{ height: 24, width: 29 }} />
              </TouchableOpacity>
              <Text style={{ fontSize: 10, marginTop: 5 }}>Suplement</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity style={styles.menuC}>
                <Image source={Habit} style={{ height: 18, width: 27 }} />
              </TouchableOpacity>
              <Text style={{ fontSize: 10, marginTop: 5 }}>Suplement</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity onPress={GoBMI} style={styles.menuC}>
                <Image source={Weight} style={{ height: 32, width: 32 }} />
              </TouchableOpacity>
              <Text style={{ fontSize: 10, marginTop: 5 }}>BmI calculation</Text>
            </View>
          </View>
        </View>
        <Text style={{ fontSize: 16, fontWeight: '600', marginLeft: 24, marginTop: 10 }}>Trending Plans</Text>
        <View style={{ marginTop: 10, marginLeft: 20 }}>
          <View style={{flexDirection: 'row', gap: 20}}>
          <FlatList data={TRENDING} renderItem={renderItem} keyExtractor={(item) => item.id} horizontal={true} contentContainerStyle={{gap:20}} />
          </View>
        </View>
        <View >
          <Text style={{ fontSize: 16, fontWeight: '600', marginLeft: 24, marginTop: 19 }}>Rekomendasi for you</Text>
          <Rekomendasi/>
        </View>
      </View>
      </ScrollView>
      <Nav />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#F0F0F5',
    flex: 1,
  },
  profil:{
    width: 40,
    height: 40
  },
  circle: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 100,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    marginLeft: scale(50)
  },
  imgCircle: {
    width: 24,
    height: 24
  },
  Menu:{
    marginTop: 12,
    display: 'flex',
    flexDirection: 'row',
    width: scale(311),
    justifyContent: 'space-between'
  },
  menuC: {
    width: 52,
    height: 52,
    backgroundColor: 'white',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1
  },
  card: {
    width:scale(100),
    height: 120,
    elevation: 1,
    backgroundColor: 'white',
    shadowColor: '#18396B',
    borderRadius: 8,
    justifyContent:'center',
    alignItems: 'center',
    position: 'relative',
    marginRight: 22,

    
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
  Banner1:{
    width: scale(311),
    height:scale(146),
    
    position: 'absolute',
    justifyContent: 'center',
    paddingLeft: scale(20),
  },
  imageContainer: {
    width: scale(311),
    height:scale(146),

    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 8, // Sesuaikan dengan nilai yang diinginkan
    overflow: 'hidden', // Penting agar borderRadius berfungsi
    padding: 10,
    position: 'relative' // Atur sesuai kebutuhan
  },
  textStyle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  subTextStyle: {
    fontSize: 10,
    color: 'white',
    maxWidth: scale(250),
  },
  buttonStyle: {
    bottom: 20,
    right: 20,
    position: 'absolute',
  },
  buttonText: {
    color: 'white',
  },
  
});
