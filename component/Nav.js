import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Homei from '../img/Home.png';
import Search from '../img/Search.png';
import Chat from '../img/Chat.png';
import Profile from '../img/User.png';

const Nav = () => {
    const navigation = useNavigation();

    const GoHome = () => {
        navigation.navigate('Home');
    };

    const GoProfile = () => {
        navigation.navigate('Profile');
    };

    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <TouchableOpacity onPress={GoHome} style={styles.navItem}>
                    <Image style={styles.icon} source={Homei} />
                    <Text style={styles.label}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} style={styles.navItem}>
                    <Image style={styles.icon} source={Search} />
                    <Text style={styles.label}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} style={styles.navItem}>
                    <Image style={styles.icon} source={Chat} />
                    <Text style={styles.label}>Chat</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={GoProfile} style={styles.navItem}>
                    <Image style={styles.icon} source={Profile} />
                    <Text style={styles.label}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'relative', // Tambahkan posisi relatif di sini
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: 80,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 8,
    },
    navItem: {
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
    },
    label: {
        fontSize: 10,
        color: '#92959B',
    },
});

export default Nav;
