import { View, Text , StyleSheet,Image, TouchableOpacity, ScrollView, placeholder, SafeAreaView } from 'react-native'
import React from 'react'
import foto from '../img/foto.png'
import tutor from '../img/tutorpuh.png'
import { scale } from 'react-native-size-matters'


export default function ListWorkout1({navigation , route}){
    const { exercise } = route.params;

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

    const nama = {
        'Pushup': ' Pushup',
        'Dips': ' Dips',
        'Pull up': 'Pull up',
        'Plank' : 'Plank',
        'Arm circle' : 'Arm Circle',
        'Supermen' : 'Supermen',
        'diamond' : 'DIamond Pushup',
        'Push up Regular': 'Push up Regular',
        'Push up Diamond':'Push up Diamond',
        'Pike Pushup': 'Pike Push up',
        'Tricep Dips': 'Tricep Dips',
        'Wide Pushup' :'Wide Pushup',
        'Archer Pushup' : 'Archer Pushup',
        'Chin Up': 'Chin up',
        'Inverted Rows': 'Inverted Rows',
        'Australian Pull-up:': 'Australian Pull',
        'Reverse Snow Angels':  'Reverse Snow Angels',
        'Menggelantung': 'Mengeglantung',
        'Negative Pull up': 'Negative Pull up',
        'Jumping Jack':'Jumping Jack' ,
        'Squad': 'Squad',
        'Lunges': 'Lunges',
        'Step Ups': 'Step Ups',
        'Calf Raises': 'Calf Raises',
        'Glute Bridge': 'Glute Bridge'

    };

    const Deskripsi = {
        'Pushup'  : 'Place your hands on the floor wider than shoulder-width apart with fingertips facing forward. This is the starting position. Slowly lower your chest to the floor by bending your elbows while inhaling.',
        'Dips' : 'Dips are a basic exercise movement to train the upper body, especially the triceps. This involves lowering and lifting the body with the hands placed on a surface lower than the shoulders, such as a chair or parallel bars',
        'Pull up' : 'Pull-ups are a physical strength exercise that aims to strengthen and maintain muscle mass, especially the upper body muscles such as the back, arms and shoulders. This movement involves pulling the body up from a hanging position using the hands resting on a horizontal bar or bar.',
        'Plank' : 'Planks are Plank is a physical exercise movement that involves holding the body in a push-up position, with the body straight from head to heels, and supported by the arms and toes. This exercise aims to strengthen the bodys core muscles, including the abdominal, back and pelvic muscles. Planks can be done in a variety of variations, including side planks, raised leg planks, or one-arm planks.',
        'Supermen' : 'The Superman movement is a physical exercise that involves a body position similar to that of Superman when flying, by lifting both hands and feet off the floor at once. This position allows you to stretch the muscles of your back, buttocks, and hamstrings, as well as strengthen your core muscles. The Superman exercise can help increase core stability, reduce the risk of lower back injury, and improve posture.',
        'diamond' : 'The Diamond Pushup, or diamond pushup, is a variation of the pushup exercise that involves placing the hands in a diamond position, with the index and thumb of each hand together. This move places more stress on the triceps than a standard pushup, helping to strengthen and develop the triceps more intensely. This exercise also engages the chest and shoulder muscles, providing a holistic workout for the upper body.',
        'Arm circle': 'Arm Circle is an exercise that involves circular arm movements. This exercise is usually done by standing up straight and rotating the arms in small or large circles, either forward or backward. This movement can help warm up and tone the muscles in the shoulders, arms and upper back.',
        'Push up Regular': 'Regular push ups are a physical exercise that is generally done while lying face down on the floor with your hands slightly wider than your shoulders, and your legs stretched behind you with your body weight supported by your hands and toes. This movement involves lowering the body towards the floor while keeping the body straight, then pushing back to the starting position using arm strength.',
        'Push up Diamond': 'Diamond push ups, also known as diamond push ups, are a variation of push ups that involve placing both hands in a diamond position with your middle fingers and thumbs touching each other underneath your body.',
        'Pike Pushup': 'Pike Push ups are a variation of the push up that targets the shoulder muscles, triceps and core muscles. This movement involves lifting the hips up so that the body forms an inverted triangle position, resembling the position when doing downward dog in yoga. When performing pike push ups, most of the body weight is pushed towards the shoulders and triceps, providing an effective exercise to strengthen these muscles.',
        'Tricep Dips': 'Tricep dips are a strength exercise that aims to strengthen the triceps muscle, which is the large muscle on the back of the upper arm. This exercise involves supporting the body with the hands behind the back and then lowering and lifting the body with the help of the arms, thereby placing load on the triceps muscles. Tricep dips are usually done using a chair, bench, or other stable tool to support the body.',
        'Wide Pushup': 'Wide pushup adalah variasi dari pushup standar di mana tangan ditempatkan lebih lebar dari posisi bahu. Latihan ini menargetkan otot-otot dada, bahu, dan trisep secara lebih intensif dibandingkan dengan pushup standar. Ketika melakukan wide pushup, posisi tangan yang lebih lebar memperpanjang rentang gerakan, memberikan tekanan ekstra pada otot dada dan bahu.',
        'Archer Pushup': 'The Archer Pushup is a variation of the pushup that involves bending one arm while keeping the other arm straight. When performing this movement, one arm directs the body to the side while the other arm remains straight like an arc. This movement allows you to focus on one side of the body more than the other, which can help in building overall body strength and balance.',
        'Chin Up': 'Chin Up is a body lifting exercise that targets the latissimus dorsi muscles in the upper back and the biceps muscles in the arms. This movement involves a grip with the hands facing towards the body or a "supinated grip" at a distance that is parallel or slightly closer than shoulder width.',
        'Inverted Rows': 'Inverted Rows is a strength exercise that involves the back, shoulders and arms. This exercise involves using a bar or other apparatus parallel to the ground, with the body suspended beneath it. When doing inverted rows, the body is pulled up until the chest approaches the bar, and then lowered back to the starting position. This exercise is effective in strengthening the muscles of the back, shoulders, and arms, as well as improving core stability. There are various variations and alternatives to this exercise, including the use of a Smith machine, grip variations, and adding resistance to increase the level of difficulty.',
        'Australian Pull-up:': 'Australian Pull ups are a body strength exercise that involves pulling the body upwards in a horizontal position, often done by grabbing a parallel bar located above. This exercise engages the muscles of the middle back, shoulders, traps, core, and biceps. With a focus on building upper body strength, Australian pull-ups are also a good exercise for beginners to strengthen their bodies. This horizontal movement allows for a more controlled exercise and can aid in the development of core stability.',
        'Reverse Snow Angels': 'Reverse Snow Angels adalah latihan kekuatan yang melibatkan gerakan menarik lengan dan kaki ke atas secara horizontal, meniru gerakan yang dilakukan saat membuat "malaikat salju" di salju. Latihan ini bekerja pada otot-otot punggung atas, termasuk deltoid dan latissimus dorsi, serta otot stabilisasi lainnya. ',
        'Menggelantung': 'Hanging pull refers to an exercise technique commonly performed using a pull-up bar. This exercise involves hanging from the bar with your arms fully extended, engaging the muscles of your upper body, particularly the back, shoulders, and arms. Hanging pulls are effective for strengthening the upper body muscles and improving grip strength.',
        'Lunges': '',
        'Negative Pull up': 'Negative pull-ups are an exercise technique where you focus on the eccentric (lowering) phase of the pull-up movement. Heres how to perform negative pull-up',
        'Jumping Jack': 'Jumping jack, also known as star jump or side-straddle hop in the US military, is a physical jumping exercise performed by jumping into the air and spreading the legs and arms outwards',
        'Squad': 'Squats are a type of fitness exercise that involves bending the knees and hips while lowering the body down and then returning to a standing position. Squat exercises have several benefits,',
        'Lunges': 'Lunges are a series of sports exercises that aim to train the muscles of the thighs, hips, hamstrings and calves. This movement involves stepping forward or backward by bending one knee until it forms a 90 degree angle, while the other knee almost touches the floor.',
        'Step Ups': 'Step-ups are a versatile lower body exercise that targets various muscle groups, including the quadriceps, hamstrings, glutes, and calves. ',
        'Calf Raises': 'Calf raises offer several benefits, including improved lower body performance, enhanced speed during running and sprinting, injury prevention, and strengthening of the calf muscles [1]. They are also an effective exercise for shaping and toning the calf muscles',
        'Glute Bridge': 'A glute bridge is a highly effective exercise for targeting the gluteal muscles, as well as engaging the thighs and core. Heres how to perform it'
    };
    const Damage = {
        'Pushup' : 'Chest',
        'Dips' : 'Uper',
        'Pull up': 'Back',
        'Plank': 'Arm',
        'Arm circle': 'Arm',
        'Supermen': 'Arm',
        'diamond' : 'chest',
        'Push up Diamond': 'Tricep',
        'Pike Pushup': 'Shoulder',
        'Push up Regular': 'Tricep',
        'Tricep Dips': 'Tricep',
        'Wide Pushup': 'Tricep',
        'Archer Pushup': 'Tricep',
        'Chin Up': 'Back',
        'Inverted Rows': 'Arm',
        'Australian Pull-up:' : 'back',
        'Reverse Snow Angels': 'up back',
        'Menggelantung': 'back',
        'Negative Pull up': 'back',
        'Jumping Jack':'Leg' ,
        'Squad': 'Leg',
        'Lunges': 'Upper',
        'Step Ups': 'Leg',
        'Calf Raises': 'Endurance',
        'Glute Bridge': 'Endurance',
    }
    const Damage2 = {
        'Pushup' : 'Tricep',
        'Dips' : 'Tricep',
        'Pull up': 'Bicep',
        'Plank': 'Chest',
        'Arm circle': 'shoulder',
        'Supermen': 'Back',
        'diamond': 'Tricep',
        'Push up Diamond': 'Chest',
        'Pike Pushup': 'Tricep',
        'Push up Regular': 'Chest',
        'Tricep Dips': 'Chest',
        'Wide Pushup': 'Chets',
        'Archer Pushup': 'Chest',
        'Chin Up': 'fore arm',
        'Inverted Rows': 'Back',
        'Australian Pull-up:' : 'Arm',
        'Menggelantung':'bicep',
        'Negative Pull up': 'Bicep',
        'Squad': 'Squad',
        'Jumping Jack':'Cardio' ,
        'Calf Raises': 'Leg',
        'Glute Brigde': 'Endurance',
       
    }
    return(
        <SafeAreaView>
            <ScrollView>
                <Image source={gambar[exercise]} style={style.foto1}/>
                <View>
                    <Text style={style.judul}>{nama[exercise]} 10 Reps</Text>
                    <View style={{marginLeft: 20}}>
                    <Text style={style.namalatihan}>{nama[exercise]}</Text>
                    <Text style={style.deskripsi}>{Deskripsi[exercise]}</Text>
                    <Text style={style.damage}>Area Damage</Text>
                    </View>
                </View>
                <View style={style.damagebox}>
                    <Text style={style.damagedesk}>{Damage[exercise]}</Text>
                    <View style={style.button}></View>
                </View>
                <View style={style.damagebox1}>
                    <Text  style={style.damagedesk}>{Damage2[exercise]}</Text>
                    <View style={style.button}></View>
                </View>
                <View style={{alignItems: 'center'}}>

                <View style={style.cardtutor}>
                    <Text style={{fontSize: 16, fontWeight:'600', color: 'black', textAlign: 'center'}}>" Pikirkan betapa jauh kamu bisa pergi, hanya dengan memulai sekarang ".</Text>
                </View>
                </View>
                <View>
                <View style={{justifyContent: 'center', alignItems:'center'}}>
                    
                    <TouchableOpacity onPress={() =>{ navigation.navigate('Training')}} style={style.backbutton}><Text style={style.back}>Back</Text></TouchableOpacity>
                 </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        
    },
    foto1:{
        width: '100%',
        height: 300,
        marginTop: 40,
        marginLeft: 0  
    },
    judul:{
        textAlign: 'center',
        marginTop: 20,
        fontSize: 20,
        fontWeight: '500'
    },
    namalatihan:{
        marginTop: 20,
       
        fontWeight: '500',
        fontSize: 15
    }, 
    deskripsi:{
        fontSize: 15,
        color: '#867B7B',
        marginTop: 8,
    },
    damage:{
        fontSize: 15,
        fontWeight:'500',
        marginTop: 10,
    }, 
    damagedesk:{
        position:'absolute'
    },
    damagebox:{
        marginLeft:20,
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
        marginLeft:130,
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
        width: scale(320),
        height: 190,
        backgroundColor: '#CFDDFC',
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
        alignContent:'center',
        justifyContent: 'center',
        paddingHorizontal: 20
        
    },
    tutor:{
        width: scale(280),
        height:150,
        marginLeft: 20
    },
    backbutton:{
        width: scale(300),
        height: 50,
        alignItems:'center',
        justifyContent: 'center',
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