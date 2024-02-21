import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';

import logo from '../assets/logo_text.png';
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const screenSize = Math.sqrt(width * height) / 100;


const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
size + (scale(size) - size) * factor;


export { scale, verticalScale, moderateScale, screenSize };

const { width, height } = Dimensions.get('screen');

const SlideItem = ({ item }) => {
  const translateYImage = new Animated.Value(40);

  Animated.timing(translateYImage, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.bounce,
  }).start();

  // Menerapkan gaya khusus untuk item dengan ID tertentu
  const isSpecialItem = item.id === 3;

  return (
    <View style={styles.container}>

      <View style={{ alignItems: 'center', marginTop: 80, marginBottom: 46 }}>
        <Image source={logo} style={{ width: 145, height: 36 }} />
      </View>
      <Animated.Image
        source={item.img}
        resizeMode="contain"
        style={[
          styles.image,
          {
            transform: [
              {
                translateY: translateYImage,
              },
            ],
          },
        ]}
      />
   

      <View style={styles.content}>
      {isSpecialItem ? (
          <View style={styles.specialMain}>
            <Text style={styles.specialTitle}>{item.title}</Text>
            <Text style={styles.specialDescription}>{item.description}</Text>
          </View>
        ) : (
          <View style={styles.main}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      </View>
    
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    marginTop: 0,
    backgroundColor: 'white',
    flex: 1
  },
  specialContainer: {
    width,
    height,
    marginTop: 60,
    backgroundColor: 'white', // Ganti dengan warna atau gaya yang diinginkan
  },
  image: {
    flex: 0.5,
    width: '100%',
  },
  content: {
    flex: 0.5,
    marginTop: 49,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    maxWidth: 300,
  },
  description: {
    fontSize: 15,
    marginVertical: 12,
    color: '#8C8C8C',
    maxWidth: 300,
    fontWeight: '600',
  },
  main: {
    marginLeft: 36,
  },
  specialMain: {
  
   alignItems:'center'
  },
  specialTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black', // Customize as needed
    maxWidth: 300,
  },
  specialDescription: {
    fontSize: 13,
    marginVertical: 12,
    color: 'black', // Customize as needed
    maxWidth: 300,
    fontWeight: '600',
    textAlign: 'center'
  },

  
});
