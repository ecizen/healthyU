import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Animated, Easing, Image, TouchableOpacity } from 'react-native';
import Back from './backnavigator2.png'
import { ScrollView } from 'react-native-virtualized-view';
import { useNavigation } from '@react-navigation/native';


const ArtikelPage = ({ route }) => {
    const navigation = useNavigation();
  const { articleId } = route.params;
  const [articleData, setArticleData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const spinValue = new Animated.Value(0);

  const Back2 = () =>{
    navigation.navigate('SearchMenu')
  }

  useEffect(() => {
    fetchData(articleId);
  }, [articleId]);

  useEffect(() => {
    // Animate the loading indicator
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 7500,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const fetchData = async (id) => {
    try {
      const response = await fetch(`https://2da5-112-78-156-160.ngrok-free.app/articles/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch article data');
      }
      const article = await response.json();
      setArticleData(article);
      setIsLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error('Error fetching article data:', error);
      setIsLoading(false); // Set loading to false in case of error
    }
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={Back2}>
            <Image style={{width: 24, height: 24, marginTop: 40,}} source={Back}></Image>
          </TouchableOpacity>
          <Text style={{marginTop: 40, fontWeight: '600',}}>Artikel Healthy</Text>
        </View>
      {isLoading ? ( // Render custom loading animation if data is still loading
        <Animated.View style={[styles.loadingContainer, { transform: [{ rotate: spin }] }]}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.loadingText}>Loading...</Text>
        </Animated.View>
      ) : articleData ? ( // Render article data if available
        <>
        <ScrollView>
        <View style={styles.content2}>            
          <Text style={styles.title}>{articleData.title}</Text>
          <Text style={styles.description}>{articleData.description}</Text>
          <Image source={require('../Artikel/Sleep.jpg')} style={{width: 320, height: 230, marginTop: 20}}></Image>
        </View>
        <View style={{paddingTop: 20, paddingLeft: 20}}>
        <Text style={styles.title2}>{articleData.subtitle}</Text>
        <Text style={styles.description2}>{articleData.description2}</Text>
        </View>
        </ScrollView>
          {/* Render other article details */}
        </>
      ) : (
        <Text>No data available</Text> // Render if no data is available
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20

    
  },
  loadingContainer: {
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'justify',
    color: '#3B3636',
    paddingHorizontal: 20
    
  },
  header:{
    width: '100%',
    height: 70,
    borderColor: '#C0C0C0',
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingLeft: 20,
    gap: 100
    

  },
  content2:{
    alignItems: 'center',
    paddingTop: 40
  },
  title2:{
    fontSize: 17,
    fontWeight: '700'
  },
  description2:{
    fontSize: 14,
    textAlign: 'justify',
    color: '#3B3636',
    paddingHorizontal: 0,
    marginTop: 10
    
  }
});

export default ArtikelPage;
