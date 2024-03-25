import React ,{useState}from 'react'
import { TouchableOpacity, TextInput, View , Image, Text, StyleSheet} from 'react-native'
import Email from '../img/Vector.png'
import { Scale, scale } from 'react-native-size-matters'
import Lock from '../img/Group1.png'
import WithGoogle from '../img/Google.png'
import { useNavigation } from '@react-navigation/native'
import WithFacebook from '../img/facebook.png'

export default function Text_Input({Placrholder, Placrholder1, Placrholder3, }) {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Gologin = () => {
    navigation.navigate("Login");
  };
  

  const handleRegister = () => {
   
    // Lakukan validasi data jika diperlukan
   
    // Kirim data registrasi ke server menggunakan metode POST
    fetch('https://ea5f-182-2-70-5.ngrok-free.app/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Registration failed');
      }
      return response.json();
    })
    .then(data => {
      navigation.navigate('Login')
   
    })
    .catch(error => {
  
    });
  };

  
 
  return (
    <View>
        <Image source={Email} style={{width: 12 , height: 9, position: 'absolute', top: 25, opacity: 50}}></Image>
        <TextInput value={username} onChangeText={text => setUsername(text)} style={{width:scale(295), height: 46,borderBottomWidth: 1, marginTop: 5, borderColor: '#DFDFDF',paddingLeft:23 }} placeholder={Placrholder} ></TextInput>
        <Image source={Lock} style={{width: 11 , height: 14, position: 'absolute', top: 78}}></Image>
        <TextInput value={email} onChangeText={text => setEmail(text)} style={{width:scale(295), height: 46,borderBottomWidth: 1, marginTop: 12, borderColor: '#DFDFDF', paddingLeft: 23 }} placeholder={Placrholder1}></TextInput>
        <Image source={Lock} style={{width: 11 , height: 14, position: 'absolute', top: 138}}></Image>
        <TextInput value={password} onChangeText={text => setPassword(text)} style={{width:scale(295), height: 46,borderBottomWidth: 1, marginTop: 12, borderColor: '#DFDFDF', paddingLeft: 23 }} placeholder={Placrholder3}></TextInput>
        <View style={{alignItems: 'center', marginTop: scale(15)}}>
      <TouchableOpacity style={styles.btnLogin}><Text style={{ color: 'white'}} onPress={handleRegister}>Sign Up</Text></TouchableOpacity>
      <Text style={{marginTop: scale(10),fontSize: 12 , color: '#938E8E', fontWeight: '400'}}>Continue with</Text>
      <View style={styles.loginWith}>
        <TouchableOpacity style={styles.btn}><Image source={WithGoogle} style={{width: 24, height: 25}}></Image></TouchableOpacity>
        <TouchableOpacity style={styles.btn}><Image source={WithFacebook} style={{width: 27, height: 27}}></Image></TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginTop: 13}}>
       <Text style={{color: '#938E8E'}}>Do you have account ? </Text>
       <TouchableOpacity><Text style={{fontWeight: 'bold', color: '#2254C5'}} onPress={Gologin}>Login</Text></TouchableOpacity>
      </View>
      </View>
    </View>
    
 
  )
}
const styles = StyleSheet.create({
  container: {
   
    backgroundColor: 'white',
    flex: 1

  },
  main :{
    marginTop: scale(0),
   flexDirection: 'row',
   alignItems: 'center',

   gap: 57
  },
  logo:{
    width: 145,
    height: 36
  },
  loginui:{
    width: scale(220),
    height: scale(200)
  },
  text_input:{
    marginHorizontal: 24
 
  },
  btnLogin:{
    width: 300,
    height: 46,
    backgroundColor: '#2254C5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
   
  },
  loginWith: {
    flexDirection: 'row',
     gap: 7

  },
  btn:{
    width: 108,
    height: 43,
    borderWidth: 1,
    borderColor: '#B5B5B5',
    borderRadius: 10,
    marginTop: scale(10),
    justifyContent: 'center',
    alignItems: 'center'
  }
});
