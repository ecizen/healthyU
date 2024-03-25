import React, { useState } from 'react';
import { TouchableOpacity, TextInput, View, Image, Text , StyleSheet, Alert} from 'react-native';

import Email from '../img/Vector.png';
import Lock from '../img/Group1.png';
import { scale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import SweetAlert from 'react-native-sweet-alert';


export default function Text_Input({ Placrholder, Placrholder1 , EmailInput, PasswordInput , valEmail, valPassword, }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
 const GoHome = () => {
    navigation.navigate('Home');
  };

  const handleLogin = () => {
    // Kirim data login ke server menggunakan metode POST
    fetch('https://ea5f-182-2-70-5.ngrok-free.app/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Login failed');
        }
        return response.json();
      })
      .then(data => {
        Alert.alert('Login Successful', 'Welcome back!');
        GoHome(username); // Pass the username to the home screen
      })
      .catch(error => {
        // Handle error jika login gagal
        console.error('Login error:', error);
      });
  };

  return (
    <View>
      {/* Image with scaled dimensions */}
      <Image source={Email} style={{ width: scale(12), height: scale(9), position: 'absolute', top: scale(25), opacity: 0.5 }} />
      <Image source={Lock} style={{ width: scale(11), height: scale(14), position: 'absolute', top: scale(80) }} />

      {/* TextInput with scaled dimensions */}
      <TextInput  value={username} onChangeText={(text) => setUsername(text)} style={{ width: scale(310), height: scale(46), borderBottomWidth: 1, marginTop: scale(5), borderColor: '#DFDFDF', paddingLeft: scale(20) }} placeholder={Placrholder} />
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
