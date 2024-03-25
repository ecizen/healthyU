import { View, Text , StyleSheet,Image, TouchableOpacity, ScrollView, placeholder, ImageBackground } from 'react-native'
import React from 'react'

import { useState } from 'react'
import Nav from '../component/Nav'

import Search from '../component/Search/search'
import icon from '../img/bro.png'
import dumbel from '../img/Vector7.png'

import left from '../img/left.png'
import { scale } from 'react-native-size-matters'
import Ui from '../img/Arm3.png'

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
      { id: 1, name: 'Arm exercise', form:'Pushup',Reps: "10 X 3",form1: 'Dips', form2:'Pull up', form3: 'Plank', form4: 'Arm circle', form5: 'Supermen', form6: 'diamond', deskripsi:'Arm exercises are physical exercises specifically designed to strengthen and shape the arm muscles, including the biceps, triceps and other related muscles. This exercise can be done using various methods and tools, such as dumbbells, barbells, or using your own body weight.',image: require('../img/Arm3.png'),image1: require('../img/push1.png'), image2: require('../img/Dips.jpg'), image3:require('../img/Pull.png'), image4: require('../img/Plank.jpg') },
      { id: 2, name: 'Push Day', form:'Push up Regular',Reps: "10X 3",form1: 'Push up Diamond', form2:'Pike Pushup', form3: 'Tricep Dips', form4: 'Wide Pushup', form5: 'Archer Pushup', deskripsi: 'Push day is a term used in weightlifting and bodybuilding to describe a workout session focused on exercises that primarily target pushing movements, typically involving the chest, shoulders, and triceps.' ,image: require('../img/push1.png') },
      { id: 3, name: 'Pull Day', form:'Pull up',Reps: "12 X 3",form1: 'Chin Up', form2:'Inverted Rows',  form3: 'Australian Pull-up:', form4: 'Reverse Snow Angels', form5: 'Menggelantung', form6: 'Negative Pull up', deskripsi: 'Pull day is a workout routine typically performed in the gym, focusing on exercises that target pulling movements primarily engaging the muscles of the back, biceps, and rear deltoids. It forms part of a popular training split known as the push-pull-legs (PPL) split, where each day is dedicated to specific movement patterns or muscle groups.' ,image: require('../img/Pull.png')},
      { id: 4, name: 'Leg Day', form:'Squad',Reps: "12 x3",form1: 'Jumping Jack', form2:'Lunges', form3: 'Step Ups', form4: 'Calf Raises', form5: 'Glute Bridge', form6: 'Single-Leg Deadlift' , deskripsi: 'Leg day is a designated workout session focused on strengthening and developing the muscles of the lower body, particularly the quadriceps, hamstrings, glutes, and calves. Its an essential part of many fitness routines and weightlifting programs. Leg day workouts typically consist of compound and isolation exercises targeting various muscle groups in the legs',image: require('../img/Leg.png')},
      { id: 5, name: 'Abs', form:'Sit Up',Reps: "12 x3",form1: 'Crunch', form2:'Sit Up', form2:'Russian Twist', form3: 'Montain Climbers', form4: 'Leg Riases', form5: 'Bicycle Crunch', form6: 'Plank', deskripsi: 'Abs exercise, singkatan dari abdominal exercise, adalah serangkaian latihan yang dirancang khusus untuk menguatkan dan membentuk otot-otot perut, terutama otot-otot rectus abdominis, obliques, dan transversus abdominis.', image: require('../img/Abs.png') },  // Add more exercises as needed
    ];
    const gambar ={
        'Pushup': require('../img/push1.png'),
        'Dips': require('../img/Dips.jpg'),
        'Pull up' :require('../img/Pull.png'),
        'Plank': require('../img/Plank.jpg'),
        'Arm circle': require('../img/Circle.jpeg'),
        'Supermen': require('../img/Superman.jpg'),
        'diamond' : require('../img/Diamond.jpg'),
        'Push up Regular':  require('../img/push1.png'),
        'Push up Diamond':  require('../img/Diamond.jpg'),
        'Pike Pushup':  require('../img/Pike.jpeg'),
        'Tricep Dips': require('../img/Dips.jpg'),
        'Wide Pushup':  require('../img/Wide.jpg'),
        'Archer Pushup' :  require('../img/Archer.jpeg'),
        'Pull up': require('../img/Pull.png'),
        'Chin Up': require('../img/Chin.jpg'),
        'Inverted Rows' : require('../img/Inverted.jpg'),
        'Australian Pull-up:': require('../img/Australian.jpg'),
        'Reverse Snow Angels': require('../img/Reverse.jpg'),
        'Menggelantung': require('../img/Hang.png'),
        'Negative Pull up':  require('../img/Pull.png'),
        'Jumping Jack':require('../img/Jumping.jpeg') ,
        'Squad': require('../img/Leg.png'),
        'Lunges': require('../img/Lunges.jpg'),
        'Step Ups': require('../img/Step.jpg'),
        'Calf Raises': require('../img/Calf.jpg'),
        'Glute Bridge': require('../img/Glute.jpg')

    }


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
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{top: -49, marginLeft: 10}}>        
                    <Image source={left} style={Style.left} />
                </TouchableOpacity>
            </View>
           
            <ScrollView  showsVerticalScrollIndicator={false}>
            {filteredExercises.map((exercise, index) => (
                    <View key={index} style={{ width:scale(320), height: scale(150), borderRadius: 10, marginLeft: 20, marginTop: 20, marginRight: 20, paddingLeft: 10,justifyContent: 'center'  }}>
                        <View style={Style.gambar}>
                             <Image style={Style.gamabr2} source={exercise.image}></Image> 
                        </View>
                        <Text style={Style.Exercise1}>
                            {exercise.name}
                        </Text>
                        {/* Assuming 'difficulty' is available in the exercise object */}
                        {exercise.difficulty && <Text>{exercise.difficulty}</Text>}
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                        <View style={{width: 30, height: 30, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center', borderRadius: 6}}>
                        <Image source={dumbel} style={Style.dumbel} />
                        </View>
                        <Text style={Style.exercise}>7 Exercise</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('View_w' , {exercise: exercise})}>
                            <View style={{ width: 60, height: 30, borderWidth: 1.75, borderRadius: 5, borderColor: 'white', alignItems: 'center', justifyContent: 'center', marginTop: 20, backgroundColor: 'white' }}>
                                <Text style={Style.Tombol}>View</Text>
                            </View>
                        </TouchableOpacity>
                  
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
        fontSize:20,
        fontWeight: "bold",
        color: 'white',
        fontSize: 18,
    },
    dumbel:{
        width: 15,
        height: 15,
    
    },
    exercise:{
      
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
       
    

    },
    gambar:{
        width: scale(320),
        height:scale(150),
        
        position: 'absolute',
        

    

    },
    gamabr2:{
        width: scale(320),
        height:scale(153),
        borderRadius: 8,
        right: 3

    }
})