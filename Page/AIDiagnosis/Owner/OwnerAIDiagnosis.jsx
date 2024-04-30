import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useEffect, useState} from 'react';
import AffectedList from './AffectedList';
import Picture from '../Picture';
import MainButton from '../../Component/Button/MainButton';
import Header1 from '../../Component/Header/Header1';

function OwnerAIDiagnosis({navigation}) {
  const [area, setArea] = useState('');

  useEffect(() => {
    console.log('selected area: ', area);
  }, [area]);

  return (
    <View style={styles.container}>
      <Header1 navigation={navigation} />
      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.smallContainer}>
          <View style={styles.picture}></View>
          <Picture />
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
    height: 300,
    borderWidth: 1,
    backgroundColor: 'gray',
    borderColor: 'gray',
    marginBottom: 30,
  },
  buttonDiv: {
    marginTop: 50,
  },
});
