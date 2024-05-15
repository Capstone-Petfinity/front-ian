import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {ScrollView, StyleSheet, View} from 'react-native';

import Button from '../Component/Button/MainPageButton';
import UserInfo from './Component/UserInfo';
import PetInfo from './Component/PetInfo';
import Header1 from '../Component/Header/Header1';
import NavigationBar from '../Component/Header/NavigationBar';

function OwnerMain({navigation}) {
  useEffect(() => {
    AsyncStorage.getItem('userState', (err, result) => {
      const resultData = JSON.parse(result);
      console.log(resultData.uuid);
      console.log(resultData.isParent);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Header1 navigation={navigation} />
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
            onPress={() => navigation.navigate('Reservation1')}
          />
          <Button
            text="진단 결과 조회"
            subText="AI 진단 결과를 조회하세요!"
            onPress={() => navigation.navigate('ResultList')}
          />
          <UserInfo />
          <PetInfo navigation={navigation} />

          <View style={styles.bottomMargin} />
        </View>
      </ScrollView>
    </View>
  );
}

export default OwnerMain;

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
