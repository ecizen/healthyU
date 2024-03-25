import React, { useState, useEffect } from 'react';
import {  View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Nav from '../component/Nav.js';
import User from '../img/Whey.png';
import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';
import { scale } from 'react-native-size-matters';
import { ScrollView } from 'react-native-virtualized-view';


const Channels = () => {
    const [text, onChangeText] = React.useState('');
    const navigation = useNavigation();
    const [data, setData] = useState([]);

    const GoChat = () => {
        navigation.navigate('Chat');
    };

    const GoMain = () => {
        navigation.navigate('main');
    };
    const confirmLeaveChannel = (channelName) => {
        Alert.alert(
            'Keluar Channel',
            `Yakin keluar dari channel ${channelName}?`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Leave',
                    onPress: () => LeaveChannel(channelName),
                },
            ],
            { cancelable: false }
        );
    };
    const LeaveChannel = (channelName) => {
        // logika keluar dari channel disini
        console.log('Left channel:', channelName);
    };
    useEffect(() => {
        fetchData();
      }, []);
      
      const fetchData = async () => {
        try {
          const response = await fetch('https://08b6-36-73-32-145.ngrok-free.app/channels');
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const responseData = await response.json();
          setData(responseData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      const renderItem = ({item})=>{
        <View>
            <TouchableOpacity onLongPress={() => confirmLeaveChannel('Olahraga Pemula')} onPress={GoMain}>
                        <View style={{ flexDirection: 'column', gap: 10 }}>
                            <View style={{ paddingHorizontal: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={img1} style={{ width: 70, height: 70, borderRadius: 10 }}></Image>
                                <View style={{ flexDirection: 'column', justifyContent: 'center', gap: 10, marginLeft: 10, marginRight: 10, width: scale(205) }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{item.title}</Text>
                                    <Text numberOfLines={1} style={{ fontSize: 10, color: '#857878' }}>Jawir : Caranya push-up gimana?</Text>
                                </View>
                                <View style={{ flexDirection: 'column', justifyContent: 'center',  }}>
                                    <Text style={{ fontWeight: 'bold', color: '#407BFF', fontSize: 10 }}>17.00</Text>
                                    <View style={{ backgroundColor: '#407BFF', width: 30, height: 30, borderRadius: 100, justifyContent: 'center' }}>
                                        <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 10 }}>99+</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ borderBottomColor: '#d9d9d9', borderBottomWidth: 1, marginVertical: 10, marginTop: 5 }}></View>
                        </View>
                    </TouchableOpacity>
        </View>
      }

    return (
        <View style={styles.container}>
            <ScrollView style={{ marginBottom: 70 }}>
                <View style={{ flexDirection: 'row', marginTop: 50, margin: 20, alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={styles.headertxt}>Channels</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder='Search Channels'
                    />
                </View>
                {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row', marginLeft: 22 }}>
                        <TouchableOpacity onPress={GoChat}><Image style={{ width: 68, height: 68, borderRadius: 100, marginRight: 11 }} source={User} /></TouchableOpacity>
                        <TouchableOpacity onPress={GoChat}><Image style={{ width: 68, height: 68, borderRadius: 100, marginRight: 11 }} source={User} /></TouchableOpacity>
                        <TouchableOpacity onPress={GoChat}><Image style={{ width: 68, height: 68, borderRadius: 100, marginRight: 11 }} source={User} /></TouchableOpacity>
                        <TouchableOpacity onPress={GoChat}><Image style={{ width: 68, height: 68, borderRadius: 100, marginRight: 11 }} source={User} /></TouchableOpacity>
                        <TouchableOpacity onPress={GoChat}><Image style={{ width: 68, height: 68, borderRadius: 100, marginRight: 11 }} source={User} /></TouchableOpacity>
                        <TouchableOpacity onPress={GoChat}><Image style={{ width: 68, height: 68, borderRadius: 100, marginRight: 11 }} source={User} /></TouchableOpacity>
                        <TouchableOpacity onPress={GoChat}><Image style={{ width: 68, height: 68, borderRadius: 100, marginRight: 11 }} source={User} /></TouchableOpacity>
                    </View>
                </ScrollView> */}
                <View style={{ borderBottomColor: '#d9d9d9', borderBottomWidth: 1, marginVertical: 10, marginTop: 0 }}></View>
                {/* chat */}
                    <TouchableOpacity onLongPress={() => confirmLeaveChannel('Olahraga Pemula')} onPress={GoMain}>
                        <View style={{ flexDirection: 'column', gap: 10 }}>
                            <View style={{ paddingHorizontal: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={img1} style={{ width: 70, height: 70, borderRadius: 10 }}></Image>
                                <View style={{ flexDirection: 'column', justifyContent: 'center', gap: 10, marginLeft: 10, marginRight: 10, width: scale(205) }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Olahraga Pemula</Text>
                                    <Text numberOfLines={1} style={{ fontSize: 10, color: '#857878' }}>Jawir : Caranya push-up gimana?</Text>
                                </View>
                                <View style={{ flexDirection: 'column', justifyContent: 'center',  }}>
                                    <Text style={{ fontWeight: 'bold', color: '#407BFF', fontSize: 10 }}>17.00</Text>
                                    <View style={{ backgroundColor: '#407BFF', width: 30, height: 30, borderRadius: 100, justifyContent: 'center' }}>
                                        <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 10 }}>99+</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ borderBottomColor: '#d9d9d9', borderBottomWidth: 1, marginVertical: 10, marginTop: 5 }}></View>
                        </View>
                    </TouchableOpacity>
                    <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    />
                    
            </ScrollView>
            <Nav />
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    input: {
        height: 40,
        width: 160,
        margin: 20,
        borderWidth: 1,
        padding: 10,
        borderColor: '#d9d9d9',
        borderRadius: 9,
    },
    headertxt: {
        fontSize: 20
    }

});
export default Channels;
