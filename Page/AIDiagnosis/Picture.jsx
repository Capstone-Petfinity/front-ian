import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Camera} from 'react-native-vision-camera';

function Picture({navigation}) {
  const checkPermission = async () => {
    // 카메라 권한 확인
    const cameraPermission = await Camera.getCameraPermissionStatus();
    console.log('cameraPermission:', cameraPermission);
    switch (cameraPermission) {
      case 'granted':
        // 카메라 권한이 있을때 실행할 로직
        navigation.navigate('CameraRender');
        return;
      case 'not-determined':
        // 아직 권한 요청을 하지 않은 상태로 새롭게 권한 요청하기
        const newCameraPermission = await Camera.requestCameraPermission();
        if (newCameraPermission === 'granted') {
          // 카메라 권한이 있을때 실행할 로직
        } else if (newCameraPermission === 'denied') {
          // 권한 요청을 했지만 거부됐을때 실행할 로직
          // ex) 설정으로 이동, 권한이 없으면 카메라 실행할 수 없다는 알림창 등등
          await Linking.openSettings();
        }
        break;
      case 'denied':
        // 권한 요청을 했지만 거부됐을때 실행할 로직
        // ex) 설정으로 이동, 권한이 없으면 카메라 실행할 수 없다는 알림창 등등
        await Linking.openSettings();
        break;
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={checkPermission}>
      <Text style={styles.text}>사진 변경</Text>
    </TouchableOpacity>
  );
}

export default Picture;

const styles = StyleSheet.create({
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
