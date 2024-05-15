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
    <>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.leftContainer}
          onPress={checkPermission}>
          <Text style={styles.text}>카메라</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.rightContainer}
          onPress={() => navigation.navigate('GalleryRender')}>
          <Text style={styles.text}>갤러리</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Picture;

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 40,
  },
  leftContainer: {
    borderTopWidth: 0.4,
    borderLeftWidth: 0.4,
    borderBottomWidth: 0.4,
    height: 40,
    width: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    borderTopWidth: 0.4,
    borderLeftWidth: 0.4,
    borderRightWidth: 0.4,
    borderBottomWidth: 0.4,
    height: 40,
    width: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
