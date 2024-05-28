import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import Button from '../Component/Button/MainPageButton';
import Header1 from '../Component/Header/Header1';

function VetMain({navigation}) {
  return (
    <View style={styles.container}>
      <Header1 navigation={navigation} />
      <ScrollView>
        <View style={styles.subContainer}>
          <Button
            text="안구 AI 진단"
            subText="카메라 이미지를 이용한 안구 질병 AI 진단"
            onPress={() => navigation.navigate('VetAIDiagnosis', {area: 'eye'})}
          />
          <Button
            text="피부 AI 진단"
            subText="카메라, 현미경 이미지를 이용한 피부 질병 AI 진단"
            onPress={() =>
              navigation.navigate('VetAIDiagnosis', {area: 'skin'})
            }
          />
          <Button
            text="근골격계 AI 진단"
            subText="X-Ray 이미지를 이용한 근골격계 질병 AI 진단"
            onPress={() =>
              navigation.navigate('VetAIDiagnosis', {area: 'skeletal'})
            }
          />
          <Button
            text="복부 AI 진단"
            subText="X-Ray 이미지를 이용한 복부 질병 AI 진단"
            onPress={() =>
              navigation.navigate('VetAIDiagnosis', {area: 'stomach'})
            }
          />
          <Button
            text="흉부 AI 진단"
            subText="X-Ray 이미지를 이용한 흉부 질병 AI 진단"
            onPress={() =>
              navigation.navigate('VetAIDiagnosis', {area: 'chest'})
            }
          />
          <Button
            text="진단 결과 조회"
            subText="AI 진단 결과를 조회하세요!"
            onPress={() => navigation.navigate('ResultList')}
          />
        </View>
        <View style={styles.bottom}></View>
      </ScrollView>
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
  bottom: {
    height: 30,
  },
});
