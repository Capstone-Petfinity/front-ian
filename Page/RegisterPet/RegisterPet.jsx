import {useState} from 'react';
import {View, Alert, ScrollView} from 'react-native';
import {StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RegisterPetFunction from './function/RegisterPetFunction';
import MainButton from '../Component/Button/MainButton';
import BackButton from '../Component/Button/BackButton';
import Input from '../Component/Input/Input';
import Header2 from '../Component/Header/Header2';
import Gender from './Gender';
import {CommonActions} from '@react-navigation/native';

function RegisterPet({navigation}) {
  const [name, setName] = useState(null);
  const [birth, setBirth] = useState(null);
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

  return (
    <View style={styles.container}>
      <Header2 navigation={navigation} />
      <ScrollView style={styles.scrollViewContent}>
        <BackButton navigation={navigation} />
        <View style={styles.subContainer}>
          <Input
            placeholder="이름"
            value={name}
            onChange={setName}
            security={false}
          />

          <Input
            placeholder="생년월일"
            value={birth}
            onChange={setBirth}
            security={false}
          />
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
});
