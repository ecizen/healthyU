import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Back from '../img/backnavigator.png';
import { useNavigation } from '@react-navigation/native';
import plus from '../img/Plus.png';
import moon from '../img/Moon.png';
import walk from '../img/Walking.png';

import { CheckBox } from 'react-native-elements';

const Habbit = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://94c5-112-78-156-160.ngrok-free.app/habits');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const responseData = await response.json();
            setData(responseData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleCheckboxChange = async (itemId) => {
        try {
            const response = await fetch(`https://08b6-36-73-32-145.ngrok-free.app/habits/${itemId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete data');
            }
            // Update data after deletion
            const updatedData = data.filter(item => item.id !== itemId);
            setData(updatedData);
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };

    const getImageSource = (title) => {
        switch (title) {
            case 'Run':
                return walk; // Return the walk image source for the 'Run' activity
            case 'Sleep':
                return moon; // Return the moon image source for the 'Sleep' activity
            // Add cases for other activities if needed
            default:
                return null; // Return null for unknown activities
        }
    };
    

    const handleRefresh = () => {
        fetchData();
    };

    const renderItem = ({ item }) => (
        <View style={{ alignItems: 'center', marginTop: 33, flexDirection: 'column', gap: 25 }}>
            {/* habit */}
            <View style={{ backgroundColor: '#2254C5', width: 350, height: 99, borderRadius: 10, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Image source={getImageSource(item.title)}  style={{ width: 35, height: 35, marginLeft: 20, marginRight: 16 }} />
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>{item.title}</Text>
                        <Text style={{ fontSize: 15, color: 'white' }}>Selesai</Text>
                    </View>
                    <CheckBox
                        checked={false} // Set to false because this will be handled by handleCheckboxChange
                        onPress={() => handleCheckboxChange(item.id)}
                    />
                </View>
            </View>
        </View>
    );

    const GoHome = () => {
        navigation.navigate('Home');
    };

    const GoAdd = () => {
        navigation.navigate('AddHabbit');
    };

  return (
    <View style={{backgroundColor: '#fff'}}>
       <View style={{flexDirection: 'row', marginTop: 50, margin: 20, alignItems: 'center'}}>
            <TouchableOpacity onPress={GoHome}><Image source={Back} style={{width: 20, height: 20}} /></TouchableOpacity>
            <Text style={{marginLeft: 100, fontSize: 16}}> Habbit Tracker</Text>
            <TouchableOpacity onPress={handleRefresh}><Text style={{marginLeft: 10, fontSize: 16, color: 'blue'}}>Refresh</Text></TouchableOpacity>
        </View>
        <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 20}}>Kalender</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexDirection: 'row', marginBottom: 50}}>
          <View style={{backgroundColor: '#4376E8', flexDirection: 'column', justifyContent: 'center',width: 81, height: 98, borderRadius: 10, marginLeft: 20, marginTop: 24}}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 10, fontWeight: 'bold'}}>Senin</Text>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 15, fontWeight: 'bold'}}>05</Text>
          </View>
          <View style={{backgroundColor: '#4376E8', flexDirection: 'column', justifyContent: 'center',width: 81, height: 98, borderRadius: 10, marginLeft: 20, marginTop: 24}}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 10, fontWeight: 'bold'}}>Selasa</Text>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 15, fontWeight: 'bold'}}>06</Text>
          </View>
          <View style={{backgroundColor: 'rgba(64, 123, 255, 0.15)', flexDirection: 'column', justifyContent: 'center',width: 81, height: 98, borderRadius: 10, marginLeft: 20, marginTop: 24}}>
            <Text style={{color: '#4270D7', textAlign: 'center', fontSize: 10, fontWeight: 'bold'}}>Rabu</Text>
            <Text style={{color: '#4270D7', textAlign: 'center', fontSize: 15, fontWeight: 'bold'}}>07</Text>
          </View>
          <View style={{backgroundColor: '#4376E8', flexDirection: 'column', justifyContent: 'center',width: 81, height: 98, borderRadius: 10, marginLeft: 20, marginTop: 24}}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 10, fontWeight: 'bold'}}>Kamis</Text>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 15, fontWeight: 'bold'}}>08</Text>
          </View>
          <View style={{backgroundColor: '#4376E8', flexDirection: 'column', justifyContent: 'center',width: 81, height: 98, borderRadius: 10, marginLeft: 20, marginTop: 24}}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 10, fontWeight: 'bold'}}>Jumat</Text>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 15, fontWeight: 'bold'}}>09</Text>
          </View>
        </ScrollView>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 20,marginLeft: 20, }}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Habbit Anda</Text>
        <TouchableOpacity  onPress={GoAdd}><Image source={plus} style={{width: 30, height: 30}}></Image></TouchableOpacity>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
        
    </View>
  );
};

export default Habbit;