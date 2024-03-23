import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'



export default function Tombol({ pindah}) {
  
    
    
     // Menggunakan useRoute untuk mendapatkan informasi rute saat ini
  

   
    
    const GoStart = () => {
        // Navigate to "View Workout" screen with ID: 1
        
      };
  return (
    <View>
     <TouchableOpacity
      style={{
        width: 154,
        height: 21,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
      }}
      onPress={pindah}
    >
      <Text style={{ fontWeight: 'bold', color: 'blue' }}>Start</Text>
    </TouchableOpacity>
    </View>
  )
}