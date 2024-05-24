import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import BackButton from '../../Component/Button/BackButton';

function GalleryRender({navigation, route}) {
  const [photoList, setPhotoList] = useState(null);
  const [isParent, setIsParent] = useState(null);
  const {area} = route.params;

  function loadUserInfo() {
    AsyncStorage.getItem('userState', (err, result) => {
      const resultData = JSON.parse(result);
      setIsParent(resultData.isParent);
    });
  }

  async function getPhotos() {
    try {
      const {edges} = await CameraRoll.getPhotos({
        first: 50,
      });

      setPhotoList(edges);
    } catch (error) {
      console.log('getPhoto', error);
    }
  }

  function onPressImagaeButton({item}) {
    if (isParent) {
      navigation.navigate('OwnerPictureRender2', {
        photo: item.node.image,
        area: area,
      });
    } else {
      navigation.navigate('VetPictureRender2', {
        photo: item.node.image,
        area: area,
      });
    }
  }

  useEffect(() => {
    getPhotos();
    loadUserInfo();
  }, []);

  useEffect(() => {
    if (photoList) {
      photoList.map(photo => {
        // console.log(photo.node.image);
      });
    }
  }, [photoList]);

  function PictureRender() {
    return (
      <FlatList
        data={photoList}
        numColumns={3}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => onPressImagaeButton({item: item})}>
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
