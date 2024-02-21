import React from 'react';
import { TouchableOpacity, TextInput, View, Image, Text, Dimensions } from 'react-native';
import Email from '../img/Vector.png';
import Lock from '../img/Group1.png';

// Fungsi skala resolusi
const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;
const { width, height } = Dimensions.get('screen');
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 667;
export default function Text_Input({ Placrholder, Placrholder1 }) {
  // Mendapatkan lebar layar perangkat
 
  // Nilai panduan untuk skala resolusi
 

  return (
    <View>
      {/* Image dengan skala resolusi */}
      <Image source={Email} style={{ width: moderateScale(12), height: moderateScale(9), position: 'absolute', top: 25, opacity: 0.5 }} />
      <Image source={Lock} style={{ width: moderateScale(11), height: moderateScale(14), position: 'absolute', top: 80 }} />
      
      {/* TextInput dengan skala resolusi */}
      <TextInput style={{ width: 345, height: 46, borderBottomWidth: 1, marginTop: 5, borderColor: '#DFDFDF', paddingLeft: 20}} placeholder={Placrholder} />
      <TextInput style={{ width: 345, height: 46, borderBottomWidth: 1, marginTop: 12, borderColor: '#DFDFDF', paddingLeft: 20}} placeholder={Placrholder1} />
      {/* TouchableOpacity dan Text dengan skala resolusi */}
      <TouchableOpacity><Text style={{ fontSize: moderateScale(12), fontWeight: '400', color: '#2254C5', textAlign: 'right', marginTop: moderateScale(12) }}>Forget password?</Text></TouchableOpacity>
    </View>
  );
}
