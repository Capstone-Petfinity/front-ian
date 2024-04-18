import {StyleSheet, Text, TouchableOpacity} from 'react-native';

function BackButton({navigation}) {
  const styles = StyleSheet.create({
    container: {
      marginTop: 30,
      marginLeft: 30,
      marginBottom: 30,
    },
    text: {
      fontSize: 16,
    },
  });

  function onPressBackButton() {
    if (navigation?.canGoBack()) {
      navigation.goBack();
      return true;
    }

    return false;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPressBackButton}>
      <Text style={styles.text}>{'<  '}뒤로가기</Text>
    </TouchableOpacity>
  );
}

export default BackButton;
