import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

function Input({text, placeholder, value, onChange, security}) {
  const styles = StyleSheet.create({
    continer: {
      flexDirection: 'row',
    },
    inputContainer: {
      position: 'relative',
    },
    input: {
      height: 40,
      width: 200,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      borderRadius: 5,
      marginBottom: 10,
    },
    placeholderContainer: {
      position: 'absolute',
      left: 10,
      top: 10,
    },
    placeholder: {
      color: 'gray',
    },
    transparent: {
      color: 'transparent',
    },
  });

  return (
    <View style={styles.continer}>
      <Text>{text}</Text>
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
    </View>
  );
}
function OwnerSignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  return (
    <View>
      <Input
        text="이메일"
        placeholder="이메일을 입력하세요"
        value={email}
        onChange={setEmail}
        security="false"
      />
      <Input
        text="비밀번호"
        placeholder="비밀번호를 입력하세요"
        value={password}
        onChange={setPassword}
        security="true"
      />
    </View>
  );
}

export default OwnerSignUp;
