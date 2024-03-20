import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Back from '../img/backnavigator.png'
import { useNavigation } from '@react-navigation/native';
import walk from '../img/Walking.png';

const AddHabbit = () => {
    const navigation = useNavigation();
    const [selectedActivity, setSelectedActivity] = useState(null);

    const handleSelectActivity = (activity) => {
        if (selectedActivity === activity) {
            setSelectedActivity(null); // Klik lagi untuk membatalkan pilihan
        } else {
            setSelectedActivity(activity);
        }
    };

    const GoHome = () => {
        navigation.navigate('Habbit');
    };

    return (
        <View>
            <View style={{ flexDirection: 'row', marginTop: 50, margin: 20, alignItems: 'center' }}>
                <TouchableOpacity onPress={GoHome}><Image source={Back} style={{ width: 20, height: 20 }}></Image></TouchableOpacity>
                <Text style={{ marginLeft: 120, fontSize: 16 }}>Addhabbit</Text>
            </View>
            <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 20 }}>Pilih Aktifitas</Text>
            
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                    onPress={() => handleSelectActivity('Run')}
                    style={[
                        styles.activityItem,
                        selectedActivity === 'Run' && { backgroundColor: '#2254C5' },
                    ]}
                >
                    <Image source={walk} style={styles.activityIcon}></Image>
                    <Text style={[styles.activityText, selectedActivity === 'Run' && { color: 'white' }]}>Run</Text>
                    <Text style={[styles.activityDescription, selectedActivity === 'Run' && { color: 'white' }]}>
                        Running enhances cardiovascular health, promotes weight loss, strengthens bones, and boosts mood, contributing to overall well-being.
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleSelectActivity('Sleep')}
                    style={[
                        styles.activityItem,
                        selectedActivity === 'Sleep' && { backgroundColor: '#2254C5' },
                    ]}
                >
                    <Image source={walk} style={styles.activityIcon}></Image>
                    <Text style={[styles.activityText, selectedActivity === 'Sleep' && { color: 'white' }]}>Run</Text>
                    <Text style={[styles.activityDescription, selectedActivity === 'Sleep' && { color: 'white' }]}>
                        Running enhances cardiovascular health, promotes weight loss, strengthens bones, and boosts mood, contributing to overall well-being.
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    activityItem: {
        width: 130,
        height: 218,
        alignItems: 'center',
        backgroundColor: '#d9d9d9',
        borderRadius: 10,
        marginLeft: 20,
        marginTop: 25,
        borderWidth: 1,
        borderColor: '#333333'
    },
    activityIcon: {
        width: 50,
        height: 50,
        marginTop: 38,
    },
    activityText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 3,
    },
    activityDescription: {
        textAlign: 'center',
        fontSize: 9,
        width: 119,
        color: '#000',
    },
});

export default AddHabbit;
