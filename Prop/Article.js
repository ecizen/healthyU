import { View, Text, Image , FlatList} from 'react-native'
import React from 'react'
import Pisang from '../img/pisang.png'
import { scale } from 'react-native-size-matters';

const Produk = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Health Benefits of Bananas',
    time: 'The banana, scientifically known as Musa acuminata, is a versatile and delicious fruit packed with numerous health benefits.',
    day: 'Sun, Mon, Tue, Wed, Thur, Friday, Sat'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Health Benefits of Bananas',
    time: 'The banana, scientifically known as Musa acuminata, is a versatile and delicious fruit packed with numerous health benefits.',
    day: 'Sun, Mon, Tue, Wed, Thur, Friday, Sat'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Banana',
    time: 'The banana, scientifically known as Musa acuminata, is a versatile and delicious fruit packed with numerous health benefits.',
    day: 'Sun, Mon, Tue, Wed, Thur, Friday, Sat'
  },
];

const Item = ({ title, time ,day}) => (
  <View style={{padding: scale(10),justifyContent: 'center',marginTop: 13, width: scale(311), height: 100, backgroundColor: 'white', borderRadius: 8}}>
  <View style={{flexDirection: 'row', gap: 16, marginTop: 10}}>
      <Image style={{width: scale(50), height:scale(50) }} source={Pisang}></Image>
      <View>
      <Text style={{fontSize: 16, fontWeight: '600'}}>{title}</Text>
      <Text style={{fontSize: scale(9), maxWidth: scale(200), marginTop: 6,color: 'gray'}}>{time}</Text>
      </View>
  </View>
  </View>

);

export default function Article({Title, Description, Img}) {
  return (
    <FlatList 
    style={{ flex: 1 }}
    data={Produk}
    renderItem={({ item }) => <Item title={item.title} time={item.time} day={item.day} />}
    keyExtractor={(item) => item.id}
     // Add this property to make it horizontal
  />         
   
  )
}