import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet, FlatList } from 'react-native';

import Back from '../img/backnavigator.png'
import Bigwhey from '../img/BigWhey.png'
import Vitamin from '../img/Vitamin.png'
import Gainer from '../img/Gainer.png'
import Whey from '../img/Whey.png'

const Suplement = () => {
    const navigation = useNavigation();
    const GoHome = () => {
        navigation.navigate('Home');
    };

    const [text, onChangeText] = useState('');
    const [activeItem, setActiveItem] = useState(0);

    const products = [
      { id: 'whey', label: 'Whey', image: Whey },
      { id: 'bigwhey', label: 'Big Whey', image: Bigwhey },
      { id: 'gainer', label: 'Gainer', image: Gainer },
      { id: 'vitamin', label: 'Vitamin', image: Vitamin }
  ];
  

    const items = [
        { id: 'all', label: 'All Item' },
        { id: 'protein', label: 'Protein' },
        { id: 'gainer', label: 'Gainer' },
        { id: 'booster', label: 'Booster' },
        { id: 'vitamin', label: 'Vitamin' }
    ];


    const renderItem = ({ item, index }) => {
    if (text !== '' && !item.id.toLowerCase().includes(text.toLowerCase()) && !item.label.toLowerCase().includes(text.toLowerCase())) {
        return null;
    }
    return (
        <TouchableOpacity style={{marginLeft: 12}} onPress={() => setActiveItem(index)}>
            <Text style={{ marginHorizontal: 9, fontWeight: activeItem === index ? 'bold' : 'normal' }}>{item.label}</Text>
        </TouchableOpacity>
    );
};
    return (
        <View>
            <View style={{ flexDirection: 'row', marginTop: 50, margin: 20, alignItems: 'center' }}>
                <TouchableOpacity onPress={GoHome}>
                    <Image source={Back} style={{ width: 20, height: 20 }}/>
                </TouchableOpacity>
                <Text style={{ marginLeft: 120, fontSize: 16 }}> Suplement</Text>
            </View>
            <TextInput
                style={{ height: 40, margin: 20, borderWidth: 1, padding: 10, borderRadius: 8, borderColor: '#d9d9d9' }}
                onChangeText={(text) => onChangeText(text)}
                placeholder="Search"
            />
            <FlatList
                data={items}
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                onScroll={(event) => {
                    const slideSize = event.nativeEvent.layoutMeasurement.width;
                    const index = Math.floor(event.nativeEvent.contentOffset.x / slideSize);
                    setActiveItem(index);
                }}
            />
            <ScrollView style={{ width: '100%', marginLeft: 20, marginBottom: 20 }}>
                {activeItem === 0 && (
                    <View>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', margin: 20 }}>Interested</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.productcontent}>
                                <View style={styles.card}><Image style={styles.productimg} source={Whey} /><Text style={{marginTop: 10}}>Whey</Text><Text style={{backgroundColor: '#2254C5', color: 'white', borderRadius: 5, paddingHorizontal: 20, marginTop: 10, fontSize: 10, textAlign: 'center'}}>Buy</Text></View>
                                <View style={styles.card}><Image style={styles.productimg} source={Bigwhey} /><Text style={{marginTop: 10}}>Whey 1.8 kg</Text><Text style={{backgroundColor: '#2254C5', color: 'white', borderRadius: 5, paddingHorizontal: 20, marginTop: 10, fontSize: 10, textAlign: 'center'}}>Buy</Text></View>
                                <View style={styles.card}><Image style={styles.productimg} source={Gainer} /><Text style={{marginTop: 10}}>Gainer</Text><Text style={{backgroundColor: '#2254C5', color: 'white', borderRadius: 5, paddingHorizontal: 20, marginTop: 10, fontSize: 10, textAlign: 'center'}}>Buy</Text></View>
                                <View style={styles.card}><Image style={styles.productimg} source={Vitamin} /><Text style={{marginTop: 10}}>Vitamin</Text><Text style={{backgroundColor: '#2254C5', color: 'white', borderRadius: 5, paddingHorizontal: 20, marginTop: 10, fontSize: 10, textAlign: 'center'}}>Buy</Text></View>
                            </View>
                        </ScrollView>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', margin: 20 }}>Recommendation</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                                {/* Your recommendation product cards */}
                            </View>
                        </ScrollView>
                    </View>
                )}
                {activeItem === 1 && (
                    <View>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', margin: 20 }}>Whey Protein</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.productcontent}>
                                <View style={styles.card}><Image style={styles.productimg} source={Whey} /><Text style={{marginTop: 10}}>Whey</Text><Text style={{backgroundColor: '#2254C5', color: 'white', borderRadius: 5, paddingHorizontal: 20, marginTop: 10, fontSize: 10, textAlign: 'center'}}>Buy</Text></View>
                                <View style={styles.card}><Image style={styles.productimg} source={Bigwhey} /><Text style={{marginTop: 10}}>Whey 1.8 kg</Text><Text style={{backgroundColor: '#2254C5', color: 'white', borderRadius: 5, paddingHorizontal: 20, marginTop: 10, fontSize: 10, textAlign: 'center'}}>Buy</Text></View>
                            </View>
                        </ScrollView>
                    </View>
                )}
                {activeItem === 2 && (
                    <View>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', margin: 20 }}>Gainer</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.productcontent}>
                                <View style={styles.card}><Image style={styles.productimg} source={Gainer} /><Text style={{marginTop: 10}}>Gainer</Text><Text style={{backgroundColor: '#2254C5', color: 'white', borderRadius: 5, paddingHorizontal: 20, marginTop: 10, fontSize: 10, textAlign: 'center'}}>Buy</Text></View>
                            </View>
                        </ScrollView>
                    </View>
                )}
                {activeItem === 3 && (
                    <View>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', margin: 20 }}>Booster</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.productcontent}>
                                {/* Content for booster */}
                            </View>
                        </ScrollView>
                    </View>
                )}
                {activeItem === 4 && (
                    <View>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', margin: 20 }}>Vitamin</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.productcontent}>
                                <View style={styles.card}><Image style={styles.productimg} source={Vitamin} /><Text style={{marginTop: 10}}>Vitamin</Text><Text style={{backgroundColor: '#2254C5', color: 'white', borderRadius: 5, paddingHorizontal: 20, marginTop: 10, fontSize: 10, textAlign: 'center'}}>Buy</Text></View>
                            </View>
                        </ScrollView>
                    </View>
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 112,
        height: 150,
        elevation: 1,
        backgroundColor: 'white',
        shadowColor: '#18396B',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginRight: 14
    },
    productimg: {
      width: 72,
      height: 72,
    },
    productcontent: {
      flexDirection: 'row',
      gap: 10
    }
});

export default Suplement;
