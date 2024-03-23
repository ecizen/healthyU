import React from 'react';
import { View, StyleSheet, Text, Image , TouchableOpacity} from 'react-native';
import { Video, ResizeMode } from 'expo-av';

export default function VideoScreen({ route }) {
  const { exercise } = route.params;
  // Define video sources based on exercise ID
  const videosByExercise = {
    1: [require('../video/dips.mp4'),  require('../video/Pushup.mp4')],
    2: [require('../video/dips.mp4'),  require('../video/Pushup.mp4')],
    3: [require('../video/Pull up.mp4'),  require('../video/Inverted.mp4')],
    4: [require('../video/Jumping.mp4'),  require('../video/Step UP.mp4')],
    5: [require('../video/Sit.mp4'),  require('../video/Crunch.mp4')],
    // Add more exercise IDs and their corresponding videos as needed
  };

  const [videos, setVideos] = React.useState(videosByExercise[exercise.id]);
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
            <Text style={styles.titeExercise}>{exercise.name}</Text>
        </View>
        <View style={styles.JenisCard}>
            <Text style={styles.Jenis}>{exercise.name}</Text>
            <Text style={styles.deskripsi}>{exercise.deskripsi}</Text>
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
      {/* Add UI components for other details or controls */}
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
  // Add more styles as needed
});
