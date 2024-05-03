import {StyleSheet, Text, View} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

function CameraRender() {
  const devices = useCameraDevices();
  const device = devices.back;

  if (device) {
    return (
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        photo={true}
        video={false}
        audio={false} // 선택사항
        isActive={true}
      />
    );
  } else {
    return (
      <View>
        <Text>Camera is null</Text>
      </View>
    );
  }
}

export default CameraRender;
