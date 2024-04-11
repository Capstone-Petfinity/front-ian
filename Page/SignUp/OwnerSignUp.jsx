import {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from 'react-native';
import addressFunction from './function/addressFunction';
import ownerSignUpFunction from './function/ownerSignUpFunction';
import CityList from './CityList';
import DuplicateCheckFunction from './function/DuplicateCheckFunction';

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

function Input3({placeholder, value, onChange, security, message}) {
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
          keyboardType="numeric"
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
    const result = await DuplicateCheckFunction({userId});

    if (result === '200') {
      setUserIdMessage('* 사용 가능한 아이디입니다.');

      return;
    }

    if (result === '403') {
      setUserIdMessage('* 중복된 아이디입니다.');
    }
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPressCheckButton}>
      <Text style={styles.text}>중복확인</Text>
    </TouchableOpacity>
  );
}

function SignUpButton({navigation, userId, password, name, phone, city}) {
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
      marginTop: 30,
      borderRadius: 8,
    },
    text: {
      color: 'white',
      fontWeight: '700',
      fontSize: 25,
    },
  });

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
            style: 'destructive',
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

  return (
    <TouchableOpacity style={styles.button} onPress={onPressSignUpButton}>
      <Text style={styles.text}>Sign Up</Text>
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
  });

  async function addresss() {
    const result = await addressFunction();

    if (result != null) setCityList(result);

    return;
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
          <Input2
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
        <Input3
          placeholder="휴대폰 번호를 입력하세요"
          value={phone}
          onChange={setPhone}
          security={false}
          message="* 숫자만 입력해주세요."
        />
        <CityList city={city} setCity={setCity} cityList={cityList} />
        <SignUpButton
          navigation={navigation}
          userId={userId}
          password={password}
          name={name}
          phone={phone}
          city={city}
        />
      </View>
    );
  }
}

export default OwnerSignUp;
