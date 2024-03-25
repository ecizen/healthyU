import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';

import Back from '../img/backnavigator.png';
import circle from '../img/circle1.png';
import hitung from '../img/buttoni.png';
import { scale } from 'react-native-size-matters';

const BMI = () => {
    const [bb, onChangeBB] = useState('');
    const [tb, onChangeTB] = useState('');
    const [umur, onChangeAGE] = useState('');
    const [bmi, setBMI] = useState(null);
    const [bmiCategory, setBMICategory] = useState('');
    const [gender, setGender] = useState('gender');

    const navigation = useNavigation();

    const GoHome = () => {
        navigation.navigate('Home');
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

    const hitungBMI = () => {
        const berat = parseFloat(bb);
        const tinggi = parseFloat(tb) / 100;

        // Perhitungan BMI
        let bmiCalculation;
        if (gender === 'gender') { // Laki-laki
            bmiCalculation = berat / (tinggi * tinggi);
        } else { // Perempuan
            bmiCalculation = 1.2 * (berat / (tinggi * tinggi)) - 10.8 * (parseFloat(umur) / 100) + 0.23;
        }
        
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

    return (
        <View style={{flex:1, backgroundColor: 'white'}}>
            <View style={styles.header}>
                <TouchableOpacity onPress={GoHome}>
                    <Image source={Back} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headerText}>BMI</Text>
            </View>
            <ScrollView>

            <Text style={styles.resultText}>Anda <Text style={[styles.bmiText, getBMICategoryColor()]}>{bmiCategory}</Text></Text>

            <View style={styles.circleContainer}>
                <Image source={circle} style={styles.circleImage} />
                <Text style={styles.bmiValue}>{bmi !== null ? bmi : '0'}</Text>
            </View>
            <View style={{alignItems: 'center'}}>
                <Text style={{marginTop: 70 ,fontSize: 15, fontWeight: 'bold'}}>Anda ditetapkan {bmiCategory} oleh bmi</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Berat Badan</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeBB}
                        value={bb}
                        placeholder='Berat Badan'
                        placeholderTextColor='#B9A5A5'
                        keyboardType='numeric'
                    />
                    <Text style={styles.inputLabel}>Tinggi Badan</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeTB}
                        value={tb}
                        placeholder='Tinggi Badan'
                        placeholderTextColor='#B9A5A5'
                        keyboardType='numeric'
                    />
                    <Text style={styles.inputLabel}>Umur</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeAGE}
                        value={umur}
                        placeholder='Umur'
                        placeholderTextColor='#B9A5A5'
                        keyboardType='numeric'
                    />
                    <Text style={styles.inputLabel}>Pilih Gender</Text>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <RadioButton
                                value="gender"
                                status={ gender === 'gender' ? 'checked' : 'unchecked' }
                                onPress={() => setGender('gender')}
                            />
                            <Text style={styles.gender}>Laki - Laki</Text>
                        </View>
                        <View style={{marginLeft: 40, flexDirection: 'row'}}>
                            <RadioButton
                                value="female"
                                status={ gender === 'female' ? 'checked' : 'unchecked' }
                                onPress={() => setGender('female')}
                            />
                            <Text style={styles.gender}>Perempuan</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={hitungBMI}>
                        <Image source={hitung} style={styles.buttonImage} />
                    </TouchableOpacity>
                    
                </View>
            </View>
                </ScrollView>
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
        marginTop: 10,
    },
    inputLabel: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#2254C5',
        marginTop: 15,
        marginBottom: 5,
    },
    input: {
        backgroundColor: 'white',
        width: 300,
        padding: 10,
        borderRadius: 11,
        color: 'black',
        borderWidth: 1,
        borderColor: '#2254C5'
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
    gender: {
        top: scale(5)
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