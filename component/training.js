import { View, Text , StyleSheet,Image, TouchableOpacity, ScrollView, placeholder } from 'react-native'
import React from 'react'

import { useState } from 'react'
import Nav from '../component/Nav'

import Search from '../component/Search/search'
import icon from '../img/bro.png'
import dumbel from '../img/dumbell.png'
import gelombang from '../img/gelombang.png'
import left from '../img/left.png'
import { scale } from 'react-native-size-matters'

export default function WorkoutScreen ({navigation}){
    const [searchQuery, setSearchQuery] = useState('');

    const GoView = () =>{
      navigation.navigate('View_w')
    }

  const handleSearch = (query) => {
    setSearchQuery(query);

  };
  const WorkoutScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchBarColor, setSearchBarColor] = useState('#F0F0F5');
  
    // const handleSearch = (query) => {
    //   setSearchQuery(query);
    // };
};
    const exercises = [
      { id: 1, name: 'Arm exercise', form:'Pushup',Reps: "10 X 3",form1: 'Dips', form2:'Pull up', form3: 'Plank', form4: 'Arm circle', form5: 'Supermen', form6: 'diamond', deskripsi:'Arm exercises are physical exercises specifically designed to strengthen and shape the arm muscles, including the biceps, triceps and other related muscles. This exercise can be done using various methods and tools, such as dumbbells, barbells, or using your own body weight.'},
      { id: 2, name: 'Push Day', form:'Push up Regular',Reps: "10X 3",form1: 'Push up Diamond', form2:'Pike Pushup', form3: 'Tricep Dips', form4: 'Wide Pushup', form5: 'Archer Pushup', deskripsi: 'Push day is a term used in weightlifting and bodybuilding to describe a workout session focused on exercises that primarily target pushing movements, typically involving the chest, shoulders, and triceps.'  },
      { id: 3, name: 'Pull Day', form:'Pull up',Reps: "12 X 3",form1: 'Chin Up', form2:'Inverted Rows',  form3: 'Australian Pull-up:', form4: 'Reverse Snow Angels', form5: 'Menggelantung', form6: 'Negative Pull up', deskripsi: 'Pull day is a workout routine typically performed in the gym, focusing on exercises that target pulling movements primarily engaging the muscles of the back, biceps, and rear deltoids. It forms part of a popular training split known as the push-pull-legs (PPL) split, where each day is dedicated to specific movement patterns or muscle groups.' },
      { id: 4, name: 'Leg Day', form:'Squad',Reps: "12 x3",form1: 'Jumping Jack', form2:'Lunges', form3: 'Step Ups', form4: 'Calf Raises', form5: 'Glute Bridge', form6: 'Single-Leg Deadlift' , deskripsi: 'Leg day is a designated workout session focused on strengthening and developing the muscles of the lower body, particularly the quadriceps, hamstrings, glutes, and calves. Its an essential part of many fitness routines and weightlifting programs. Leg day workouts typically consist of compound and isolation exercises targeting various muscle groups in the legs'},
      { id: 5, name: 'Abs', form:'Sit Up',Reps: "12 x3",form1: 'Crunch', form2:'Sit Up', form2:'Russian Twist', form3: 'Montain Climbers', form4: 'Leg Riases', form5: 'Bicycle Crunch', form6: 'Plank', deskripsi: 'Abs exercise, singkatan dari abdominal exercise, adalah serangkaian latihan yang dirancang khusus untuk menguatkan dan membentuk otot-otot perut, terutama otot-otot rectus abdominis, obliques, dan transversus abdominis.' },  // Add more exercises as needed
    ];


    // Filter your data based on the search query
    const filteredExercises = exercises.filter((exercise) => exercise.name.toLowerCase().includes(searchQuery.toLowerCase()));


    // Fungsi untuk mengubah warna search bar saat digunakan
    const changeSearchBarColor = () => {
        setSearchBarColor('black'); // Ubah warna search bar saat digunakan
    };
    return(
        <View style={Style.container}>
            <View style={{height: 80, }}>
                <Search placeholder="Search" onSearch={handleSearch} />
                <TouchableOpacity>
                    
                </TouchableOpacity>
                <Image source={left} style={Style.left} />
            </View>
           
            <ScrollView  showsVerticalScrollIndicator={false}>
            {filteredExercises.map((exercise, index) => (
                    <View key={index} style={{ width:scale(320), height: 150, backgroundColor: '#5386F3', borderWidth: 3, borderColor: '#5386F3', borderRadius: 10, marginLeft: 20, marginTop: 10, marginRight: 20, padding: 8 }}>
                        <Image source={icon} style={Style.icon} />
                        <Text style={Style.Exercise1}>
                            {exercise.name}
                        </Text>
                        {/* Assuming 'difficulty' is available in the exercise object */}
                        {exercise.difficulty && <Text>{exercise.difficulty}</Text>}
                        <Image source={dumbel} style={Style.dumbel} />
                        <Text style={Style.exercise}>7 Exercise</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('View_w' , {exercise: exercise})}>
                            <View style={{ width: 60, height: 30, borderWidth: 1.75, borderRadius: 5, borderColor: 'white', alignItems: 'center', justifyContent: 'center', marginTop: 13, backgroundColor: 'white' }}>
                                <Text style={Style.Tombol}>View</Text>
                            </View>
                        </TouchableOpacity>
                        <Image source={gelombang} style={Style.gelombang} />
                    </View>
                ))}

            </ScrollView>
        </View>
       
    )
}

const Searchbar = ({ placeholder, onFocus, color }) => {
    return (
        <View style={{ backgroundColor: color, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10, marginHorizontal: 20, marginTop: 20 }}>
            <TextInput
                style={{ flex: 1, fontSize: 16 }}
                placeholder={placeholder}
                onFocus={onFocus} // Panggil fungsi saat search bar digunakan
            />
        </View>
    );
};
const Style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#F0F0F5',
        marginTop: 20
    
    }, 
    icon:{
        width:120,
        height: 120,
        left: 180,
        top: 10,
    },

    Exercise1:{
        fontSize:14,
        fontWeight: "bold",
        top: -115,
        left: 5,
        color: 'white',
        fontSize: 18,
    },
    dumbel:{
        width: 15,
        height: 15,
        top: -100,
        left: 5,
    },
    exercise:{
        marginTop: -118,
        marginLeft: 25,
        color: 'white'
    },
    Tombol:{
        color: '#121212',
        fontWeight: "500",
        fontSize: 15
    },
    gelombang:{
        width: 318,
        height: 50,
        top: 100,
        left: -3,
        zIndex: -1,
        position: 'absolute',

    },
    left:{
        width:20,
        height:20,
        position: 'absolute',
        top: 42,
        marginLeft: 20

    }
})