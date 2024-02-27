import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Nav from '../component/Nav.js'
import User from '../img/Whey.png'


const Training = () => {
    const [text, Search] = React.useState('');

    const navigation = useNavigation();

    const GoHome = () => {
        navigation.navigate('Home');
    };
  return (
    <View>
        <View style={{flexDirection: 'row', marginTop: 50, margin: 20, alignItems: 'center', justifyContent: 'space-between'}}>
        <Text style={styles.headertxt}>Channels</Text>
        <TextInput
        style={styles.input}
        onChangeText={Search}
        value={text}
        placeholder='Search Channels'
        />
        </View>
        <View style={{flexDirection: 'column', marginLeft: 22}}>
            <Image style={{width: 68, height: 68, borderRadius: 100, marginRight: 11}} source={User}></Image>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({

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

})
export default Training;