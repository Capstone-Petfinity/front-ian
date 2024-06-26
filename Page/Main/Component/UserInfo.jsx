import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {StyleSheet, Text, View} from 'react-native';

import ParentInfoFunction from '../function/ParentInfoFunction';
import VetInfoFunction from '../function/VetInfoFunction';

function PhoneNumberRender({phone_number}) {
  if (phone_number) {
    const formattedPhoneNumber =
      phone_number.substring(0, 3) +
      '-' +
      phone_number.substring(3, 7) +
      '-' +
      phone_number.substring(7);

    return (
      <View style={styles.smallContainer}>
        <Text style={styles.title}>전화번호</Text>
        <Text style={styles.content}>{formattedPhoneNumber}</Text>
      </View>
    );
  }
}

function UserInfo() {
  const [userInfo, setUserInfo] = useState(null);

  async function LoadUserInfo() {
    AsyncStorage.getItem('userState', async (err, result) => {
      const resultData = JSON.parse(result);

      if (resultData.isParent) {
        const res = await ParentInfoFunction({uuid: resultData.uuid});
        if (res.statusCode === '200') setUserInfo(res);
      } else {
        const res = await VetInfoFunction({uuid: resultData.uuid});
        if (res.statusCode === '200') setUserInfo(res);
      }
    });

    return;
  }

  useEffect(() => {
    LoadUserInfo();
  }, []);

  if (userInfo) {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>계정 정보</Text>
        </View>
        <View style={styles.smallContainer}>
          <Text style={styles.title}>이름</Text>
          <Text style={styles.content}>{userInfo.name}</Text>
        </View>
        <PhoneNumberRender phone_number={userInfo.phone_number} />
        {userInfo.city ? (
          <View style={styles.smallContainer}>
            <Text style={styles.title}>거주지</Text>
            <Text style={styles.content}>{userInfo.city}</Text>
          </View>
        ) : null}
      </View>
    );
  }
}

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.2,
    borderRadius: 8,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 170,
    width: 340,
    marginBottom: 20,
  },
  smallContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 200,
    marginBottom: 8,
  },
  textContainer: {
    width: 300,
    marginBottom: 5,
  },
  text: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: '800',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    width: 60,
    marginLeft: -45,
  },
  content: {
    fontSize: 15,
    marginLeft: 30,
    width: 200,
  },
});
