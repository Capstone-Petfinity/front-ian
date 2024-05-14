import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

function Header2({navigation}) {
  const [isParent, setIsParent] = useState(null);

  function loadUserInfo() {
    AsyncStorage.getItem('userState', (err, result) => {
      const resultData = JSON.parse(result);
      setIsParent(resultData.isParent);
    });
  }

  useEffect(() => {
    loadUserInfo();
  }, []);

  return (
    <>
      <View style={styles.topArea} />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>
            isParent
              ? navigation.dispatch(CommonActions.navigate('OwnerMain'))
              : navigation.dispatch(CommonActions.navigate('VetMain'))
          }>
          <Text style={styles.title}>Petfinity</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Header2;

const styles = StyleSheet.create({
  topArea: {
    height: 60,
    backgroundColor: 'white',
  },
  container: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    width: {windowWidth},
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    color: '#00835C',
    fontWeight: '800',
    fontSize: 27,
  },
});
