import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import Back from '../img/backnavigator.png'
import { useNavigation } from '@react-navigation/native';
import shield from '../img/shield.jpg'


const Privacy = () => {

    const navigation = useNavigation();

    const GoHome = () => {
        navigation.navigate('Profile');
    };
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
        <View style={{flexDirection: 'row', marginTop: 50, margin: 20, alignItems: 'center'}}>
        <TouchableOpacity onPress={GoHome}><Image source={Back} style={{width: 20, height: 20,}}></Image></TouchableOpacity>
        <Text style={{marginLeft: 100, fontSize: 16}}>Privacy and Police</Text>
        </View>
        <View style={{alignItems: 'center'}}>
        <Image style={{width: 200, height: 200}} source={shield}></Image>
        </View>
        <View style={{marginHorizontal: 20}}>
          <Text style={{marginBottom: 20}}>
            Privasi Pengguna
          </Text>
          <Text style={{marginBottom: 20}}>
          Privasi pengguna adalah prioritas utama kami di HealthyU. Kami berkomitmen untuk melindungi informasi pribadi Anda dengan sepenuhnya dan mengikuti praktik privasi yang ketat untuk menjaga keamanan data Anda. Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat Anda menggunakan layanan kami.
          </Text>
          <Text style={{marginBottom: 20}}>
          Penggunaan Informasi{"\n"}
Kami menggunakan informasi pribadi Anda untuk menyediakan layanan yang Anda minta, seperti memproses pesanan, mengirimkan notifikasi, dan memberikan dukungan pelanggan. Kami juga dapat menggunakan informasi tersebut untuk meningkatkan layanan kami, menganalisis tren penggunaan, dan melakukan tindakan yang diperlukan untuk keamanan dan kepatuhan hukum.
          </Text>
          <Text style={{marginBottom: 20}}>
          Perlindungan Data{"\n"}
          Kami mengambil langkah-langkah yang wajar untuk melindungi informasi pribadi Anda dari akses yang tidak sah, penggunaan, atau pengungkapan yang tidak sah. Kami menggunakan teknologi keamanan seperti enkripsi data untuk melindungi informasi sensitif Anda saat ditransmisikan melalui internet.
          </Text>
          <Text style={{marginBottom: 20}}>
          Pemberian Informasi kepada Pihak Ketiga{"\n"}
          Kami tidak akan menjual, menyewakan, atau menukar informasi pribadi Anda kepada pihak ketiga tanpa izin Anda, kecuali dalam situasi yang diizinkan atau diwajibkan oleh hukum.
          </Text>
          <Text style={{marginBottom: 20}}>
          Pengaturan Cookie{"\n"}
          Kami menggunakan cookie dan teknologi pelacakan serupa untuk meningkatkan pengalaman pengguna dan mengumpulkan informasi tentang penggunaan aplikasi mobile kami. Anda dapat mengatur preferensi cookie Anda melalui pengaturan browser Anda, namun perlu diingat bahwa menonaktifkan cookie dapat mempengaruhi fungsionalitas aplikasi mobile kami.
          </Text>
          <Text style={{marginBottom: 20}}>
          Perubahan Kebijakan Privasi{"\n"}
          Kami dapat mengubah kebijakan privasi ini dari waktu ke waktu dengan memberikan pemberitahuan yang sesuai kepada Anda. Penggunaan layanan kami setelah perubahan tersebut akan dianggap sebagai persetujuan Anda terhadap kebijakan privasi yang diperbarui.
          </Text>
          <Text style={{marginBottom: 20}}>
          Hubungi kami{"\n"}
          Jika Anda memiliki pertanyaan atau masalah terkait privasi atau penggunaan data, silakan hubungi kami di healthyu@gmail.com.
          </Text>
          <Text style={{marginBottom: 20}}>
          Terimakasih atas kepercayaan anda kepada kami.{"\n"}{"\n"}
          HealthyU
          </Text>
        </View>
    </ScrollView>
  );
};

export default Privacy;