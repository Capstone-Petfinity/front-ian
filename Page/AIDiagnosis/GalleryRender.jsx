import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import BackButton from '../Component/Button/BackButton';

function GalleryRender({navigation}) {
  const [photoList, setPhotoList] = useState(null);

  const getPhotos = async () => {
    try {
      const {edges} = await CameraRoll.getPhotos({
        first: 10,
      });
      console.log('📸', edges);
      setPhotoList(edges);
    } catch (error) {
      console.log('getPhoto', error);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  function PictureRender() {
    return photoList.map(photo => {
      console.log(photo.node.image.uri);
      return (
        <Image
          key={photo.node.id}
          style={styles.picture}
          source={{uri: photo.node.image.uri}}
        />
      );
    });
  }

  if (photoList) {
    return (
      <View style={styles.container}>
        <BackButton navigation={navigation} title="갤러리" />

        <PictureRender />
      </View>
    );
  }
}

export default GalleryRender;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  picture: {
    width: 70,
    height: 70,
    marginBottom: 30,
  },
});
