import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import Back from '../img/leftarrow.png'
import { useNavigation } from '@react-navigation/native';
import img1 from '../img/img1.png';


const Chat = () => {

    const navigation = useNavigation();

    const GoChannels = () => {
        navigation.navigate('Channels');
    };
  return (
    <View>
        <View style={{backgroundColor: '#0E1850', marginTop: 50, height: 91, justifyContent: 'center'}}>
            <View style={{marginHorizontal: 20, flexDirection: 'row'}}>
                <TouchableOpacity onPress={GoChannels}><Image source={Back} style={{width: 25, height: 70, resizeMode: 'contain', marginRight: 15, borderRadius: 10}}></Image></TouchableOpacity>
                <Image style={{width: 70, height: 70, marginRight: 15}} source={img1}></Image>
                <Text style={{color: '#ffff', fontWeight: 'bold', fontSize: 15,marginTop: 25}}>Olahraga Pemula</Text>
            </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal: 20}}>
            {/* pesan */}
            <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={img1} style={{width: 30, height: 30, borderRadius: 100, marginTop: 20}}></Image>
                <View style={{width: 275, marginTop: 20, backgroundColor: '#A9BCC9', borderRadius: 10}}>
                    <Text style={{margin: 10}}>
                    Mulailah dengan posisi tengkurap dengan tubuh lurus.
Letakan telapak tangan di lantai sejajar dengan bahu Anda.
Pastikan punggung tetap lurus dan berat badan tersebar merata.
Posisi kaki lurus dengan ujung jari menyentuh lantai.
Mulai angkat tubuh Anda sampai tangan lurus.
                    </Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={img1} style={{width: 30, height: 30, borderRadius: 100, marginTop: 20}}></Image>
                <View style={{width: 275, marginTop: 20, backgroundColor: '#A9BCC9', borderRadius: 10}}>
                    <Text style={{margin: 10}}>
                    Mulailah dengan posisi tengkurap dengan tubuh lurus.
Letakan telapak tangan di lantai sejajar dengan bahu Anda.
Pastikan punggung tetap lurus dan berat badan tersebar merata.
Posisi kaki lurus dengan ujung jari menyentuh lantai.
Mulai angkat tubuh Anda sampai tangan lurus.
                    </Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={img1} style={{width: 30, height: 30, borderRadius: 100, marginTop: 20}}></Image>
                <View style={{width: 275, marginTop: 20, backgroundColor: '#A9BCC9', borderRadius: 10}}>
                    <Text style={{margin: 10}}>
                    Mulailah dengan posisi tengkurap dengan tubuh lurus.
Letakan telapak tangan di lantai sejajar dengan bahu Anda.
Pastikan punggung tetap lurus dan berat badan tersebar merata.
Posisi kaki lurus dengan ujung jari menyentuh lantai.
Mulai angkat tubuh Anda sampai tangan lurus.
                    </Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={img1} style={{width: 30, height: 30, borderRadius: 100, marginTop: 20}}></Image>
                <View style={{width: 275, marginTop: 20, backgroundColor: '#A9BCC9', borderRadius: 10}}>
                    <Text style={{margin: 10}}>
                    Mulailah dengan posisi tengkurap dengan tubuh lurus.
Letakan telapak tangan di lantai sejajar dengan bahu Anda.
Pastikan punggung tetap lurus dan berat badan tersebar merata.
Posisi kaki lurus dengan ujung jari menyentuh lantai.
Mulai angkat tubuh Anda sampai tangan lurus.
                    </Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={img1} style={{width: 30, height: 30, borderRadius: 100, marginTop: 20}}></Image>
                <View style={{width: 275, marginTop: 20, backgroundColor: '#A9BCC9', borderRadius: 10}}>
                    <Text style={{margin: 10}}>
                    Mulailah dengan posisi tengkurap dengan tubuh lurus.
Letakan telapak tangan di lantai sejajar dengan bahu Anda.
Pastikan punggung tetap lurus dan berat badan tersebar merata.
Posisi kaki lurus dengan ujung jari menyentuh lantai.
Mulai angkat tubuh Anda sampai tangan lurus.
                    </Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={img1} style={{width: 30, height: 30, borderRadius: 100, marginTop: 20}}></Image>
                <View style={{width: 275, marginTop: 20, backgroundColor: '#A9BCC9', borderRadius: 10}}>
                    <Text style={{margin: 10}}>
                    Mulailah dengan posisi tengkurap dengan tubuh lurus.
Letakan telapak tangan di lantai sejajar dengan bahu Anda.
Pastikan punggung tetap lurus dan berat badan tersebar merata.
Posisi kaki lurus dengan ujung jari menyentuh lantai.
Mulai angkat tubuh Anda sampai tangan lurus.
                    </Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={img1} style={{width: 30, height: 30, borderRadius: 100, marginTop: 20}}></Image>
                <View style={{width: 275, marginTop: 20, backgroundColor: '#A9BCC9', borderRadius: 10}}>
                    <Text style={{margin: 10}}>
                    Mulailah dengan posisi tengkurap dengan tubuh lurus.
Letakan telapak tangan di lantai sejajar dengan bahu Anda.
Pastikan punggung tetap lurus dan berat badan tersebar merata.
Posisi kaki lurus dengan ujung jari menyentuh lantai.
Mulai angkat tubuh Anda sampai tangan lurus.
                    </Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={img1} style={{width: 30, height: 30, borderRadius: 100, marginTop: 20}}></Image>
                <View style={{width: 275, marginTop: 20, backgroundColor: '#A9BCC9', borderRadius: 10}}>
                    <Text style={{margin: 10}}>
                    Mulailah dengan posisi tengkurap dengan tubuh lurus.
