import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BackButton from '../Component/Button/BackButton';

function GalleryRender({navigation}) {
  const [photoList, setPhotoList] = useState(null);

  const getPhotos = async () => {
    try {
      const {edges} = await CameraRoll.getPhotos({
        first: 50,
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
    return (
      <FlatList
        data={photoList}
        numColumns={3}
        renderItem={({item}) => (
          <Image
            style={{
              width: '33%',
              height: 150,
            }}
            source={{uri: item.node.image.uri}}
          />
        )}
      />
    );
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
