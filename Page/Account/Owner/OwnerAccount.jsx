import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import UserInfo from '../../Main/Component/UserInfo';
import PetInfo from '../../Main/Component/PetInfo';
import BackButton from '../../Component/Button/BackButton';
import LogoutButton from '../../Component/Button/LogoutButton';
import ReservationInfo from '../../Main/Component/ReservationInfo';

function OwnerAccount({navigation}) {
  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} title="계정 정보" />
      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.smallContainer}>
          <UserInfo />
          <PetInfo navigation={navigation} />
          <View style={{marginTop: 10}}>
            <ReservationInfo navigation={navigation} />
          </View>
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
