import * as React from 'react';
import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import {StyleSheet} from 'react-native';

import LoginFunction from './function/LoginFunction';
import MainButton from '../Component/Button/MainButton';
import Input from '../Component/Input/Input';

import logo from '../../asset/capstone_logo.png';

async function onPressLoginButton({
  navigation,
  userId,
  password,
  setUserId,
  setPassword,
}) {
  if (userId == null || password == null) {
    Alert.alert(
      '로그인 실패',
      '아이디/비밀번호를 입력해주세요.',
      [{text: '확인', onPress: () => {}, style: 'cancel'}],
      {
        cancelable: true,
        onDismiss: () => {},
      },
    );

    return;
  }

  const result = await LoginFunction({userId, password});

  if (result.statusCode === '200') {
    setUserId(null);
    setPassword(null);

    AsyncStorage.setItem(
      'userState',
      JSON.stringify({
        uuid: result.uuid,
        isParent: result.isParent,
        isLoggedIn: true,
      }),
    );

    if (result.isParent) {
      navigation.navigate('OwnerMain');
      return;
    }
    if (!result.isParent) {
      navigation.navigate('VetMain');
      return;
    }

    return;
  }

  if (result.statusCode === '404' || result.statusCode === '405') {
    Alert.alert(
      '로그인 실패',
      '아이디/비밀번호가 일치하지 않습니다.',
      [{text: '확인', onPress: () => {}, style: 'cancel'}],
      {
        cancelable: true,
        onDismiss: () => {},
      },
    );

    return;
  }

  if (result.statusCode === '406') {
    Alert.alert(
      '로그인 실패',
      '이미 로그인 된 계정입니다.',
      [{text: '확인', onPress: () => {}, style: 'cancel'}],
      {
        cancelable: true,
        onDismiss: () => {},
      },
    );

    return;
  }
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

function Login({navigation}) {
  const [userId, setUserId] = useState(null);
  const [password, setPassword] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('userState', async (err, result) => {
      const resultData = JSON.parse(result);
      if (resultData.isLoggedIn) {
        if (resultData.isParent) {
          navigation.navigate('OwnerMain');
        } else {
          navigation.navigate('VetMain');
        }
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.keyboardView} behavior={'padding'}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Petfinity</Text>
        <Text style={styles.subTitle}>반려동물을 위한 끝없는 연결</Text>
        <Input
          placeholder="아이디를 입력하세요"
          value={userId}
          onChange={setUserId}
          security={false}
        />
        <Input
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={setPassword}
          security={true}
        />
        <View style={styles.buttonDiv}>
          <MainButton
            title="Login"
            onPress={() =>
              onPressLoginButton({
                navigation,
                userId,
                password,
                setUserId,
                setPassword,
              })
            }
          />
        </View>

        <SignUpButton
          title="회원이 아니신가요?"
          onPress={() => navigation.navigate('SignUp')}
        />
      </KeyboardAvoidingView>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  keyboardView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 100,
    width: 100,
    marginBottom: 30,
    marginTop: -60,
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
    marginBottom: 40,
  },
  buttonDiv: {
    marginTop: 30,
    marginBottom: 20,
  },
});
