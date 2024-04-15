import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import accountIcon from '../../asset/account.png';

function OwnerHeader2({navigation}) {
  const windowWidth = Dimensions.get('window').width;

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

  return (
    <>
      <View style={styles.topArea} />
      <View style={styles.container}>
        <Text style={styles.title}>Petfinity</Text>
        {/* <TouchableOpacity
            style={styles.iconDiv}
            onPress={() => navigation.navigate('OwnerAccount')}>
            <Image style={styles.icon} source={accountIcon} />
          </TouchableOpacity> */}
      </View>
    </>
  );
}

export default OwnerHeader2;