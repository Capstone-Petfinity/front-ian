import {StyleSheet, Text, TextInput, View} from 'react-native';

function Input({placeholder, value, onChange, security}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder=" "
        placeholderTextColor="transparent"
        style={styles.input}
        value={value}
        onChangeText={onChange}
        secureTextEntry={security}
        autoCapitalize="none"
      />
      <View pointerEvents="none" style={styles.placeholderContainer}>
        <Text style={value == '' ? styles.placeholder : styles.transparent}>
          {placeholder}
        </Text>
      </View>
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
  },
  input: {
    height: 50,
    width: 280,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 0.2,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    paddingLeft: 15,
  },
  placeholderContainer: {
    position: 'absolute',
    left: 16,
    top: 15,
  },
  placeholder: {
    color: 'black',
    fontSize: 16,
  },
  transparent: {
    color: 'transparent',
  },
});
