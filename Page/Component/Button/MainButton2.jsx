import {StyleSheet, Text, TouchableOpacity} from 'react-native';

function MainButton2({title, onPress}) {
  return (
    <TouchableOpacity style={styles.Button} onPress={onPress}>
      <Text style={styles.ButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default MainButton2;

const styles = StyleSheet.create({
  Button: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#00835C',
    backgroundColor: '#00835C',
    width: 300,
    height: 50,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 8,
  },
  ButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 25,
  },
});
