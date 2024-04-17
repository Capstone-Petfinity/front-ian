import AsyncStorage from '@react-native-async-storage/async-storage';

import {Alert, StyleSheet, Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import UserInfo from '../../Main/Component/UserInfo';
import PetInfo from '../../Main/Component/PetInfo';
import OwnerHeader2 from '../../Component/OwnerHeader2';
import RegisterPetButton from '../component/RegisterPetButton';
import LogoutFunction from '../function/LogoutFunction';
import {useEffect, useState} from 'react';

function BackButton({navigation}) {
  const styles = StyleSheet.create({
    container: {
      marginTop: 30,
      marginLeft: 30,
      marginBottom: 30,
    },
    text: {
      fontSize: 16,
    },
  });

  function onPressBackButton() {
    if (navigation?.canGoBack()) {
      navigation.goBack();
      return true;
    }

    return false;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPressBackButton}>
      <Text style={styles.text}>{'<  '}뒤로가기</Text>
    </TouchableOpacity>
  );
}

function LogoutButton({navigation, title}) {
  const [uuid, setUuid] = useState('');
  const [isParent, setIsParent] = useState();

  const styles = StyleSheet.create({
    loginButton: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#00835C',
      backgroundColor: 'white',
      width: 280,
      height: 50,
      justifyContent: 'center',
      display: 'flex',
      alignItems: 'center',
      marginBottom: 30,
      marginTop: 30,
      borderRadius: 8,
    },
    loginButtonText: {
      color: '#00835C',
      fontWeight: '700',
      fontSize: 25,
    },
  });

  async function onPressLogoutnButton() {
    Alert.alert(
      '로그아웃',
      '로그아웃 하시겠습니까?',
      [
        {
          text: '확인',
          onPress: () => {
            onClick();
          },
          style: 'cancel',
        },
        {text: '취소', onPress: () => {}, style: 'destructive'},
      ],

      {
        cancelable: true,
        onDismiss: () => {},
      },
    );
  }

  async function onClick() {
    AsyncStorage.getItem('userState', async (err, result) => {
      const resultData = JSON.parse(result);

      const res = await LogoutFunction({
        uuid: resultData.uuid,
        isParent: resultData.isParent,
      });

      if (res.statusCode === '200') {
        AsyncStorage.setItem(
          'userState',
          JSON.stringify({uuid: '', isParent: false, isLoggedIn: false}),
        );

        navigation.navigate('Login');

        return;
      }
    });
  }
  return (
    <TouchableOpacity style={styles.loginButton} onPress={onPressLogoutnButton}>
      <Text style={styles.loginButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

function OwnerAccount({navigation}) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
    },
    smallContainer: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white',
    },
    logoutButtonContainer: {
      alignItems: 'center',
      backgroundColor: 'white',
      height: 150,
      marginBottom: 30,
    },
  });

  return (
    <View>
      <OwnerHeader2 />
      <ScrollView style={styles.container}>
        <BackButton navigation={navigation} />

        <View style={styles.smallContainer}>
          <UserInfo />
          <PetInfo navigation={navigation} />
        </View>
        <View style={styles.logoutButtonContainer}>
          <LogoutButton navigation={navigation} title="로그아웃" />
        </View>
      </ScrollView>
    </View>
  );
}

export default OwnerAccount;
