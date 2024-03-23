import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'

export default function Tombol2({pindah}) {


  return (
    <View>
      <TouchableOpacity onPress={pindah} style={styles.play}><Text style={{fontSize: 12, fontWeight: '600', color: 'blue'}}>Try Now</Text></TouchableOpacity>
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