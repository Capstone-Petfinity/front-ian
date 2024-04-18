import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import accountIcon from '../../../asset/account.png';
import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        <Text style={styles.title}>Petfinity</Text>
        <TouchableOpacity
          style={styles.iconDiv}
          onPress={() =>
            isParent
              ? navigation.navigate('OwnerAccount')
              : navigation.navigate('VetAccount')
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
    borderColor: '#00835C',
    backgroundColor: '#00835C',
    width: {windowWidth},
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    fontWeight: '800',
    fontSize: 27,
    marginLeft: 108,
    marginRight: 70,
  },
  icon: {
    width: 38,
    height: 38,
  },
});
