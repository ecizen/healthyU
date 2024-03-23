import React, { useState, useEffect } from "react";
import { View, Text , StyleSheet, TextInput, Image, TouchableOpacity, FlatList} from 'react-native';
import { scale } from "react-native-size-matters";
import { ScrollView } from "react-native-virtualized-view";
import search from '../img/Search.png';
import Nav from "./Nav";

export default function SearchMenu({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://2da5-112-78-156-160.ngrok-free.app/articles');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const responseData = await response.json();
      setData(responseData);
      setFilteredData(responseData); // Initialize filtered data with all data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const GoArtikelPage = (id) => {
    navigation.navigate('ArtikelPage', { articleId: id });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => GoArtikelPage(item.id)}>
      <View style={styles.cardArtikel}>
        <View>
          <Text style={styles.JudulArtikel}>{item.title}</Text>
          <Text style={styles.PreviewArtikel}>{item.description.length > 100 ? item.description.substring(0, 100) + '...' : item.description}</Text>
        </View>
        {/* Assuming you have an image for the article */}
        <Image source={{ uri: item.image }} style={{ width: 48, height: 48 }} />
      </View>
    </TouchableOpacity>
  );

  // Function to filter data based on search query
  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = data.filter(item => item.title.toLowerCase().includes(text.toLowerCase()));
    setFilteredData(filtered);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardSearch}>
        <TextInput
          placeholder="Search Article"
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <Image source={search} style={{ width: 24, height: 24, position: 'absolute', right: 60, bottom: 25 }} />
      </View>
      <ScrollView>
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>
      <Nav />
    </View>
  );
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
  cardArtikel:{
    width:scale(345),
    height:76,
    marginTop: 8,
    paddingLeft: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  JudulArtikel:{
    fontSize: 15,
    fontWeight: '600'
  },
  PreviewArtikel:{
    fontSize: 12,
    marginTop: 5,
    maxWidth: 350
  }
});
