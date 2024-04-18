import {StyleSheet, Text, View} from 'react-native';
import BackButton from '../../Component/Button/BackButton';
import LogoutButton from '../../Component/Button/LogoutButton';

function VetAccount({navigation}) {
  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      <View style={styles.smallContainer}>
        <Text>vet account</Text>
      </View>
      <View style={styles.logoutButtonContainer}>
        <LogoutButton title="로그아웃" navigation={navigation} />
      </View>
    </View>
  );
}

export default VetAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  smallContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logoutButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 150,
  },
});
