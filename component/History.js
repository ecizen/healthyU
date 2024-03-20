import { View, Text , StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'
import Back from '../img/backnavigator.png';
import Dumbble from '../img/dumbble.png'



const Historyy = [
    {
        id: '1',
        title: 'Arm Exercise',
        time: 'Monday 08.00'
    },
    {
        id: '2',
        title: 'Lag Exercise',
        time: 'Monday 08.00'
    },
    {
        id: '3',
        title: 'Arm Exercise',
        time: 'Monday 08.00'
    },
    {
        id: '4',
        title: 'Abs Exercise',
        time: 'Monday 08.00'
    },
]

const renderItem = ({ item }) =>(
    <View style={styles.ChildContainer}>
                <View style={styles.Card}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={Dumbble} style={styles.dummbleIcon}/>
                        <Text style={styles.Title1}>{item.title}</Text>
                    </View>
                    <Text style={styles.SUB}>{item.time}</Text>
                </View>
            </View>
  )

export default function History({navigation}) {

const GoHome = () => {
    navigation.navigate('Profile')
}
  return (
    <View style={styles.container}>
        <View style={styles.TrainingContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={GoHome}>
                   <Image source={Back} style={{ width: 20,height: 20,}}></Image>
                </TouchableOpacity>
                <Text style={styles.Title}>Train History</Text>
            </View>
            <FlatList data={Historyy} renderItem={renderItem} keyExtractor={(item) => item.id}  contentContainerStyle={{gap:0}} />
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white'
  },
  TrainingContainer:{
    paddingVertical: 60,
  },
  header:{
    width: scale(393),
    height: scale(46),
    flexDirection: 'row',
    paddingTop: 6,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    gap: 20,
    borderBottomColor: '#D6D6D6'
  },
  Title:{
    fontWeight: 'bold'
  },
  ChildContainer:{
  },
  Card:{
    width: scale(350),
    height: scale(60),
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  
  }, 
  dummbleIcon:{
    width: 18,
    height: 14
  },
  Title1:{
    fontWeight: 'bold',
    marginLeft: 10
  },
  SUB:{
    color: '#757373',
   
  }
})