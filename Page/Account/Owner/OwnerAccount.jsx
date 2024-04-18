import {StyleSheet, View} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';
import UserInfo from '../../Main/Component/UserInfo';
import PetInfo from '../../Main/Component/PetInfo';
import OwnerHeader2 from '../../Component/Header/OwnerHeader2';
import BackButton from '../../Component/Button/BackButton';
import LogoutButton from '../../Component/Button/LogoutButton';

function OwnerAccount({navigation}) {
  return (
    <View>
      <OwnerHeader2 />
      <ScrollView style={styles.container}>
        <BackButton navigation={navigation} />
        <View style={styles.smallContainer}>
          <UserInfo />
          <PetInfo navigation={navigation} />
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
