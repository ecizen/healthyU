import React from 'react';
import { TouchableOpacity, TextInput, View, Image, Text } from 'react-native';
import Email from '../img/Vector.png';
import Lock from '../img/Group1.png';
import { scale } from 'react-native-size-matters';

export default function Text_Input({ Placrholder, Placrholder1 }) {
  return (
    <View>
      {/* Image with scaled dimensions */}
      <Image source={Email} style={{ width: scale(12), height: scale(9), position: 'absolute', top: scale(25), opacity: 0.5 }} />
      <Image source={Lock} style={{ width: scale(11), height: scale(14), position: 'absolute', top: scale(80) }} />

      {/* TextInput with scaled dimensions */}
      <TextInput style={{ width: scale(310), height: scale(46), borderBottomWidth: 1, marginTop: scale(5), borderColor: '#DFDFDF', paddingLeft: scale(20) }} placeholder={Placrholder} />
      <TextInput style={{ width: scale(310), height: scale(46), borderBottomWidth: 1, marginTop: scale(12), borderColor: '#DFDFDF', paddingLeft: scale(20) }} placeholder={Placrholder1} />

      {/* TouchableOpacity and Text with scaled font size */}
      <TouchableOpacity>
        <Text style={{ fontSize: scale(12), fontWeight: '400', color: '#2254C5', textAlign: 'right', marginTop: scale(12) }}>Forget password?</Text>
      </TouchableOpacity>
    </View>
  );
}
