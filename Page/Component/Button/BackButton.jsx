import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function BackButton({navigation}) {
  function onPressBackButton() {
    if (navigation?.canGoBack()) {
      navigation.goBack();
      return true;
    }

    return false;
  }

  return (
    // <TouchableOpacity style={styles.container} onPress={onPressBackButton}>
    //   <Text style={styles.text}>{'<  '}뒤로가기</Text>
    // </TouchableOpacity>
    <View style={styles.container} />
  );
}

export default BackButton;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 30,
    // marginBottom: 30,
  },
  text: {
    fontSize: 16,
  },
});
