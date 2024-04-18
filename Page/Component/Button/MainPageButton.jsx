import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

function MainPageButton({text, subText, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.subContainer}>
        <View>
          <Text style={styles.text}>{text}</Text>
        </View>
        <Text style={styles.subText}>{subText}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default MainPageButton;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.2,
    borderRadius: 8,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 340,
    marginBottom: 20,
  },
  subContainer: {
    width: 300,
  },
  text: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: '800',
  },
  subText: {
    fontSize: 14,
    color: 'gray',
    fontWeight: '700',
  },
});
