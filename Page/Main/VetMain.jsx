import {StyleSheet, View} from 'react-native';

import Button from '../Component/Button/MainPageButton';
import Header1 from '../Component/Header/Header1';

function VetMain({navigation}) {
  return (
    <View style={styles.container}>
      <Header1 navigation={navigation} />
      <View style={styles.subContainer}>
        <Button
          text="안구 AI 진단"
          subText="카메라 이미지를 이용한 안구 질병 AI 진단"
          onPress={() => navigation.navigate('VetAIDiagnosis', {area: '안구'})}
        />
        <Button
          text="피부 AI 진단"
          subText="카메라, 현미경 이미지를 이용한 피부 질병 AI 진단"
          onPress={() => navigation.navigate('VetAIDiagnosis', {area: '피부'})}
        />
        <Button
          text="근골격계 AI 진단"
          subText="X-Ray 이미지를 이용한 근골격계 질병 AI 진단"
          onPress={() =>
            navigation.navigate('VetAIDiagnosis', {area: '근골격계'})
          }
        />
        <Button
          text="복부 AI 진단"
          subText="X-Ray 이미지를 이용한 복부 질병 AI 진단"
          onPress={() => navigation.navigate('VetAIDiagnosis', {area: '복부'})}
        />
        <Button
          text="흉부 AI 진단"
          subText="X-Ray 이미지를 이용한 흉부 질병 AI 진단"
          onPress={() => navigation.navigate('VetAIDiagnosis', {area: '흉부'})}
        />
      </View>
    </View>
  );
}

export default VetMain;

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
