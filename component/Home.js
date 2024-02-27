import { View, Text , StyleSheet,Image, TouchableOpacity, ScrollView, FlatList, Switch } from 'react-native'
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
import { moderateScale, scale } from 'react-native-size-matters';
import Produk from '../data/index3'




const Item = ({ title, time ,day}) => (
  <View style={styles.card}>
   
         <Image style={{width: 59, height: 66, }} source={Produck1}></Image>
      <View style={{width: 80, height: 20, borderRadius: 8, backgroundColor: '#E8E8F5', justifyContent: 'center', alignItems: 'center'}}>
         <Text style={{fontSize: 8}}>{time}</Text>
      </View>
      <View style={{ gap: 1,flexDirection: 'row', position: 'absolute', alignItems: 'center', top:7, right: 7}}>
          <Image style={{ width:10, height: 12}} source={Ratting}></Image>
          <Text style={{fontSize: 10}}>{title}</Text>
          </View>

  </View>
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
      <View>
      <ScrollView   showsVerticalScrollIndicator={false}>
      <View style={{flexDirection: 'row',  marginTop: 50, alignItems:'center',  justifyContent: 'space-between', width: scale(321), marginLeft:scale(12)}}>
       <View style={{ flexDirection: 'row', gap: scale(8)}}>
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
      <View style={{ alignItems: 'center'}}>
      <Image source={Banner} style={{width: scale(311), height:scale(115), marginTop: 24, borderRadius: 8}}></Image>
      <View style={styles.Menu} >
        <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={GoTraining} style={styles.menuC}><Image source={Training} style={{height: 19, width: 32}}></Image></TouchableOpacity>
        <Text style={{fontSize: 10, marginTop: 5}}>Training</Text>
        </View>
        <View style={{alignItems: 'center'}}>

        <TouchableOpacity onPress={GoSuplement} style={styles.menuC}><Image source={Suplment} style={{height: 24, width: 29}}></Image></TouchableOpacity>
        <Text style={{fontSize: 10, marginTop: 5}}>Suplement</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity  style={styles.menuC}><Image source={Habit} style={{height: 18, width: 27}}></Image></TouchableOpacity>
        
          <Text style={{fontSize: 10, marginTop: 5}}>Suplement</Text>
        </View>
        <View style={{alignItems: 'center'}}>

        <TouchableOpacity onPress={GoBMI} style={styles.menuC}><Image source={Weight} style={{height: 32, width: 32}}></Image></TouchableOpacity>
        <Text style={{fontSize: 10, marginTop: 5}}>BmI calculation</Text>
     
        </View>
      </View>
       
      </View>
      <Text style={{fontSize: 16, fontWeight: '600', marginLeft: scale (24) , marginTop:19}} >Popular Product</Text>
      <View style={{marginTop: 10, alignItems: 'center',}}>
      <View style={{ flexDirection: 'row', marginLeft: 24 }}>
        <FlatList 
          style={{ flex: 1 }}
          data={Produk}
          renderItem={({ item }) => <Item title={item.title} time={item.time} day={item.day} />}
          keyExtractor={(item) => item.id}
          horizontal={true} // Add this property to make it horizontal
        />         
      </View>        
          <View style={{marginTop: 23}}>
            <Text style={{fontWeight: 600, fontSize: 16}}>Article</Text>
            <Article Img={Pisang} ></Article> 
          </View>
      </View>
      </ScrollView>
      </View>
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
});
