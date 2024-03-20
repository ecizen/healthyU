import { View, Text , StyleSheet,Image, TouchableOpacity, ScrollView, placeholder, SafeAreaView } from 'react-native'
import React from 'react'
import foto from '../img/foto.png'
import tutor from '../img/tutorpuh.png'

export default function ListWorkout1({navigation}){
    return(
        <SafeAreaView>
            <ScrollView>
                <Image source={foto} style={style.foto1}/>
                <View>
                    <Text style={style.judul}>Push Up x 12</Text>
                    <Text style={style.namalatihan}>Wide Push Up</Text>
                    <Text style={style.deskripsi}>Place your hands on the floor wider than shoulder-width apart with fingertips facing forward. This is the starting position. Slowly lower your chest to the floor by bending your elbows while inhaling.</Text>
                    <Text style={style.damage}>Area Damage</Text>
                </View>
                <View style={style.damagebox}>
                    <Text style={style.damagedesk}>Chest</Text>
                    <View style={style.button}></View>
                </View>
                <View style={style.damagebox1}>
                    <Text  style={style.damagedesk}>Tricep</Text>
                    <View style={style.button}></View>
                </View>
                <View style={style.cardtutor}>
                    <Image source={tutor} style={style.tutor}/>
                </View>
                <View>
                    <TouchableOpacity onPress={() =>{ navigation.navigate('ListWorkout')}} style={style.backbutton}><Text style={style.back}>Back</Text></TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    foto1:{
        width: 360,
        height: 300,
        marginTop: 40,  
    },
    judul:{
        textAlign: 'center',
        marginTop: 20,
        fontSize: 20,
        fontWeight: '500'
    },
    namalatihan:{
        marginTop: 10,
        left: 10,
        fontWeight: '500',
        fontSize: 15
    }, 
    deskripsi:{
        fontSize: 15,
        left: 10,
        color: '#867B7B',
        marginTop: 8,
    },
    damage:{
        left: 10,
        fontSize: 15,
        fontWeight:'500',
        marginTop: 10,
    }, 
    damagedesk:{
        position:'absolute'
    },
    damagebox:{
        marginLeft:10,
        borderWidth:1.5,
        width: 100,
        height: 30,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderColor:'#2254C5',
        marginTop: 15
    },
    damagebox1:{
        marginLeft:120,
        borderWidth:1.5,
        width: 100,
        height: 30,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderColor:'#2254C5',
        marginTop: -30
    },
    button:{
        width: 10,
        height: 10, 
        borderRadius: 10,
        backgroundColor: '#2254C5',
        left: 35,
        top: 1.8

    },
    cardtutor:{
        width: 340,
        height: 190,
        backgroundColor: '#CFDDFC',
        marginLeft: 10,
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center',
        alignContent:'center'
        
    },
    tutor:{
        width: 210,
        height:150
    },
    backbutton:{
        width: 300,
        height: 50,
        alignItems:'center',
        justifyContent: 'center',
        marginLeft: 30,
        marginTop:20,
        borderRadius: 10,
        backgroundColor: '#2254C5',
        marginBottom: 10
    },
    back:{
        color:"white",
        fontSize:16,
        fontWeight:'500'
    }
})