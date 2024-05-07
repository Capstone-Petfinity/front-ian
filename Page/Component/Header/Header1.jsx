import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import accountIcon from '../../../asset/accountwhite.png';
import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

function Header1({navigation}) {
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
        <TouchableOpacity
          style={styles.iconDiv}
          onPress={() =>
            isParent
              ? navigation.dispatch(CommonActions.navigate('OwnerAccount'))
              : navigation.dispatch(CommonActions.navigate('VetAccount'))
          }>
          <Image style={styles.icon} source={accountIcon} />
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Header1;

const styles = StyleSheet.create({
  topArea: {
    height: 60,
  },
  container: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    width: {windowWidth},
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    color: '#00835C',
    fontWeight: '800',
    fontSize: 30,
    marginLeft: 108,
    marginRight: 70,
  },
  icon: {
    width: 36,
    height: 36,
  },
});
