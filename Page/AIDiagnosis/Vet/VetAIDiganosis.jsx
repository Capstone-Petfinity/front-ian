import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useState} from 'react';

import VetHeader from '../../Component/VetHeader';
import Picture from '../Picture';
import AffectedList from './AffectedList';
import FormatList from './FormatList';

function DiagnosisButton({title, onPress}) {
  const styles = StyleSheet.create({
    loginButton: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#00835C',
      backgroundColor: '#00835C',
      width: 280,
      height: 50,
      justifyContent: 'center',
      display: 'flex',
      alignItems: 'center',
      marginBottom: 20,
      marginTop: 30,
      borderRadius: 5,
    },
    loginButtonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 25,
    },
  });

  return (
    <TouchableOpacity style={styles.loginButton} onPress={onPress}>
      <Text style={styles.loginButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

function VetAIDiagnosis({navigation}) {
  const [format, setFormat] = useState(null);
  const [area, setArea] = useState(null);

  const sytles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
      // alignItems: 'center',
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
  });

  return (
    <View style={sytles.container}>
      <VetHeader navigation={navigation} />
      <View style={sytles.smallContainer}>
        <View style={sytles.picture}></View>
        <Picture />

        <FormatList format={format} setFormat={setFormat} />
        <AffectedList format={format} area={area} setArea={setArea} />

        <DiagnosisButton
          title="AI 진단하기"
          // onPress={() => {
          //   console.log(format, area);
          // }}
          onPress={() => navigation.navigate('VetResult')}
        />
      </View>
    </View>
  );
}

export default VetAIDiagnosis;
