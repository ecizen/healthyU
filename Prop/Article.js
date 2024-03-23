import { View, Text, Image , FlatList} from 'react-native'
import React, { useState, useEffect } from 'react';
import Pisang from '../img/pisang.png'
import { scale } from 'react-native-size-matters';




export default function Article({Title, Description, Img}) {
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      const response = await fetch('https://6397-112-78-156-160.ngrok-free.app/articles');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  

  return (
    <FlatList
    data={data}
    renderItem={renderItem}
    keyExtractor={(item) => item.id.toString()} // Atur kunci unik untuk setiap item
  />        
   
  )
}