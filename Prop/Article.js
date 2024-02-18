import { View, Text, Image } from 'react-native'
import React from 'react'
import Pisang from '../img/pisang.png'


export default function Article({Title, Description, Img}) {
  return (
    <View style={{padding: 14,justifyContent: 'center',marginTop: 13, width: 345, height: 100, backgroundColor: 'white', borderRadius: 8}}>
    <View style={{flexDirection: 'row', gap: 16, marginTop: 10}}>
        <Image style={{width: 66, height: 66}} source={Img}></Image>
        <View>
        <Text style={{fontSize: 16, fontWeight: '600'}}>Health Benefits of Bananas</Text>
        <Text style={{fontSize: 9, maxWidth: 230, marginTop: 6,color: 'gray'}}>The banana, scientifically known as Musa acuminata, is a versatile and delicious fruit packed with numerous health benefits.</Text>
        </View>
    </View>
    </View>
  )
}