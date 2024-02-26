import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Back from '../img/backnavigator.png';
import circle from '../img/circle.png';
import hitung from '../img/linearbg.png';

const BMI = () => {
    const [bb, onChangeBB] = useState('');
    const [tb, onChangeTB] = useState('');
    const [umur, onChangeAGE] = useState('');
    const [bmi, setBMI] = useState(null);
    const [bmiCategory, setBMICategory] = useState('');

    const navigation = useNavigation();

    const GoHome = () => {
        navigation.navigate('Home');
    };

    const hitungBMI = () => {
        const berat = parseFloat(bb);
        const tinggi = parseFloat(tb) / 100;
        const bmiCalculation = berat / (tinggi * tinggi);
        setBMI(bmiCalculation.toFixed(1));

        // Menentukan kategori BMI
        if (bmiCalculation < 18.5) {
            setBMICategory('Kurang Berat Badan');
        } else if (bmiCalculation >= 18.5 && bmiCalculation < 24.9) {
            setBMICategory('Normal');
        } else if (bmiCalculation >= 24.9 && bmiCalculation < 29.9) {
            setBMICategory('Kelebihan Berat Badan');
        } else {
            setBMICategory('Obesitas');
        }
    };

    const getBMICategoryColor = () => {
        switch (bmiCategory) {
            case 'Normal':
                return styles.normalText;
            case 'Kelebihan Berat Badan':
                return styles.overweightText;
            case 'Kurang Berat Badan':
                return styles.underweightText;
            case 'Obesitas':
                return styles.obeseText;
            default:
                return styles.normalText;
        }
    };

    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity onPress={GoHome}>
                    <Image source={Back} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headerText}>BMI</Text>
            </View>

            <Text style={styles.resultText}>Anda <Text style={[styles.bmiText, getBMICategoryColor()]}>{bmiCategory}</Text></Text>

            <View style={styles.circleContainer}>
                <Image source={circle} style={styles.circleImage} />
                <Text style={styles.bmiValue}>{bmi !== null ? bmi : '0'}</Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Berat Badan</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeBB}
                    value={bb}
                    placeholder='Berat Badan'
                    placeholderTextColor='white'
                    keyboardType='numeric'
                />
                <Text style={styles.inputLabel}>Tinggi Badan</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeTB}
                    value={tb}
                    placeholder='Tinggi Badan'
                    placeholderTextColor='white'
                    keyboardType='numeric'
                />
                <Text style={styles.inputLabel}>Umur</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeAGE}
                    value={umur}
                    placeholder='Umur'
                    placeholderTextColor='white'
                    keyboardType='numeric'
                />
                <TouchableOpacity onPress={hitungBMI}>
                    <Image source={hitung} style={styles.buttonImage} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginTop: 50,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    backIcon: {
        width: 20,
        height: 20,
    },
    headerText: {
        marginLeft: 140,
        fontSize: 16,
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
    categoryText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2254C5',
        marginBottom: 20,
    },
    circleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
    },
    circleImage: {
        height: 200,
        width: 200,
        marginTop: 14,
        position: 'absolute',
    },
    bmiValue: {
        fontSize: 70,
        color: 'white',
        fontWeight: 'bold',
    },
    inputContainer: {
        alignItems: 'center',
        marginTop: 150,
    },
    inputLabel: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#2254C5',
        marginTop: 15,
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#003FCD',
        width: 300,
        padding: 10,
        borderRadius: 11,
        color: 'white',
    },
    buttonImage: {
        width: 300,
        height: 44,
        borderRadius: 10,
        marginTop: 30,
    },
    bmiText: {
        fontWeight: 'bold',
    },
    normalText: {
        color: 'green',
    },
    overweightText: {
        color: 'red',
    },
    underweightText: {
        color: 'yellow',
    },
    obeseText: {
        color: 'red',
    },
});

export default BMI;
