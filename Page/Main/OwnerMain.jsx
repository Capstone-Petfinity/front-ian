import {ScrollView, StyleSheet, Text, View} from 'react-native';
import OwnerHeader from '../Component/OwnerHeader';
import Button from './Button';
import UserInfo from './Component/UserInfo';
import PetInfo from './Component/PetInfo';

function OwnerMain({navigation}) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
    },
    scrollViewContent: {
      flexGrow: 1,
      backgroundColor: 'white',
    },
    subContainer: {
      alignItems: 'center',
      marginTop: 30,
    },
    bottomMargin: {
      height: 30,
    },
  });

  return (
    <View style={styles.container}>
      <OwnerHeader navigation={navigation} />
      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.subContainer}>
          <Button
            text="AI 진단"
            subText="사진으로 간편하게 AI 진단을 받아보세요!"
            onPress={() => navigation.navigate('OwnerAIDiagnosis')}
          />
          <Button
            text="병원 예약"
            subText="원하는 날짜에 원하는 동물병원을 바로 예약해보세요!"
          />
          <UserInfo />
          <PetInfo />

          <View style={styles.bottomMargin} />
        </View>
      </ScrollView>
    </View>
  );
}

export default OwnerMain;
