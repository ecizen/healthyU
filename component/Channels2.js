import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Modal, StyleSheet } from 'react-native';
import Back from '../img/leftarrow.png';
import { useNavigation } from '@react-navigation/native';
import img1 from '../img/img1.png';
import shield from '../img/shield.jpg';

const Chat = () => {
    const navigation = useNavigation();
    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const GoChannels = () => {
        navigation.navigate('Channels');
        setIsButtonVisible(false);
    };

    const openImageModal = (image) => {
        setSelectedImage(image);
        setModalVisible(true);
    };

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
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Image source={img1} style={{ width: 30, height: 30, borderRadius: 100 }} />
                    <View style={{ width: 275, backgroundColor: '#A9BCC9', borderRadius: 10, marginLeft: 10 }}>
                        <Text style={{ margin: 10 }}>
                            Mulailah dengan posisi tengkurap dengan tubuh lurus.
                            Letakan telapak tangan di lantai sejajar dengan bahu Anda.
                            Pastikan punggung tetap lurus dan berat badan tersebar merata.
                            Posisi kaki lurus dengan ujung jari menyentuh lantai.
                            Mulai angkat tubuh Anda sampai tangan lurus.
                        </Text>
                    </View>
                </View>
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
            {isButtonVisible && (
                <View style={{ height: 40, justifyContent: 'center', width: '100%', position: 'absolute', bottom: 0, backgroundColor: '#d9d9d9' }}>
                    <TouchableOpacity onPress={GoChannels}>
                        <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#2254C5' }}>Bergabung ke Channel Sekarang</Text>
                    </TouchableOpacity>
                </View>
            )}
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

export default Chat;
