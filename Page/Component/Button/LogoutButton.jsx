import {StyleSheet, Alert, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LogoutFunction from '../../Account/function/LogoutFunction';
import {useEffect, useState} from 'react';

function LogoutButton({title, navigation}) {
  const [uuid, setUuid] = useState(null);
  const [isParent, setIsParent] = useState(null);

  function loadUserInfo() {
    AsyncStorage.getItem('userState', (err, result) => {
      const resultData = JSON.parse(result);
      setIsParent(resultData.isParent);
      setUuid(resultData.uuid);
    });
  }

  async function onPressLogoutnButton({navigation}) {
    Alert.alert(
      '로그아웃',
      '로그아웃 하시겠습니까?',
      [
        {
          text: '확인',
          onPress: () => {
            onClick({navigation, isParent});
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

  async function onClick({navigation}) {
    const res = await LogoutFunction({
      uuid: uuid,
      isParent: isParent,
    });

    if (res.statusCode === '200') {
      AsyncStorage.setItem(
        'userState',
        JSON.stringify({uuid: '', isParent: '', isLoggedIn: false}),
      );

      navigation.navigate('Login');

      return;
    }
  }

  useEffect(() => {
    loadUserInfo();
  }, []);

  if (isParent != null) {
    return (
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => onPressLogoutnButton({navigation})}>
        <Text style={styles.loginButtonText}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

export default LogoutButton;

const styles = StyleSheet.create({
  loginButton: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#00835C',
    backgroundColor: 'white',
    width: 300,
    height: 50,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
    borderRadius: 8,
  },
  loginButtonText: {
    color: '#00835C',
    fontWeight: '700',
    fontSize: 25,
  },
});
