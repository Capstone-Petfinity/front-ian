import {Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useState} from 'react';
import AffectedList from './AffectedList';
import Picture from '../Picture';
import MainButton from '../../Component/Button/MainButton';
import Header1 from '../../Component/Header/Header1';

function OwnerAIDiagnosis({navigation, route}) {
  const [area, setArea] = useState('');
  const uri = route.params;

  return (
    <View style={styles.container}>
      <Header1 navigation={navigation} />
      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.smallContainer}>
          {uri ? (
            <Image source={uri} style={styles.picture2} />
          ) : (
            <View style={styles.picture}>
              <Text>사진을 선택해주세요</Text>
            </View>
          )}

          <Picture navigation={navigation} />
          <AffectedList area={area} setArea={setArea} />
          <View style={styles.buttonDiv}>
            <MainButton
              title="AI 진단하기"
              onPress={() => navigation.navigate('OwnerResult')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default OwnerAIDiagnosis;

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
    marginTop: 30,
    alignItems: 'center',
  },
  picture: {
    width: 300,
    height: 350,
    borderWidth: 1,
    backgroundColor: 'lightgray',
    borderColor: 'lightgray',
    marginBottom: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  picture2: {
    width: 300,
    height: 350,
    marginBottom: 30,
  },
  buttonDiv: {
    marginTop: 0,
  },
});
