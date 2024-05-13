import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Camera} from 'react-native-vision-camera';

function Picture({navigation}) {
  const checkPermission = async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus();
    switch (cameraPermission) {
      case 'granted':
        navigation.navigate('CameraRender');
        return;

      case 'not-determined':
        const newCameraPermission = await Camera.requestCameraPermission();
        if (newCameraPermission === 'granted')
          navigation.navigate('CameraRender');
        else if (newCameraPermission === 'denied') await Linking.openSettings();

        return;

      case 'denied':
        await Linking.openSettings();
        return;
    }
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.container} onPress={checkPermission}>
        <Text style={styles.text}>사진 찍기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate('GalleryRender')}>
        <Text style={styles.text}>갤러리</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Picture;

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  container: {
    backgroundColor: 'white',
    borderWidth: 0.2,
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  text: {
    color: 'black',
    fontSize: 15,
    fontWeight: '600',
  },
});
