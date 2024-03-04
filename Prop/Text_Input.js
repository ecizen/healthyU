import React, { useState } from 'react';
import { TouchableOpacity, TextInput, View, Image, Text , StyleSheet} from 'react-native';

import Email from '../img/Vector.png';
import Lock from '../img/Group1.png';
import { scale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';


export default function Text_Input({ Placrholder, Placrholder1 , EmailInput, PasswordInput , valEmail, valPassword, }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Validasi dengan data dummy
    const UserEmail = '12345';
    const UserPassword = '12345';
    if (email === UserEmail && password === UserPassword) {
      navigation.navigate('Home');
      console.log('login berhasil')
    } else {
      console.log('Email atau password salah')
    }
  };
  return (
    <View>
      {/* Image with scaled dimensions */}
      <Image source={Email} style={{ width: scale(12), height: scale(9), position: 'absolute', top: scale(25), opacity: 0.5 }} />
      <Image source={Lock} style={{ width: scale(11), height: scale(14), position: 'absolute', top: scale(80) }} />

      {/* TextInput with scaled dimensions */}
      <TextInput  value={email} onChangeText={(text) => setEmail(text)} style={{ width: scale(310), height: scale(46), borderBottomWidth: 1, marginTop: scale(5), borderColor: '#DFDFDF', paddingLeft: scale(20) }} placeholder={Placrholder} />
      <TextInput value={password}
        onChangeText={(text) => setPassword(text)} style={{ width: scale(310), height: scale(46), borderBottomWidth: 1, marginTop: scale(12), borderColor: '#DFDFDF', paddingLeft: scale(20) }} placeholder={Placrholder1} />

      {/* TouchableOpacity and Text with scaled font size */}
      <TouchableOpacity>
        <Text style={{ fontSize: scale(12), fontWeight: '400', color: '#2254C5', textAlign: 'right', marginTop: scale(12) }}>Forget password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnLogin}><Text style={{ color: 'white'}} onPress={handleLogin}>Sign in</Text></TouchableOpacity>
    </View>
  );
}

const styles  = StyleSheet.create({
  btnLogin:{
    width: scale(310),
    height: scale(46),
    backgroundColor: '#2254C5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 12,
  }
})
