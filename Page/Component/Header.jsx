import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import accountIcon from '../../asset/account.png';

function Header({navigation}) {
  const styles = StyleSheet.create({
    topArea: {
      height: 70,
    },
    container: {
      borderWidth: 1,
      borderColor: '#00835C',
      backgroundColor: '#00835C',
      width: 400,
      height: 60,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      color: 'white',
      fontWeight: '800',
      fontSize: 27,
    },
    iconDiv: {
      position: 'absolute',
      top: 10,
      right: 30,
    },
    icon: {
      width: 38,
      height: 38,
    },
  });

  return (
    <>
      <View style={styles.topArea} />
      <View style={styles.container}>
        <Text style={styles.title}>Petfinity</Text>
        <TouchableOpacity
          style={styles.iconDiv}
          onPress={() => navigation.navigate('Account')}>
          <Image style={styles.icon} source={accountIcon} />
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Header;
