import {StyleSheet, View} from 'react-native';
import VetHeader from '../Component/VetHeader';
import Button from './Button';

function VetMain({navigation}) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
    },
    subContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
    },
  });

  return (
    <View style={styles.container}>
      <VetHeader navigation={navigation} />
      <View style={styles.subContainer}>
        <Button
          text="안구 AI 진단"
          subText="카메라 이미지를 이용한 AI 진단"
          onPress={() => navigation.navigate('VetAIDiagnosis')}
        />
        <Button
          text="피부 AI 진단"
          subText="카메라, 현미경 이미지를 이용한 AI 진단"
          onPress={() => navigation.navigate('VetAIDiagnosis')}
        />
        <Button
          text="근골격계 AI 진단"
          subText="X-Ray 이미지를 이용한 AI 진단"
          onPress={() => navigation.navigate('VetAIDiagnosis')}
        />
        <Button
          text="복부 AI 진단"
          subText="X-Ray 이미지를 이용한 AI 진단"
          onPress={() => navigation.navigate('VetAIDiagnosis')}
        />
        <Button
          text="흉부 AI 진단"
          subText="X-Ray 이미지를 이용한 AI 진단"
          onPress={() => navigation.navigate('VetAIDiagnosis')}
        />
      </View>
    </View>
  );
}

export default VetMain;
