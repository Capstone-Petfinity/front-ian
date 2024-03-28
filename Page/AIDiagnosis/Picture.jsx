import {StyleSheet, Text, TouchableOpacity} from 'react-native';

function Picture() {
  function ChangePictureButton() {
    const styles = StyleSheet.create({
      container: {
        backgroundColor: 'white',
        borderWidth: 0.2,
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        color: 'black',
        fontSize: 15,
        fontWeight: '600',
      },
    });

    return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>사진 변경</Text>
      </TouchableOpacity>
    );
  }

  return <ChangePictureButton />;
}

export default Picture;
