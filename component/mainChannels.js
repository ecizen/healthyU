import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity,  Modal, StyleSheet, FlatList } from 'react-native';
import Back from '../img/leftarrow.png';
import { useNavigation } from '@react-navigation/native';
import img1 from '../img/img1.png';
import shield from '../img/shield.jpg';
import { ScrollView } from 'react-native-virtualized-view';

const MainChann = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const [data, setData] = useState([]);

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

    const GoChannels = () => {
        navigation.navigate('Channels');
    };

    const openImageModal = (image) => {
        setSelectedImage(image);
        setModalVisible(true);
    };
    const renderItem = ({ item }) => (
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
         <Image source={img1} style={{ width: 30, height: 30, borderRadius: 100 }} />
                    <View style={{ width: 275, backgroundColor: '#A9BCC9', borderRadius: 10, marginLeft: 10 }}>
                        <Text style={{ margin: 10 }}>
                            {item.message}
                        </Text>
                    </View>
       </View>
      );

    return (
        <View style={{ flex: 1 }}>
            {/* Modal untuk tampilan gambar penuh */}
            <Modal visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(false)}>
                <View style={styles.modalContainer}>
                    <TouchableOpacity style={styles.modalCloseButton} onPress={() => setModalVisible(false)}>
                        <Text style={{ color: '#fff', fontSize: 18 }}>Close</Text>
                    </TouchableOpacity>
                    <Image source={selectedImage} resizeMode="contain" style={{ width: '100%', height: '100%' }} />
                </View>
            </Modal>
            <View style={{ backgroundColor: '#0E1850', height: 91, justifyContent: 'center', marginTop: 40 }}>
                <View style={{ marginHorizontal: 20, flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={GoChannels}><Image source={Back} style={{ width: 25, height: 25, resizeMode: 'contain', marginRight: 15 }} /></TouchableOpacity>
                    <Image style={{ width: 50, height: 50, marginRight: 15, borderRadius: 25 }} source={img1} />
                    <Text style={{ color: '#ffff', fontWeight: 'bold', fontSize: 15 }}>Olahraga Pemula</Text>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 20 }}>
                {/* Pesan */}
              
                   
                    <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    />

            
                {/* pesan dengan gambar */}
                <TouchableOpacity onPress={() => openImageModal(shield)} style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Image source={img1} style={{ width: 30, height: 30, borderRadius: 100 }} />
                    <View style={{ flexDirection: 'column', width: 275, backgroundColor: '#A9BCC9', borderRadius: 10, marginLeft: 10, alignItems: 'center' }}>
                        <View style={{ width: 250, height: 250, alignItems: 'center', backgroundColor: '#d9d9d9', marginTop: 20 }}>
                            <Image source={shield} resizeMode='cover' style={{ width: '100%', height: '100%' }} />
                        </View>
                        
                        <Text style={{ margin: 9 }}>
                            Mulailah dengan posisi tengkurap dengan tubuh lurus.
                            Letakan telapak tangan di lantai sejajar dengan bahu Anda.
                            Pastikan punggung tetap lurus dan berat badan tersebar merata.
                            Posisi kaki lurus dengan ujung jari menyentuh lantai.
                            Mulai angkat tubuh Anda sampai tangan lurus.
                        </Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
    },
    modalCloseButton: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
});

export default MainChann;
