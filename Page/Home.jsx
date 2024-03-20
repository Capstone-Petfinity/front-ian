import {useState} from 'react';

import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';

import * as React from 'react';

function Input({text, value, onChange, security}) {
  const inputStyles = StyleSheet.create({
    inputContainer: {
      position: 'relative',
    },
    input: {
      height: 40,
      width: 230,
      maxWidth: 500,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      borderRadius: 5,
      marginBottom: 10,
    },
    placeholderContainer: {
      position: 'absolute',
      left: 10,
      top: '50%',
      transform: [{translateY: -12}],
    },
    placeholder: {
      color: 'gray',
      fontSize: 12,
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

function LoginButton({title, onPress}) {
  const styles = StyleSheet.create({
    loginButton: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'green',
      backgroundColor: 'green',
      width: 230,
      height: 40,
      justifyContent: 'center',
      display: 'flex',
      alignItems: 'center',
      marginBottom: 20,
      marginTop: 30,
      borderRadius: 5,
    },
    loginButtonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 20,
    },
  });

  return (
    <TouchableOpacity style={styles.loginButton} onPress={onPress}>
      <Text style={styles.loginButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

function SignUpButton({title, onPress}) {
  const styles = StyleSheet.create({
    signupButton: {
      borderStyle: 'solid',
      justifyContent: 'center',
      fontSize: 12,
      borderBottomWidth: 0.5,
    },
  });

  return (
    <TouchableOpacity style={styles.signupButton} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

function HomeScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -60,
      backgroundColor: 'white',
    },
    title: {
      fontSize: 30,
      fontWeight: '900',
      color: 'green',
      marginBottom: 5,
    },
    subTitle: {
      fontSize: 12,
      fontWeight: '700',
      color: 'green',
      marginBottom: 70,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PetPinity</Text>
      <Text style={styles.subTitle}>반려동물을 위한 끝없는 연결</Text>

      <Input
        text="이메일을 입력하세요"
        value={email}
        onChange={setEmail}
        security={false}
      />
      <Input
        text="비밀번호를 입력하세요"
        value={password}
        onChange={setPassword}
        security={true}
      />

      <LoginButton title="Login" onPress={() => navigation.navigate('Login')} />

      <SignUpButton
        title="회원이 아니신가요?"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
}

export default HomeScreen;
