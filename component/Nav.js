import React, { useState } from 'react';
import { useNavigation, useIsFocused, useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Homei from '../img/Home.png';
import Search from '../img/Search.png';
import Chat from '../img/Chat.png';
import Profile from '../img/User.png';
import { scale } from 'react-native-size-matters';

const Nav = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const route = useRoute(); // Menggunakan useRoute untuk mendapatkan informasi rute saat ini
    const [activeMenu, setActiveMenu] = useState('Home');

    const GoHome = () => {
        navigation.navigate('Home');
        setActiveMenu('Home');
    };

    const GoProfile = () => {
        navigation.navigate('Profile');
        setActiveMenu('Profile');
    };

    const GoSearch = () => {
        navigation.navigate('SearchMenu');
        setActiveMenu('Search');
    };
    const GoChannels = () => {
        navigation.navigate('Channels');
        setActiveMenu('Channels');
    };

    // Mengatur menu aktif berdasarkan halaman yang difokuskan
    React.useEffect(() => {
        if (isFocused) {
            // Mendapatkan nama halaman yang sedang difokuskan dari informasi rute saat ini
            const focusedRoute = route.name;
            setActiveMenu(focusedRoute);
        }
    }, [isFocused, route]);

    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <TouchableOpacity onPress={GoHome} style={styles.navItem}>
                    <Image style={[styles.icon, activeMenu === 'Home' && styles.activeIcon]} source={Homei} />
                    <Text style={[styles.label, activeMenu === 'Home' && styles.activeLabel]}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={GoSearch} style={styles.navItem}>
                    <Image style={[styles.icon, activeMenu === 'Search' && styles.activeIcon]} source={Search} />
                    <Text style={[styles.label, activeMenu === 'Search' && styles.activeLabel]}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={GoChannels} style={styles.navItem}>
                    <Image style={[styles.icon, activeMenu === 'Channels' && styles.activeIcon]} source={Chat} />
                    <Text style={[styles.label, activeMenu === 'Channels' && styles.activeLabel]}>Channels</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={GoProfile} style={styles.navItem}>
                    <Image style={[styles.icon, activeMenu === 'Profile' && styles.activeIcon]} source={Profile} />
                    <Text style={[styles.label, activeMenu === 'Profile' && styles.activeLabel]}>Profile</Text>
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
        position: 'relative',
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        width: scale(360),
        height: 80,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 8,
        // Tambahkan properti shadow di bawah
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    navItem: {
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
    },
    activeIcon: {
        tintColor: 'blue',
    },
    label: {
        fontSize: 10,
        color: '#92959B',
    },
    activeLabel: {
        color: '#2254C5',
    },
});

export default Nav;
