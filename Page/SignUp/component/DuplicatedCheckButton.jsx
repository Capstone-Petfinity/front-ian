import {StyleSheet, Text, TouchableOpacity} from 'react-native';

function DuplicateCheckButton({title, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default DuplicateCheckButton;

const styles = StyleSheet.create({
  container: {
    borderColor: '#00835C',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#00835C',
    width: 80,
    height: 50,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: '800',
    fontSize: 15,
  },
});
