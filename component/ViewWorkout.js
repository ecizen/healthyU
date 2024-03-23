import { View, Text , StyleSheet,Image, TouchableOpacity, ScrollView, placeholder, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'

import { useState } from 'react'

import bluedumbel from '../img/bluedumbell.png'
import { scale } from './SlideItem'
import foto from '../img/foto.png'
import Nav2 from './Nav'

import close from '../img/close.png'
export default function ListWorkout({route,navigation}){

    const { exercise } = route.params;

    const handlePreview = () => {
        navigation.navigate('ListWorkout1', { exercise });
    }

    const CloseBack = () =>{
        navigation.navigate('Training')
    }
    const GoStart = () =>{
        navigation.navigate('Video', { exercise: exercise });
    }
    return(
        <SafeAreaView style={styles.container}>
         
                <View style={styles.cardjudul}>
                    <Image source={bluedumbel} style= {styles.image}/> 
                    <Text style={styles.judul}>{exercise.name}</Text>
                    <Text style={styles.subjudul}>7 Exercise</Text>
                    <TouchableOpacity onPress={CloseBack}><Image source={close} style={styles.close}/></TouchableOpacity>
                   
                </View>
                <View style={styles.keterangan}>
                    <Text style={styles.calories}>Calories</Text>
                    <Text style={styles.time}>Time</Text>
                    <Text style={styles.level}>Level</Text>
                    <Text style={styles.cal}>240 cal</Text>
                    <Text style={styles.min}>30 min</Text>
                    <Text style={styles.beginner}>Beginner</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.cardlist}>
                    <View style={styles.cardlatihan}>
                    <View style={{flexDirection: 'row', width: 160}}>
                        <Image source={foto} style={styles.foto}/>
                        <View style={{marginLeft:10}}>                            
                        <Text style={styles.judullatihan}>{exercise.form}</Text>
                        <Text style={styles.rep}>{exercise.Reps}</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Views', { exercise: exercise.form })}>
    <Text style={styles.preview}>Preview</Text>
</TouchableOpacity>
                    </View>
                    <View style={styles.cardlatihan}>
                    <View style={{flexDirection: 'row', width: 160}}>
                        <Image source={foto} style={styles.foto}/>
                        <View style={{marginLeft:10}}>                            
                        <Text style={styles.judullatihan}>{exercise.form1}</Text>
                        <Text style={styles.rep}>{exercise.Reps}</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Views', { exercise: exercise.form1 })}>
                        <Text style={styles.preview}>Preview</Text>
                    </TouchableOpacity>
    
                    </View>
                    <View style={styles.cardlatihan}>
                    <View style={{flexDirection: 'row', width: 160}}>
                        <Image source={foto} style={styles.foto}/>
                        <View style={{marginLeft:10}}>                            
                        <Text style={styles.judullatihan}>{exercise.form2}</Text>
                        <Text style={styles.rep}>{exercise.Reps}</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Views', { exercise: exercise.form2 })}>
                        <Text style={styles.preview}>Preview</Text>
                    </TouchableOpacity>
    
                    </View>
                    <View style={styles.cardlatihan}>
                    <View style={{flexDirection: 'row', width: 160}}>
                        <Image source={foto} style={styles.foto}/>
                        <View style={{marginLeft:10}}>                            
                        <Text style={styles.judullatihan}>{exercise.form3}</Text>
                        <Text style={styles.rep}>{exercise.Reps}</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Views', { exercise: exercise.form3 })}>
                        <Text style={styles.preview}>Preview</Text>
                    </TouchableOpacity>
    
                    </View>
                    <View style={styles.cardlatihan}>
                    <View style={{flexDirection: 'row', width: 160}}>
                        <Image source={foto} style={styles.foto}/>
                        <View style={{marginLeft:10}}>                            
                        <Text style={styles.judullatihan}>{exercise.form4}</Text>
                        <Text style={styles.rep}>{exercise.Reps}</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Views', { exercise: exercise.form4 })}>
                        <Text style={styles.preview}>Preview</Text>
                    </TouchableOpacity>
    
                    </View>
                    <View style={styles.cardlatihan}>
                    <View style={{flexDirection: 'row', width: 160}}>
                        <Image source={foto} style={styles.foto}/>
                        <View style={{marginLeft:10}}>                            
                        <Text style={styles.judullatihan}>{exercise.form5}</Text>
                        <Text style={styles.rep}>{exercise.Reps}</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Views', { exercise: exercise.form5 })}>
                        <Text style={styles.preview}>Preview</Text>
                    </TouchableOpacity>
    
                    </View>
                    <View style={styles.cardlatihan}>
                    <View style={{flexDirection: 'row', width: 160}}>
                        <Image source={foto} style={styles.foto}/>
                        <View style={{marginLeft:10}}>                            
                        <Text style={styles.judullatihan}>{exercise.form6}</Text>
                        <Text style={styles.rep}>{exercise.Reps}</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Views', { exercise: exercise.form6 })}>
                        <Text style={styles.preview}>Preview</Text>
                    </TouchableOpacity>
    
                    </View>
                </View>         
            </ScrollView>
            <View style={styles.btnStart}>
                <TouchableOpacity onPress={GoStart} style={styles.start}><Text style={{fontSize: 15, fontWeight: '700', color: 'white'}}>Start</Text></TouchableOpacity>
            </View>
           
        </SafeAreaView>
    )
}
const styles= StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 20,
    
    },
    cardlist:{
        width: '100%',
        height: 600,
        backgroundColor:'#F0F0F5',
        alignItems: 'center'
    },
    judul: {
      fontSize: 23,
      fontWeight: '600',
      left: 70,
      top: 10,
    },
    subjudul:{
        fontSize: 15,
        fontWeight: '400',
        color: '#665959',
        left:35,
        top: 20,
    },
    image:{
        width: 25,
        height: 19,
        top: 37,
        left: 36,
    },
    cardjudul:{
        height: 100
    },
    calories:{
        top: 40,
        left: 35,
        fontSize: 15,
        color:'#8C7D7D', 
 
    },
    foto:{
        width: 40,
        height: 40,
        borderRadius: 5
    },
    time:{
        left: 155,
        top: 22,
        color: '#8C7D7D',
        fontSize: 15,
    },
    level:{
        left: 270,
        color: '#8C7D7D'
    },
    cal:{
        left: 42,
        fontSize:13,
        fontWeight: '600'
    },
    min:{
        top: -16,
        left: 153,
        fontSize: 13,
        fontWeight:'600'
    },
    beginner:{
        top: -37,
        left: 260,
        fontWeight: '600',
        fontSize: 13,
    },
    keterangan:{
        height: 100

    },
    cardlatihan:{
        borderWidth: 1,
        height: 60,
        width: scale(320),
        borderRadius: 10,
        backgroundColor:'white',
        marginTop: 10,
        borderColor:'#E7E6E6',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
       

    },
     judullatihan:{
        fontWeight: '400',
        fontSize: 14,
        color: '#121212',
       
    },
    rep:{
        fontSize: 14,
        fontWeight:'500',
        color:'#979696',
      

    },
    preview:{
        
        fontWeight: '500',
        fontSize: 16,
        color: '#2254C5',
        marginLeft: scale(100)
        
    },
    cardlatihanpush:{
        borderWidth: 1.5,
        height: 60,
        width: 330,
        left: 15,
        borderRadius: 10,
        backgroundColor:'white',
        marginTop: 5,
        borderColor:'#DCD1D1'
    },
    close:{
        width: 30,
        height: 30,
        left: 325,
        top: -36,
    },
    start:{
        width: 300,
        height: 50,
        backgroundColor: '#2254C5',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnStart:{
        position: 'absolute',
       alignItems: 'center',
       justifyContent: 'center',
        bottom: 0,
        width:'100%',
        height: 90,
        backgroundColor: 'white'
        
    }


})