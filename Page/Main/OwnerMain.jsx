import {StyleSheet, View} from 'react-native';
import OwnerHeader from '../Component/OwnerHeader';
import Button from './Button';

function OwnerMain({navigation}) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
    },
    subContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 120,
    },
  });

  return (
    <View style={styles.container}>
      <OwnerHeader navigation={navigation} />
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
      </View>
    </View>
  );
}

export default OwnerMain;
