import {ScrollView, StyleSheet, Text, View} from 'react-native';
import BackButton from '../../Component/Button/BackButton';
import LogoutButton from '../../Component/Button/LogoutButton';
import UserInfo from '../../Main/Component/UserInfo';

function VetAccount({navigation}) {
  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} title="계정 정보" />
      <ScrollView style={styles.scrollViewContent}>
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
