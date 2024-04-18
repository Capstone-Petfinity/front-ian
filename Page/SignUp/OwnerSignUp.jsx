import {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import addressFunction from './function/addressFunction';
import ownerSignUpFunction from './function/ownerSignUpFunction';
import CityList from './CityList';
import DuplicateCheckParentFunction from './function/DuplicateCheckParentFunction';
import SignUpInput1 from '../Component/Input/SignUpInput1';
import SignUpInput2 from '../Component/Input/SignUpInput2';
import SignUpInput3 from '../Component/Input/SignUpInput3';
import MainButton2 from '../Component/Button/MainButton2';

function DuplicatedCheckButton({userId, setUserIdMessage}) {
  const styles = StyleSheet.create({
    container: {
      borderColor: '#00835C',
      borderWidth: 1,
      backgroundColor: '#00835C',
      width: 80,
      height: 50,
      justifyContent: 'center',
      display: 'flex',
      alignItems: 'center',
      borderRadius: 8,
    },
    text: {
      color: 'white',
      fontWeight: '800',
      fontSize: 15,
    },
  });

  async function onPressCheckButton() {
    const result = await DuplicateCheckParentFunction({userId});

    if (result === '200') {
      setUserIdMessage('* 사용 가능한 아이디입니다.');

      return;
    }

    setUserIdMessage('* 사용할 수 없는 아이디입니다.');
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPressCheckButton}>
      <Text style={styles.text}>중복확인</Text>
    </TouchableOpacity>
  );
}

function OwnerSignUp({navigation}) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [userIdMessage, setUserIdMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');

  const [cityList, setCityList] = useState(null);

  const styles = StyleSheet.create({
    loginView: {
      flexDirection: 'row',
    },
    buttonDiv: {
      marginBottom: 20,
      marginTop: 30,
    },
  });

  async function addresss() {
    const result = await addressFunction();

    if (result != null) setCityList(result);

    return;
  }

  async function onPressSignUpButton() {
    const result = await ownerSignUpFunction({
      userId,
      password,
      name,
      phone,
      city,
    });

    if (result.statusCode === '200') {
      Alert.alert(
        result.statusCode,
        result.message,
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
        result.statusCode,
        result.message,
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
    addresss();
  }, []);

  useEffect(() => {
    if (checkPassword === '') setPasswordMessage('');
    if (password !== checkPassword)
      setPasswordMessage('* 비밀번호가 일치하지 않습니다.');
    if (password === checkPassword) setPasswordMessage('');
  }, [password, checkPassword]);

  if (cityList) {
    return (
      <View>
        <View style={styles.loginView}>
          <SignUpInput2
            placeholder="아이디를 입력하세요"
            value={userId}
            onChange={setUserId}
            security={false}
            message={userIdMessage}
          />
          <DuplicatedCheckButton
            userId={userId}
            setUserIdMessage={setUserIdMessage}
          />
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
        <CityList city={city} setCity={setCity} cityList={cityList} />
        <View style={styles.buttonDiv}>
          <MainButton2 title="SignUp" onPress={() => onPressSignUpButton()} />
        </View>
      </View>
    );
  }
}

export default OwnerSignUp;
