import {useState, useEffect} from 'react';

import {Text, View, TextInput, TouchableOpacity, Button} from 'react-native';
import {StyleSheet} from 'react-native';

import * as React from 'react';
import LoginFunction from './function/LoginFunction';

function Input({text, value, onChange, security}) {
  const inputStyles = StyleSheet.create({
    inputContainer: {
      position: 'relative',
    },
    input: {
      height: 50,
      width: 280,
      maxWidth: 500,
      borderColor: 'black',
      backgroundColor: 'white',
      borderWidth: 0.2,
      paddingHorizontal: 10,
      borderRadius: 8,
      marginBottom: 10,
    },
    placeholderContainer: {
      position: 'absolute',
      left: 16,
      top: 15,
    },
    placeholder: {
      color: 'black',
      fontSize: 15,
    },
    transparent: {
      color: 'transparent',
    },
  });

  return (
    <View style={inputStyles.inputContainer}>
      <TextInput
        placeholder=" "
        placeholderTextColor="transparent"
        style={inputStyles.input}
        value={value}
        onChangeText={onChange}
        secureTextEntry={security}
        autoCapitalize="none"
      />
      <View pointerEvents="none" style={inputStyles.placeholderContainer}>
        <Text
          style={
            value == '' ? inputStyles.placeholder : inputStyles.transparent
          }>
          {text}
        </Text>
      </View>
    </View>
  );
}

function LoginButton({navigation, title, userId, password}) {
  const styles = StyleSheet.create({
    loginButton: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#00835C',
      backgroundColor: '#00835C',
      width: 280,
      height: 50,
      justifyContent: 'center',
      display: 'flex',
      alignItems: 'center',
      marginBottom: 20,
      marginTop: 30,
      borderRadius: 8,
    },
    loginButtonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 25,
    },
  });

  async function onPressLoginButton() {
    const result = await LoginFunction({userId, password});
    navigation.navigate('OwnerMain');
  }

  return (
    <TouchableOpacity style={styles.loginButton} onPress={onPressLoginButton}>
      <Text style={styles.loginButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

function SignUpButton({title, onPress}) {
  const styles = StyleSheet.create({
    signupButton: {
      borderStyle: 'solid',
      justifyContent: 'center',
      fontSize: 11,
      borderBottomWidth: 0.5,
    },
  });

  return (
    <TouchableOpacity style={styles.signupButton} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

function LoginScreen({navigation}) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    title: {
      fontSize: 40,
      fontWeight: '900',
      color: '#00835C',
      marginBottom: 5,
    },
    subTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: '#00835C',
      marginBottom: 70,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PetPinity</Text>
      <Text style={styles.subTitle}>반려동물을 위한 끝없는 연결</Text>

      <Input
        text="아이디를 입력하세요"
        value={userId}
        onChange={setUserId}
        security={false}
      />
      <Input
        text="비밀번호를 입력하세요"
        value={password}
        onChange={setPassword}
        security={true}
      />

      <LoginButton
        navigation={navigation}
        title="Login"
        userId={userId}
        password={password}
      />

      <SignUpButton
        title="회원이 아니신가요?"
        onPress={() => navigation.navigate('SignUp')}
      />

      <Button title="hey" onPress={() => navigation.navigate('VetMain')} />
    </View>
  );
}

export default LoginScreen;
