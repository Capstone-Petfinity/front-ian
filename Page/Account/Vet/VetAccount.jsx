import {ScrollView, StyleSheet, Text, View} from 'react-native';
import BackButton from '../../Component/Button/BackButton';
import LogoutButton from '../../Component/Button/LogoutButton';
import Header2 from '../../Component/Header/Header2';
import UserInfo from '../../Main/Component/UserInfo';

function VetAccount({navigation}) {
  return (
    <View>
      <Header2 />
      <ScrollView style={styles.container}>
        <BackButton navigation={navigation} />
        <View style={styles.smallContainer}>
          <UserInfo />
        </View>
        <View style={styles.logoutButtonContainer}>
          <LogoutButton title="로그아웃" navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
}

export default VetAccount;

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
