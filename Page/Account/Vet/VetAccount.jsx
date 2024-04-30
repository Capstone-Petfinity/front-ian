import {ScrollView, StyleSheet, Text, View} from 'react-native';
import BackButton from '../../Component/Button/BackButton';
import LogoutButton from '../../Component/Button/LogoutButton';
import Header2 from '../../Component/Header/Header2';
import UserInfo from '../../Main/Component/UserInfo';

function VetAccount({navigation}) {
  return (
    <View style={styles.container}>
      <Header2 navigation={navigation} />
      <ScrollView style={styles.scrollViewContent}>
        <BackButton navigation={navigation} />
        <View style={styles.smallContainer}>
          <UserInfo />
        </View>
      </ScrollView>
      <View style={styles.logoutButtonContainer}>
        <LogoutButton title="로그아웃" navigation={navigation} />
      </View>
    </View>
  );
}

export default VetAccount;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: 'white',
    width: 400,
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
