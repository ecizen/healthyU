import React from 'react'
import { TouchableOpacity, TextInput, View , Image, Text} from 'react-native'
import Email from '../img/Vector.png'
import { Scale, scale } from 'react-native-size-matters'
import Lock from '../img/Group1.png'


export default function Text_Input({Placrholder, Placrholder1, Placrholder3}) {
  return (
    <View>
        <Image source={Email} style={{width: 12 , height: 9, position: 'absolute', top: 25, opacity: 50}}></Image>
        <TextInput style={{width:scale(295), height: 46,borderBottomWidth: 1, marginTop: 5, borderColor: '#DFDFDF',paddingLeft:23 }} placeholder={Placrholder} ></TextInput>
        <Image source={Lock} style={{width: 11 , height: 14, position: 'absolute', top: 78}}></Image>
        <TextInput style={{width:scale(295), height: 46,borderBottomWidth: 1, marginTop: 12, borderColor: '#DFDFDF', paddingLeft: 23 }} placeholder={Placrholder1}></TextInput>
        <Image source={Lock} style={{width: 11 , height: 14, position: 'absolute', top: 138}}></Image>
        <TextInput style={{width:scale(295), height: 46,borderBottomWidth: 1, marginTop: 12, borderColor: '#DFDFDF', paddingLeft: 23 }} placeholder={Placrholder3}></TextInput>
    </View>
    
 
  )
}
