import React from 'react';
import { StyleSheet, Text, View, FlatList , Switch, TouchableOpacity, Image} from 'react-native';
import arrow from '../img/backnavigator.png'
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '08:00',
    time: 'Arm Exercize',
    day: 'Sun, Mon, Tue, Wed, Thur, Friday, Sat'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '08:00',
    time: 'Leg Exercise',
    day: 'Sun, Mon, Tue, Wed, Thur, Friday, Sat'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '08.00',
    time: '11.45',
    day: 'Sun, Mon, Tue, Wed, Thur, Friday, Sat'
  },
];

const Item = ({ title, time ,day}) => (
  <View style={styles.item}>
   
    <View style={{marginHorizontal: 20}}>

    <View style={{flexDirection: 'row', alignItems: 'center', gap: 200}}>
    <Text style={styles.title}>{title}</Text>
    <Switch  ></Switch>
    </View>
    <Text style={styles.time}>{time}</Text>
    <View style={styles.day1}>
    <Text style={styles.day}>{day}</Text>
    <TouchableOpacity style={styles.Delete}><Text style={{color: 'white'}}>Delete</Text></TouchableOpacity>
    </View>
    </View>
 
  </View>
);

export default function Remind({navigation}) {

  const GoBack = () =>{
    navigation.navigate('Profile')
  }
  return (
    <View style={styles.container}>
         <View style={{marginTop: 0 , width: 350, height:40, borderBottomWidth: 1, borderColor: '#D6D6D6',backgroundColor: 'white',  paddingLeft: 20, marginTop: 50, flexDirection: 'row', gap: 20}}>
           <TouchableOpacity onPress={GoBack}>

            <Image source={arrow} style={{width: 15, height: 20}}></Image>
           </TouchableOpacity>
      <Text style={styles.hdrtext}>My Profile</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} time={item.time} day={item.day} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    width: 320,
    height: 105,
    borderWidth: 1,
    margin: 10,
    borderColor: '#BBB1B1',
    borderRadius: 8,
   
    
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 12,
    color: 'black',
   
  },
  day: {
    fontSize: 12,
    color: 'gray',
  },
  day1:{
    flexDirection:'row',
    gap: 20,
    alignItems: 'center'
  },
  Delete:{
    width: 70,
    height: 30,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  }
});
