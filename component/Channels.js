import React from 'react';
import { ScrollView, View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Nav from '../component/Nav.js';
import User from '../img/Whey.png';
import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';
import { scale } from 'react-native-size-matters';

const Training = () => {
    const [text, setSearch] = React.useState('');
    const navigation = useNavigation();

    const GoChat1 = () => {
        navigation.navigate('Chat1');
    };
    const GoChat = () => {
      navigation.navigate('Chat');
  };

    return (
        <View style={styles.container}>
            <ScrollView style={{marginBottom: 70}}>
                <View style={{ flexDirection: 'row', marginTop: 50, margin: 20, alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={styles.headertxt}>Channels</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setSearch}
                        value={text}
                        placeholder='Search Channels'
                    />
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row', marginLeft: 22 }}>
                        <TouchableOpacity onPress={GoChat1}><Image style={{ width: 68, height: 68, borderRadius: 100, marginRight: 11 }} source={User} /></TouchableOpacity>
                        <TouchableOpacity onPress={GoChat1}><Image style={{ width: 68, height: 68, borderRadius: 100, marginRight: 11 }} source={User} /></TouchableOpacity>
                        <TouchableOpacity onPress={GoChat1}><Image style={{ width: 68, height: 68, borderRadius: 100, marginRight: 11 }} source={User} /></TouchableOpacity>
                        <TouchableOpacity onPress={GoChat1}><Image style={{ width: 68, height: 68, borderRadius: 100, marginRight: 11 }} source={User} /></TouchableOpacity>
                        <TouchableOpacity onPress={GoChat1}><Image style={{ width: 68, height: 68, borderRadius: 100, marginRight: 11 }} source={User} /></TouchableOpacity>
                        <TouchableOpacity onPress={GoChat1}><Image style={{ width: 68, height: 68, borderRadius: 100, marginRight: 11 }} source={User} /></TouchableOpacity>
                        <TouchableOpacity onPress={GoChat1}><Image style={{ width: 68, height: 68, borderRadius: 100, marginRight: 11 }} source={User} /></TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={{ borderBottomColor: '#d9d9d9', borderBottomWidth: 1, marginVertical: 10, marginTop: 20 }}></View>
                {/* chat */}
                <TouchableOpacity onPress={GoChat}><View style={{ flexDirection: 'column', gap: 10 }}>
                    <View style={{ paddingHorizontal: 30, flexDirection: 'row' }}>
                        <Image source={img1} style={{ width: 70, height: 70, borderRadius: 10 }}></Image>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', gap: 10, marginLeft: 10, marginRight: 10, width: scale(205) }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Olahraga Pemula</Text>
                            <Text numberOfLines={1} style={{ fontSize: 10, color: '#857878' }}>Jawir : Caranya push-up gimana?</Text>
                        </View>
                        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', color: '#407BFF', fontSize: 10 }}>17.00</Text>
                            <View style={{ backgroundColor: '#407BFF', width: 30, height: 30, borderRadius: 100, justifyContent: 'center' }}>
                                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 10 }}>99+</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ borderBottomColor: '#d9d9d9', borderBottomWidth: 1, marginVertical: 10, marginTop: 5 }}></View>
                </View></TouchableOpacity>
                {/* chat 2 */}
                <TouchableOpacity onPress={GoChat}><View style={{ flexDirection: 'column', gap: 10 }}>
                    <View style={{ paddingHorizontal: 30, flexDirection: 'row' }}>
                        <Image source={img2} style={{ width: 70, height: 70, borderRadius: 10 }}></Image>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', gap: 10, marginLeft: 10, marginRight: 10, width: scale(205) }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>WeGoGym!!!</Text>
                            <Text numberOfLines={1} style={{ fontSize: 10, color: '#857878' }}>Biasanya, latihan ke gym yang efektif bisa dimulai dengan datang sebanyak 2—3 kali seminggu dengan durasi 30—45 menit. Jika sudah dilakukan secara rutin selama 4—6 minggu, barulah kamu akan merasakan perubahan pada diri kamu.</Text>
                        </View>
                        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', color: '#407BFF', fontSize: 10 }}>17.00</Text>
                            <View style={{ backgroundColor: '#407BFF', width: 30, height: 30, borderRadius: 100, justifyContent: 'center' }}>
                                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 10 }}>10</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ borderBottomColor: '#d9d9d9', borderBottomWidth: 1, marginVertical: 10, marginTop: 5 }}></View>
                </View></TouchableOpacity>
                {/* chat 3 */}
                <TouchableOpacity onPress={GoChat}><View style={{ flexDirection: 'column', gap: 10 }}>
                    <View style={{ paddingHorizontal: 30, flexDirection: 'row' }}>
                        <Image source={img3} style={{ width: 70, height: 70, borderRadius: 10 }}></Image>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', gap: 10, marginLeft: 10, marginRight: 10, width: scale(205) }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Yuk Hidup Sehat!</Text>
                            <Text numberOfLines={1} style={{ fontSize: 10, color: '#857878' }}>Pola hidup sehat merupakan cara hidup yang mengutamakan kesehatan dengan menjaga pola makan yang sehat, berolahraga secara teratur, tidur yang cukup, dan menghindari kebiasaan buruk seperti merokok dan minum alkohol.</Text>
                        </View>
                        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', color: '#407BFF', fontSize: 10 }}>17.00</Text>
                            <View style={{ backgroundColor: '#407BFF', width: 30, height: 30, borderRadius: 100, justifyContent: 'center' }}>
                                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 10 }}>10</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ borderBottomColor: '#d9d9d9', borderBottomWidth: 1, marginVertical: 10, marginTop: 5 }}></View>
                </View></TouchableOpacity>
            </ScrollView>
            <Nav />
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
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
export default Training;
