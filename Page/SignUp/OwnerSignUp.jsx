import {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import addressFunction from './function/addressFunction';
import ownerSignUpFunction from './function/ownerSignUpFunction';
import CityList from './CityList';

function Input1({placeholder, value, onChange, security}) {
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
      backgroundColor: '#F8F8F8',
      borderWidth: 0.2,
      paddingHorizontal: 10,
      marginBottom: 15,
    },
    placeholderContainer: {
      position: 'absolute',
      left: 10,
      top: 15,
    },
    placeholder: {
      color: 'black',
    },
    transparent: {
      color: 'transparent',
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
      </View>
    </View>
  );
}

function Input2({placeholder, value, onChange, security}) {
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
      backgroundColor: '#F8F8F8',
      borderWidth: 0.2,
      paddingHorizontal: 10,
      marginBottom: 15,
      marginRight: 10,
    },
    placeholderContainer: {
      position: 'absolute',
      left: 10,
      top: 15,
    },
    placeholder: {
      color: 'black',
    },
    transparent: {
      color: 'transparent',
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
      </View>
    </View>
  );
}

function DuplicatedCheckButton() {
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
    },
    text: {
      color: 'white',
      fontWeight: '600',
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
      marginTop: 30,
      borderRadius: 5,
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

function OwnerSignUp({navigation}) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');

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

  async function onPressSignUpButton() {
    const result = await ownerSignUpFunction({
      userId,
      password,
      name,
      phone,
      city,
    });

    if (result === '200') {
      navigation.navigate('Login');
    }
  }

  useEffect(() => {
    addresss();
  }, []);

  if (cityList) {
    return (
      <View>
        <View style={styles.loginView}>
          <Input2
            placeholder="아이디를 입력하세요"
            value={userId}
            onChange={setUserId}
            security={false}
          />
          <DuplicatedCheckButton />
        </View>
        <Input1
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={setPassword}
          security={true}
        />

        <Input1
          placeholder="이름을 입력하세요"
          value={name}
          onChange={setName}
          security={false}
        />
        <Input1
          placeholder="휴대폰 번호를 입력하세요"
          value={phone}
          onChange={setPhone}
          security={false}
        />
        <CityList cityList={cityList} />
        <SignUpButton onPress={onPressSignUpButton} />
      </View>
    );
  }
}

export default OwnerSignUp;