Letakan telapak tangan di lantai sejajar dengan bahu Anda.
Pastikan punggung tetap lurus dan berat badan tersebar merata.
Posisi kaki lurus dengan ujung jari menyentuh lantai.
Mulai angkat tubuh Anda sampai tangan lurus.
                    </Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={img1} style={{width: 30, height: 30, borderRadius: 100, marginTop: 20}}></Image>
                <View style={{width: 275, marginTop: 20, backgroundColor: '#A9BCC9', borderRadius: 10}}>
                    <Text style={{margin: 10}}>
                    Mulailah dengan posisi tengkurap dengan tubuh lurus.
Letakan telapak tangan di lantai sejajar dengan bahu Anda.
Pastikan punggung tetap lurus dan berat badan tersebar merata.
Posisi kaki lurus dengan ujung jari menyentuh lantai.
Mulai angkat tubuh Anda sampai tangan lurus.
                    </Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={img1} style={{width: 30, height: 30, borderRadius: 100, marginTop: 20}}></Image>
                <View style={{width: 275, marginTop: 20, backgroundColor: '#A9BCC9', borderRadius: 10}}>
                    <Text style={{margin: 10}}>
                    Mulailah dengan posisi tengkurap dengan tubuh lurus.
Letakan telapak tangan di lantai sejajar dengan bahu Anda.
Pastikan punggung tetap lurus dan berat badan tersebar merata.
Posisi kaki lurus dengan ujung jari menyentuh lantai.
Mulai angkat tubuh Anda sampai tangan lurus.
                    </Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={img1} style={{width: 30, height: 30, borderRadius: 100, marginTop: 20}}></Image>
                <View style={{width: 275, marginTop: 20, backgroundColor: '#A9BCC9', borderRadius: 10}}>
                    <Text style={{margin: 10}}>
                    Mulailah dengan posisi tengkurap dengan tubuh lurus.
Letakan telapak tangan di lantai sejajar dengan bahu Anda.
Pastikan punggung tetap lurus dan berat badan tersebar merata.
Posisi kaki lurus dengan ujung jari menyentuh lantai.
Mulai angkat tubuh Anda sampai tangan lurus.
                    </Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={img1} style={{width: 30, height: 30, borderRadius: 100, marginTop: 20}}></Image>
                <View style={{width: 275, marginTop: 20, backgroundColor: '#A9BCC9', borderRadius: 10}}>
                    <Text style={{margin: 10}}>
                    Mulailah dengan posisi tengkurap dengan tubuh lurus.
Letakan telapak tangan di lantai sejajar dengan bahu Anda.
Pastikan punggung tetap lurus dan berat badan tersebar merata.
Posisi kaki lurus dengan ujung jari menyentuh lantai.
Mulai angkat tubuh Anda sampai tangan lurus.
                    </Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={img1} style={{width: 30, height: 30, borderRadius: 100, marginTop: 20}}></Image>
                <View style={{width: 275, marginTop: 20, backgroundColor: '#A9BCC9', borderRadius: 10}}>
                    <Text style={{margin: 10}}>
                    Mulailah dengan posisi tengkurap dengan tubuh lurus.
Letakan telapak tangan di lantai sejajar dengan bahu Anda.
Pastikan punggung tetap lurus dan berat badan tersebar merata.
Posisi kaki lurus dengan ujung jari menyentuh lantai.
Mulai angkat tubuh Anda sampai tangan lurus.
                    </Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={img1} style={{width: 30, height: 30, borderRadius: 100, marginTop: 20}}></Image>
                <View style={{width: 275, marginTop: 20, backgroundColor: '#A9BCC9', borderRadius: 10}}>
                    <Text style={{margin: 10}}>
                    Mulailah dengan posisi tengkurap dengan tubuh lurus.
Letakan telapak tangan di lantai sejajar dengan bahu Anda.
Pastikan punggung tetap lurus dan berat badan tersebar merata.
Posisi kaki lurus dengan ujung jari menyentuh lantai.
Mulai angkat tubuh Anda sampai tangan lurus.
                    </Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={img1} style={{width: 30, height: 30, borderRadius: 100, marginTop: 20}}></Image>
                <View style={{width: 275, marginTop: 20, backgroundColor: '#A9BCC9', borderRadius: 10}}>
                    <Text style={{margin: 10}}>
                    Mulailah dengan posisi tengkurap dengan tubuh lurus.
Letakan telapak tangan di lantai sejajar dengan bahu Anda.
Pastikan punggung tetap lurus dan berat badan tersebar merata.
Posisi kaki lurus dengan ujung jari menyentuh lantai.
Mulai angkat tubuh Anda sampai tangan lurus.
                    </Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={img1} style={{width: 30, height: 30, borderRadius: 100, marginTop: 20}}></Image>
                <View style={{width: 275, marginTop: 20, backgroundColor: '#A9BCC9', borderRadius: 10}}>
                    <Text style={{margin: 10}}>
                    Mulailah dengan posisi tengkurap dengan tubuh lurus.
Letakan telapak tangan di lantai sejajar dengan bahu Anda.
Pastikan punggung tetap lurus dan berat badan tersebar merata.
Posisi kaki lurus dengan ujung jari menyentuh lantai.
Mulai angkat tubuh Anda sampai tangan lurus.
                    </Text>
                </View>
            </View>
        </ScrollView>
        <TouchableOpacity onPress={GoChat}><View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#EBEBEB', height: 60, justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center', color: '#2254C5', fontSize: 15, fontWeight: 'bold' }}>Bergabung Ke Channels</Text>
      </View></TouchableOpacity>
    </View>
  );
};

export default Chat;