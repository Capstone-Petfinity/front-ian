import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

function BackButton({navigation, title}) {
  function onPressBackButton() {
    if (navigation?.canGoBack()) {
      navigation.goBack();
      return true;
    }

    return false;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressBackButton}>
        <Text style={styles.text}>{'<'}</Text>
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.text}></Text>
    </View>
  );
}

export default BackButton;

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    marginBottom: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 50,
    width: {windowWidth},
  },
  titleContainer: {
    width: 120,
    // borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  text: {
    fontSize: 25,
    width: 50,
    fontWeight: '500',
    // marginBottom: 10,
  },
});
