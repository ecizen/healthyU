import { View, Text , StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import IMG from './Banana.png'
import Back from './backnavigator2.png'
import { useNavigation } from '@react-navigation/native';
import Articles from '../../Prop/Article'
import { scale } from 'react-native-size-matters'

export default function Artikel({navigation}) {
    

    const GoSearch = () => {
        navigation.navigate('SearchMenu');
    };
  return (
    <View style={styles.container}>
     <View style={styles.header}>
        <TouchableOpacity  onPress={GoSearch}>
            <Image source={Back} style={styles.arrow}></Image>
        </TouchableOpacity>
     </View>
     <ScrollView>
     <View style={styles.body1}>
        <Text style={styles.Title}>
        Health Benefits of Bananas ?
        </Text>
        <Image source={IMG} style={styles.Image}></Image>
     </View>
     <View style={styles.body2}>
     <View style={{width: 200, height: 40, backgroundColor: '#407BFF', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{fontWeight: '700', color: 'white'}}>Increases Fiber Intake</Text>
     </View>
     <View >

     <View style={{width: scale(311), height: scale(200), marginTop: 20, backgroundColor: 'white', borderRadius: 8, shadowColor: "#000",shadowOffset: {width: 0,height: 1,},shadowOpacity: 0.20,shadowRadius: 1.41,borderColor: '#E9E9E9',borderWidth: 1,elevation: 2, justifyContent: 'center', paddingLeft: 10}}>
     <Text style={{textAlign: 'justify', maxWidth: 290, color: '#727070'  }}>It's recommended that people consume between 22 to 34 grams (g) of fiber per day, depending on their age and gender.3 Unfortunately, many Americans only consume half of this amount. Fiber, also known as roughage, is found in plant foods like fruits, vegetables, and whole grains, and is an important nutrient that helps support digestive and heart health. It may also play a role in reducing the risk of type 2 diabetes and certain types of can......</Text>
     </View>
     </View>
     </View>
     <View style={styles.body2}>
     <View style={{width: 200, height: 40, backgroundColor: '#407BFF', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{fontWeight: '700', color: 'white'}}>Supports Heart Health</Text>
     </View>
     <View style={{width: scale(311), height: scale(260), marginTop: 20, backgroundColor: 'white', borderRadius: 8, shadowColor: "#000",shadowOffset: {width: 0,height: 1,},shadowOpacity: 0.20,shadowRadius: 1.41,borderColor: '#E9E9E9',borderWidth: 1,elevation: 2, justifyContent: 'center', paddingLeft: 10}}>
     <Text style={{textAlign: 'justify', maxWidth: 290,color: '#727070' }}>Adding more soluble fiber to the diet, found in fruits, can lower LDL or 'bad' cholesterol, reducing the risk of heart disease and stroke. The way that soluble fiber does this is by binding to cholesterol molecules in the small intestine and preventing their absorption.4 National Institutes of Health News in Health. Rough Up Your Diet Fit More Fiber In Your Diet.6In addition to fiber, bananas contain potassium, an essential mineral that helps manage blood pressure according to the American Heart Association.7 A medium-sized banana delivers 422 milligrams (mg) of potassium, meeting 9% of the recommended intake, or daily value (DV)</Text>
     </View>
     </View>
     <View style={styles.body2}>
     <View style={{width: 200, height: 40, backgroundColor: '#407BFF', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{fontWeight: '700', color: 'white'}}>Nutritional Facts of Bananas</Text>
     </View>
     <View style={styles.Nutrisi}> 
        <Text style={{color:'#727070'}}>Calories: 105 kcal</Text>
        <Text style={{color:'#727070'}}>Carbohydrates: 27 grams (g)</Text>
        <Text style={{color:'#727070'}}>Fiber: 3 g</Text>
        <Text style={{color:'#727070'}}>Manganese: 0.319 milligrams (mg) (14% of the DV)</Text>
        <Text style={{color:'#727070'}}>Copper: 0.092 mg (10% of the DV)</Text>
        <Text style={{color:'#727070'}}>Potassium: 422 mg (9% of the daily value or DV)</Text>
        <Text style={{color:'#727070'}}>Magnesium: 31.9 mg (8% of the DV)</Text>
        <Text style={{color:'#727070'}}>Vitamin B6: 0.433 mg (25% of the DV)</Text>
        <Text style={{color:'#727070'}}></Text>
     </View>
     
     </View>
     </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    arrow:{
        width: scale(19),
        height: scale(25)
    },
    header:{
        marginTop: 50,
        paddingLeft: 24,
        width: '100%',
        height: 70,
        borderTopWidth: 1,
        borderColor: '#C0C0C0',
        justifyContent: 'center'
    },
    body1:{
        alignItems: 'center'
    },
    Title:{
        fontSize: 20
    },
    Image:{
        width: scale(311),
        height: 225,
        marginTop: 26,
        borderRadius: 8
    },
    body2:{
        paddingLeft: 20,
        paddingTop: 20
    },
    Nutrisi:{
        width: scale(311), height: scale(190), marginTop: 20, backgroundColor: 'white', borderRadius: 8, shadowColor: "#000",shadowOffset: {width: 0,height: 1,},shadowOpacity: 0.20,shadowRadius: 1.41,borderColor: '#E9E9E9',borderWidth: 1,elevation: 2, justifyContent: 'center', paddingLeft: 10
    }
    
  });
  