import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
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
          <TouchableOpacity
            style={styles.touchable}
            onPress={() =>
              navigation.navigate('PictureRender2', {
                photo: item.node.image.uri,
              })
            }>
            <Image
              style={{
                height: 140,
              }}
              source={{uri: item.node.image.uri}}
            />
          </TouchableOpacity>
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
  touchable: {
    width: '34%',
    height: 140,
  },
  picture: {
    width: 70,
    height: 70,
    marginBottom: 30,
  },
});
