import * as React from 'react';
import { View, StyleSheet, Button , Text, TouchableOpacity, Image} from 'react-native';
import { Video, ResizeMode, } from 'expo-av';

export default function App() {
  const [videos, setVideos] = React.useState([
    require('../img/pushup.mp4'),
    require('../video/dips.mp4'),
    require('../video/grip.mp4'),
  ]);
  const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0);
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  
  const playNextVideo = async () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      setCurrentVideoIndex(0);
    }
    // Reset the playback status
    await video.current.stopAsync();
    await video.current.unloadAsync();
    await video.current.loadAsync(videos[currentVideoIndex], {}, false);
    await video.current.playAsync();
  };
  
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={videos[currentVideoIndex]}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        shouldPlay={true}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View>
        <View style={styles.CardTitle}>
            <Text style={styles.titeExercise}>Push up</Text>
        </View>
        <View style={styles.JenisCard}>
            <Text style={styles.Jenis}>Wide pushup</Text>
            <Text style={styles.deskripsi}>Place your hands on the floor wider than shoulder-width apart with fingertips facing forward. This is the starting position. Slowly lower your chest to the floor by bending your elbows while inhaling.</Text>
        </View>
        <View style={styles.cardDamage}>
            <Text style={{fontWeight: 'bold'}}>Area Damage</Text>
            <View style={styles.Damage}>
                <View style={styles.Area}>
                    <Text style={styles.names}>Chest</Text>
                    <View style={styles.circel}></View>
                </View>
                <View style={styles.Area}>
                    <Text style={styles.names}>Tricep</Text>
                    <View style={styles.circel}></View>
                </View>
            </View>
        </View>
      </View>
      <View style={{marginTop: 20, alignItems: 'center'}}>
        <View style={{width: 320, height: 170, backgroundColor: '#CFDDFC', borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../img/UI2.png')} style={{width: 240, height: 160}}></Image>
        </View>
      </View>
      
      <View style={styles.buttons}>
      
        <TouchableOpacity style={styles.buttonNext}
          onPress={playNextVideo}
        ><Text style={styles.buttonText}>Next</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: '100%',
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CardTitle:{
    marginTop: 20,
    alignItems: 'center',
  },
  titeExercise:{
    fontSize: 20,
    fontWeight: '700'
  },
  JenisCard:{
    marginTop: 20,
    paddingLeft: 20
  },
  Jenis:{
    fontWeight: 'bold'
  },
  deskripsi:{
    marginTop: 10,
    color: '#867B7B'
  },
  cardDamage:{
    paddingLeft: 20,
    marginTop: 20
  },
  Damage:{
    marginTop: 10,
    flexDirection:  'row',
    gap: 10
  },
  Area:{
    width: 100,
    height: 35,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#2254C5',
    justifyContent: 'space-around',
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  names:{
    fontWeight: '500'
  },
  circel:{
    width: 15,
    borderRadius: 100,
    height: 15, 
    backgroundColor: '#2254C5'
  },
  buttonNext:{
    width: 320,
    height: 50,
    backgroundColor: '#2254C5',
    marginTop: 20,
    fontSize: '16',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15
  }


});
