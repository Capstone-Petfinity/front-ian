import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

function Button({text, onPress}) {
  const styles = StyleSheet.create({
    container: {
      borderWidth: 0.2,
      backgroundColor: '#F8F8F8',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 140,
      width: 200,
      marginBottom: 20,
    },
    text: {
      fontSize: 22,
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

export default Button;
