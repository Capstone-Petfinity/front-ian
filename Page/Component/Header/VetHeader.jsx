import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import accountIcon from '../../../asset/account.png';

const windowWidth = Dimensions.get('window').width;

function VetHeader({navigation}) {
  return (
    <>
      <View style={styles.topArea} />
      <View style={styles.container}>
        <Text style={styles.title}>Petfinity</Text>
        <TouchableOpacity
          style={styles.iconDiv}
          onPress={() => navigation.navigate('VetAccount')}>
          <Image style={styles.icon} source={accountIcon} />
        </TouchableOpacity>
      </View>
    </>
  );
}

export default VetHeader;

const styles = StyleSheet.create({
  topArea: {
    height: 70,
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
