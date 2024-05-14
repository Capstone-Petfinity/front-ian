import {useEffect, useState} from 'react';
import {StyleSheet, View, Alert, KeyboardAvoidingView} from 'react-native';

import vetSignUpFunctoin from './function/vetSignupFunction';
import DuplicateCheckVetFunction from './function/DuplicateCheckVetFunction';
import MainButton2 from '../Component/Button/MainButton2';
import SignUpInput1 from './component/SignUpInput1';
import SignUpInput4 from './component/SignUpInput4';
import DuplicateCheckButton from './component/DuplicatedCheckButton';
import SignUpInput3 from './component/SignUpInput3';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

function VetSignUp({navigation}) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [userIdMessage, setUserIdMessage] = useState(
    '* 면허번호 5자리를 입력해주세요.',
  );
  const [passwordMessage, setPasswordMessage] = useState('');

  async function onPressCheckButton() {
    const result = await DuplicateCheckVetFunction({userId});

    if (result === '200') {
      setUserIdMessage('* 사용 가능한 아이디입니다.');

      return;
    }

    setUserIdMessage('* 사용할 수 없는 아이디입니다.');
  }

  async function onPressSignUpButton() {
    const result = await vetSignUpFunctoin({userId, password, name, phone});

    if (result.statusCode === '200') {
      Alert.alert(
        '회원가입 성공',
        '로그인 창으로 이동합니다',
        [
          {
            text: '확인',
            onPress: () => {
              navigation.navigate('Login');
            },
            style: 'cancel',
          },
        ],
        {
          cancelable: true,
          onDismiss: () => {},
        },
      );
    } else {
      Alert.alert(
        '회원가입 실패',
        '회원가입에 실패하였습니다',
        [
          {
            text: '확인',
            onPress: () => {},
            style: 'destructive',
          },
        ],
        {
          cancelable: true,
          onDismiss: () => {},
        },
      );
    }
  }

  useEffect(() => {
    if (checkPassword === '') setPasswordMessage('');
    if (password !== checkPassword)
      setPasswordMessage('* 비밀번호가 일치하지 않습니다.');
    if (password === checkPassword) setPasswordMessage('');
  }, [password, checkPassword]);

  return (
    <KeyboardAwareScrollView style={styles.container} extraScrollHeight={25}>
      <View>
        <View style={styles.loginView}>
          <SignUpInput4
            placeholder="아이디를 입력하세요"
            value={userId}
            onChange={setUserId}
            security={false}
            message={userIdMessage}
          />
          <DuplicateCheckButton title="중복확인" onPress={onPressCheckButton} />
        </View>
        <SignUpInput1
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={setPassword}
          security={true}
          message="* 영문, 숫자 조합 9자 이상 작성해 주세요."
        />
        <SignUpInput1
          placeholder="비밀번호를 다시 입력하세요"
          value={checkPassword}
          onChange={setCheckPassword}
          security={true}
          message={passwordMessage}
        />
        <SignUpInput1
          placeholder="이름을 입력하세요"
          value={name}
          onChange={setName}
          security={false}
        />
        <SignUpInput3
          placeholder="휴대폰 번호를 입력하세요"
          value={phone}
          onChange={setPhone}
          security={false}
          message="* 숫자만 입력해주세요."
        />
        <View style={styles.buttonDiv}>
          <MainButton2 title="SignUp" onPress={() => onPressSignUpButton()} />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

export default VetSignUp;

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
  },
  loginView: {
    flexDirection: 'row',
  },
  buttonDiv: {
    marginBottom: 20,
    marginTop: 90,
  },
});
