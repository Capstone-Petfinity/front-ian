import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';

import {Alert, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import Gender from '../../RegisterPet/component/Gender';
import Header2 from '../../Component/Header/Header2';
import Input from '../../Component/Input/Input';
import MainButton from '../../Component/Button/MainButton';
import BirthInput from '../../Component/Input/BirthInput';

import RegisterPetFunction from '../../RegisterPet/function/RegisterPetFunction';

function RegisterPet({navigation, route}) {
  const {uuid, hospitalUuid} = route.params;
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
                navigation.dispatch(
                  CommonActions.navigate('Reservation2', {
                    uuid: uuid,
                    hospitalUuid: hospitalUuid,
                  }),
                );
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
      <Header2 navigation={navigation} />
      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.subContainer}>
          <Text style={styles.title}>반려동물 등록</Text>
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
