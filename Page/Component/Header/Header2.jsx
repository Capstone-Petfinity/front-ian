import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        <Text style={styles.title}>Petfinity</Text>
      </View>
    </>
  );
}

export default Header2;

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
  },
});
