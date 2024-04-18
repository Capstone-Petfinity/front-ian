import {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import {StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RegisterPetFunction from './function/RegisterPetFunction';
import OwnerHeader2 from '../Component/OwnerHeader2';
import MainButton from '../Component/MainButton';

function Input({text, value, onChange, security}) {
  const inputStyles = StyleSheet.create({
    inputContainer: {
      position: 'relative',
    },
    input: {
      height: 50,
      width: 280,
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

function RegisterPet({navigation}) {
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [gender, setGender] = useState('');
  const [kind, setKind] = useState('');

  async function onPressRegisterButton() {
    Alert.alert(
      '등록',
      '반려동물을 등록하시겠습니까?',
      [
        {text: '취소', onPress: () => {}, style: 'cancel'},
        {
          text: '등록',
          onPress: () => {
            onPressAlertRegister();
          },
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {},
      },
    );
  }

  function setNull() {
    setName('');
    setBirth('');
    setGender('');
    setKind('');

    return;
  }

  async function onPressAlertRegister() {
    AsyncStorage.getItem('userState', async (err, result) => {
      const resultData = JSON.parse(result);
      const res = await RegisterPetFunction({
        uuid: resultData.uuid,
        name,
        birth,
        kind,
        gender,
      });

      if (res.statusCode === '200') {
        Alert.alert(
          '등록 성공',
          '반려동물 등록을 완료하였습니다.',
          [
            {
              text: '확인',
              onPress: () => {
                setNull();
                navigation.navigate('OwnerAccount');
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
          '등록 실패',
          '반려동물 등록을 완료하지 못했습니다.',
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
    });
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
    },
    scrollViewContent: {
      flexGrow: 1,
      backgroundColor: 'white',
    },
    subContainer: {
      alignItems: 'center',
      marginTop: 30,
    },
    buttonDiv: {
      marginBottom: 20,
      marginTop: 30,
    },
  });

  return (
    <View style={styles.container}>
      <OwnerHeader2 />
      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.subContainer}>
          <Input text="이름" value={name} onChange={setName} security={false} />
          <Input
            text="생년월일"
            value={birth}
            onChange={setBirth}
            security={false}
          />
          <Input text="견종" value={kind} onChange={setKind} security={false} />
          <Input
            text="성별"
            value={gender}
            onChange={setGender}
            security={false}
          />
          <View style={styles.buttonDiv}>
            <MainButton
              title="반려동물 등록하기"
              onPress={() => onPressRegisterButton()}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default RegisterPet;
