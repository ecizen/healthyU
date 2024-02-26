import react, { useState } from "react";

import { View, Text , StyleSheet, TextInput, Image, ScrollView, TouchableOpacity} from 'react-native'
import { scale } from "react-native-size-matters";
import React from 'react'



import search from '../img/Search.png'
import Pisang from '../img/pisang.png'



export default function SearchMenu({navigation}) {
  const GoArtikelPage = () =>{
    navigation.navigate('ArtikelPage')
  }
    const [searchQuery, setSearchQuery] = useState();
    const [articles, setArticles] = useState([
        {
            id:1,
            title: 'Health Benefits of Bananas pisang raja ?',
            preview: 'The banana, scientifically known as Musa acuminata, is a versatile and delicious fruit packed with numerous health benefits.'
        },
        {
            id:2,
            title: 'Health Benefits of Bananas pisang  klutuk?',
            preview: 'The banana, scientifically known as Musa acuminata, is a versatile and delicious fruit packed with numerous health benefits.'
        },
        {
            id:3,
            title: 'Health Benefits of Bananas pisang  ambon?',
            preview: 'The banana, scientifically known as Musa acuminata, is a versatile and delicious fruit packed with numerous health benefits.'
        }
    ]);
  
    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchQuery && searchQuery.toLowerCase())
      );
      
  return (
    <View style={styles.container}>
      <View style={styles.cardSearch}>
        <TextInput
          placeholder="Search Article"
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <Image source={search} style={{ width: 24, height: 24, position: 'absolute', right: 60, bottom: 25 }} />
      </View>
      <ScrollView

      >

        {filteredArticles.map((article) => (
               <TouchableOpacity onPress={GoArtikelPage}>

          <View key={article.id} style={styles.cardArtikel}>
       
            <View>
              <Text style={styles.JudulArtikel}>{article.title}</Text>
              <Text style={styles.PreviewArtikel}>{article.preview}</Text>
            </View>
            <Image source={Pisang} style={{ width: 48, height: 48 }} />
   
          </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#E7E7E7',
    alignItems: 'center'
  },
  cardSearch:{
   
    width: 430,
    alignItems: 'center',
    height:120,
    borderBottomWidth: 1,
    borderColor: '#C0C0C0',
    backgroundColor: 'white'
    
  },
  searchInput:{
    backgroundColor: 'white',
    width: scale(320),
    height: 41,
    borderWidth: 1,
    borderRadius:20,
    borderColor: '#C0C0C0',
    paddingLeft: 20,
    marginTop: 61
   
  },
  cardContainer:{
    
     paddingTop: 0,
   
  },
  cardArtikelDumy:{
    width:360,
    height:76,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  cardArtikel:{
    width:scale(345),
    height:76,
    marginTop: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  JudulArtikel:{
    fontSize: 10,
    fontWeight: '600'
  },
  PreviewArtikel:{
    fontSize: 8,
    marginTop: 5,
    maxWidth: 200
  }

})