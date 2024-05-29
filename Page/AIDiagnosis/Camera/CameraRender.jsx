import {useEffect, useState, useRef} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Camera, useCameraDevice} from 'react-native-vision-camera';

const windowWidth = Dimensions.get('window').width;

function CameraButton({onPress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.ineerCircle} />
    </TouchableOpacity>
  );
}

function CameraRender({navigation, route}) {
  const device = useCameraDevice('back');
  const camera = useRef(null);
  const [isParent, setIsParent] = useState(null);
  let {area} = route.params;

  function loadUserInfo() {
    AsyncStorage.getItem('userState', (err, result) => {
      const resultData = JSON.parse(result);
      setIsParent(resultData.isParent);
    });
  }

  const takePhoto = async () => {
    const photo = await camera.current.takePhoto({
      flash: 'off',
    });
    console.log('Photo:', photo);

    if (isParent) {
      navigation.navigate('OwnerPictureRender', {photo: photo});
    } else {
      navigation.navigate('VetPictureRender', {photo: photo, area: area});
    }
  };

  useEffect(() => {
    loadUserInfo();
  }, []);

  if (!device) {
    return (
      <View>
        <Text>Camera is null</Text>
      </View>
    );
  }

  return (
    <>
      <Camera
        style={StyleSheet.absoluteFill}
        ref={camera}
        device={device}
        photo={true}
        isActive={true}
      />
      <View style={styles.topView} />
      <View style={styles.buttonView}>
        <View style={styles.innerView}>
          <CameraButton onPress={takePhoto} />
        </View>
      </View>
    </>
  );
}

export default CameraRender;

const styles = StyleSheet.create({
  topView: {
    borderWidth: 1,
    backgroundColor: 'black',
    height: 150,
  },
  buttonView: {
    flex: 1,
    marginTop: 300,
    width: {windowWidth},
    justifyContent: 'flex-end',
  },

  innerView: {
    borderWidth: 1,
    backgroundColor: 'black',
    width: {windowWidth},
    display: 'flex',
    alignItems: 'center',
    height: 180,
  },
  button: {
    borderWidth: 2,
    borderRadius: 50,
    width: 30,
    height: 30,
    backgroundColor: 'white',
    padding: 35,
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ineerCircle: {
    width: 27,
    height: 27,
    backgroundColor: 'white',
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 1.2,
    padding: 30,
  },
});
