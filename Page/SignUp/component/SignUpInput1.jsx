import {StyleSheet, Text, TextInput, View} from 'react-native';

function SignUpInput1({placeholder, value, onChange, security, message}) {
  return (
    <View style={styles.continer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder=" "
          placeholderTextColor="transparent"
          style={styles.input}
          value={value}
          onChangeText={onChange}
          secureTextEntry={security}
          autoCapitalize="none"
          returnKeyType="done"
        />
        <View pointerEvents="none" style={styles.placeholderContainer}>
          <Text style={value == '' ? styles.placeholder : styles.transparent}>
            {placeholder}
          </Text>
        </View>
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
}

export default SignUpInput1;

const styles = StyleSheet.create({
  continer: {
    flexDirection: 'row',
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    height: 50,
    width: 300,
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
  message: {
    marginTop: -10,
    marginBottom: 10,
    marginLeft: 10,
    fontSize: 12,
  },
});
