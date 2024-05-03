import {useRef} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Camera, useCameraDevice} from 'react-native-vision-camera';

function CameraRender() {
  const device = useCameraDevice('back');
  const camera = useRef(null);

  const takePhoto = async () => {
    const photo = await camera.current.takePhoto({
      flash: 'off',
    });
    console.log('Photo:', photo);
  };

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
      <Button title="take photo" onPress={takePhoto} />
    </>
  );
}

export default CameraRender;
