import {StyleSheet, View} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';
import UserInfo from '../../Main/Component/UserInfo';
import PetInfo from '../../Main/Component/PetInfo';
import BackButton from '../../Component/Button/BackButton';
import LogoutButton from '../../Component/Button/LogoutButton';
import Header2 from '../../Component/Header/Header2';
import ReservationInfo from '../../Main/Component/ReservationInfo';

function OwnerAccount({navigation}) {
  return (
    <View style={styles.container}>
      <Header2 navigation={navigation} />
      <ScrollView style={styles.scrollViewContent}>
        <BackButton navigation={navigation} />
        <View style={styles.smallContainer}>
          <UserInfo />
          <PetInfo navigation={navigation} />
          <ReservationInfo navigation={navigation} />
        </View>
        <View style={styles.logoutButtonContainer}>
          <LogoutButton title="로그아웃" navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
}

export default OwnerAccount;

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
