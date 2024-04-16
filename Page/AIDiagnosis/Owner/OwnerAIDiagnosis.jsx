import {StyleSheet, Text, View, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {useEffect, useState} from 'react';
import AffectedList from './AffectedList';
import Picture from '../Picture';
import OwnerHeader from '../../Component/OwnerHeader';

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

function OwnerAIDiagnosis({navigation}) {
  const [area, setArea] = useState('');

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
      // alignItems: 'center',
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
  });

  useEffect(() => {
    console.log(area);
  }, [area]);

  return (
    <View style={styles.container}>
      <OwnerHeader navigation={navigation} />
      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.smallContainer}>
          <View style={styles.picture}></View>
          <Picture />
          <AffectedList area={area} setArea={setArea} />
          <DiagnosisButton
            title="AI 진단하기"
            onPress={() => navigation.navigate('OwnerResult')}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default OwnerAIDiagnosis;
