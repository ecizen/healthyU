import { View, Text, StyleSheet, TouchableOpacity, Image , FlatList, SectionList} from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'

const rekomendasi = [
    {
        id : '1',
        title:'Sit Up Militer',
        konten : '10 Min : Abs Exercise',
        exerciseImg: require('../img/Rekomendasi.png')
    },
    {
        id : '2',
        title:'Russian Twist',
        konten : '10 Min : Abs Exercise',
        exerciseImg: require('../img/Rekomendasi.png')
    }
]

  const renderItem = ({ item }) =>(
    <View style={styles.rekCard}>
            <View style={{width: scale(311), width:scale(141),justifyContent: 'center', alignItems: 'center'}}>
             <Image source={item.exerciseImg} style={styles.RekomenImg}></Image>
            </View>
             <View style={styles.CardText}>
              <View>
                <Text style={styles.Judul}>{item.title}</Text>
                <Text style={styles.subJudul}>{item.konten}</Text>
              </View>
              <TouchableOpacity style={styles.play}><Text style={{fontSize: 12, fontWeight: '600', color: 'blue'}}>Try Now</Text></TouchableOpacity>
             </View>
          </View>
  )


export default function Rekomendasi() {
  return (
    <View>
       <FlatList data={rekomendasi} renderItem={renderItem} keyExtractor={(item) => item.id}  contentContainerStyle={{gap:20}} />
    </View>
  )
}

const styles = StyleSheet.create({
    RekomenImg:{
        width: scale(311),
        height:scale(146),
        borderRadius:8,
      },
      rekCard:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        
      },
      CardText:{
        position: 'absolute',
        left: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: scale(40)
      },
      Judul:{
        fontSize: 19,
        fontWeight: 'bold',
        color: 'white'
      },
      subJudul:{
        fontWeight: 'bold',
        color: '#A2A2A2'
      },
      play:{
        width: scale(100),
        height:scale(30),
        backgroundColor: 'white',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
      }
})