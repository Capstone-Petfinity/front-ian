import {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';

import vetSignUpFunctoin from './function/vetSignupFunction';

function Input1({placeholder, value, onChange, security, message}) {
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

function Input2({placeholder, value, onChange, security, message}) {
  const styles = StyleSheet.create({
    continer: {
      flexDirection: 'row',
    },
    inputContainer: {
      position: 'relative',
    },
    input: {
      height: 50,
      width: 210,
      borderColor: 'black',
      backgroundColor: 'white',
      borderWidth: 0.2,
      borderRadius: 8,
      paddingHorizontal: 10,
      marginBottom: 15,
      marginRight: 10,
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
          keyboardType="numeric"
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

function DuplicatedCheckButton() {
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
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>중복확인</Text>
    </TouchableOpacity>
  );
}

function SignUpButton({onPress}) {
  const styles = StyleSheet.create({
    button: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#00835C',
      backgroundColor: '#00835C',
      width: 300,
      height: 50,
      justifyContent: 'center',
      display: 'flex',
      alignItems: 'center',
      marginBottom: 20,
      marginTop: 160,
      borderRadius: 8,
    },
    text: {
      color: 'white',
      fontWeight: '700',
      fontSize: 25,
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Sign Up</Text>
    </TouchableOpacity>
  );
}

function VetSignUp() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [name, setName] = useState('');
  const [userIdMessage, setUserIdMessage] = useState(
    '* 면허번호 5자리를 입력해주세요.',
  );
  const [passwordMessage, setPasswordMessage] = useState('');

  const styles = StyleSheet.create({
    loginView: {
      flexDirection: 'row',
    },
  });

  async function onPressSignUpButton() {
    const result = await vetSignUpFunctoin({userId, password, name});
  }

  useEffect(() => {
    if (checkPassword === '') setPasswordMessage('');
    if (password !== checkPassword)
      setPasswordMessage('* 비밀번호가 일치하지 않습니다.');
    if (password === checkPassword) setPasswordMessage('');
  }, [password, checkPassword]);

  return (
    <View>
      <View style={styles.loginView}>
        <Input2
          placeholder="아이디를 입력하세요"
          value={userId}
          onChange={setUserId}
          security={false}
          message={userIdMessage}
        />
        <DuplicatedCheckButton />
      </View>
      <Input1
        placeholder="비밀번호를 입력하세요"
        value={password}
        onChange={setPassword}
        security={true}
        message="* 영문, 숫자 조합 9자 이상 작성해 주세요."
      />
      <Input1
        placeholder="비밀번호를 다시 입력하세요"
        value={checkPassword}
        onChange={setCheckPassword}
        security={true}
        message={passwordMessage}
      />
      <Input1
        placeholder="이름을 입력하세요"
        value={name}
        onChange={setName}
        security={false}
      />
      <SignUpButton onPress={onPressSignUpButton} />
    </View>
  );
}

export default VetSignUp;
