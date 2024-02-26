import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { View } from 'react-native';

const Tes = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Slider'); // Ganti 'TujuanScreen' dengan nama screen tujuan
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>

        <LottieView
          source={require('../animasi.json')} // Ganti dengan path sesuai lokasi file animasi
          autoPlay
          loop={false} // Setel loop sesuai kebutuhan
          style={{width: 240, height: 44, marginTop: 380}}
         
         />
        </View>
    </View>
  );
};

export default Tes;
