import {StyleSheet, View} from 'react-native';
import {useState} from 'react';

import VetHeader from '../../Component/Header/VetHeader';
import Picture from '../Picture';
import AffectedList from './AffectedList';
import FormatList from './FormatList';
import MainButton from '../../Component/Button/MainButton';

function VetAIDiagnosis({navigation}) {
  const [format, setFormat] = useState(null);
  const [area, setArea] = useState(null);

  const sytles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
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
      marginBottom: 20,
      marginTop: 30,
    },
  });

  return (
    <View style={sytles.container}>
      <VetHeader navigation={navigation} />
      <View style={sytles.smallContainer}>
        <View style={sytles.picture}></View>
        <Picture />

        <FormatList format={format} setFormat={setFormat} />
        <AffectedList format={format} area={area} setArea={setArea} />
        <View style={sytles.buttonDiv}>
          <MainButton
            title="AI 진단하기"
            onPress={() => navigation.navigate('VetResult')}
          />
        </View>
      </View>
    </View>
  );
}

export default VetAIDiagnosis;
