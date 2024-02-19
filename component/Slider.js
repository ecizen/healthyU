import {Animated, FlatList, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useRef, useState} from 'react';
import Slides from '../data';
import SlideItem from './SlideItem';
import Pagination from './Pagination';
import Arrow from '../assets/arrow.png'

const Slider = ({navigation}) => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const goToNextSlide = () => {
    // Jika masih ada slide selanjutnya, geser ke slide berikutnya
    if (index < Slides.length - 1) {
      flatListRef.current.scrollToIndex({index: index + 1});
    }
  };
  const SkipSlide =() =>{
    if (index < Slides.length - 2){
      flatListRef.current.scrollToIndex({index : index +2})
    }

  }

  const handleNavigation = () =>{

  }

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={Slides}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <View style={{justifyContent: 'space-around', marginTop: 40}}>
      <Pagination data={Slides} scrollX={scrollX} index={index} />
      <View style={{alignItems: 'flex-end', bottom:130, marginRight: 36, position: 'relative' }}> 
      {index < Slides.length - 1 ? (
        <TouchableOpacity onPress={goToNextSlide} style={styles.nextButton}>
          <Image source={Arrow} style={{ width: 17, height: 19 }}></Image>
        </TouchableOpacity>
      ) : (
        // "Get Started" button for the last slide
        <TouchableOpacity  onPress={() =>navigation.navigate('Login')} style={styles.getStartedButton}>
          <Text style={{fontSize: 16, fontWeight: '400', color: 'white'}}>Get Started</Text>
        </TouchableOpacity>
      )}
    
      </View>
      </View>

    </View>
  );
};

   

export default Slider;

const styles = StyleSheet.create({
  nextButton: {
  backgroundColor: '#2254C5',
  width: 51,
  borderRadius: 100,
  height: 51,
  justifyContent: 'center',
  alignItems: 'center'
  
  
  
       
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: ''
  },

  getStartedButton: {
    width: 170,
    height: 50,
    backgroundColor: '#2254C5',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'

  },
  skipButton:{
   
  }
});
