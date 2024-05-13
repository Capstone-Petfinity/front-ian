import {useEffect, useState} from 'react';
import {View, Alert, ScrollView, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RegisterPetFunction from './function/RegisterPetFunction';
import MainButton from '../Component/Button/MainButton';
import Input from '../Component/Input/Input';
import Gender from './Gender';
import {CommonActions} from '@react-navigation/native';
import BirthInput from '../Component/Input/BirthInput';
import BackButton from '../Component/Button/BackButton';

function RegisterPet({navigation}) {
  const [name, setName] = useState(null);
  const [birth, setBirth] = useState(null);
  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);
  const [date, setDate] = useState(null);
  const [gender, setGender] = useState(null);
  const [kind, setKind] = useState(null);

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
    setName(null);
    setBirth(null);
    setGender(null);
    setKind(null);

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
                navigation.dispatch(CommonActions.navigate('OwnerAccount'));
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

  useEffect(() => {
    setBirth(year + '-' + month + '-' + date);
  }, [year, month, date]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContent}>
        <BackButton navigation={navigation} title="반려동물 등록" />
        <View style={styles.subContainer}>
          <Input
            placeholder="이름"
            value={name}
            onChange={setName}
            security={false}
          />
          <View style={styles.birthContainer}>
            <BirthInput
              placeholder="연도"
              value={year}
              onChange={setYear}
              security={false}
            />
            <Text style={styles.text}>/</Text>
            <BirthInput
              placeholder="월"
              value={month}
              onChange={setMonth}
              security={false}
            />
            <Text style={styles.text}>/</Text>
            <BirthInput
              placeholder="일"
              value={date}
              onChange={setDate}
              security={false}
            />
          </View>
          <Input
            placeholder="견종"
            value={kind}
            onChange={setKind}
            security={false}
          />
          <Gender setGender={setGender} />
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
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 34,
    marginTop: -20,
  },
  text: {
    fontSize: 18,
    marginTop: 12,
    color: 'gray',
  },
  birthContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
});
