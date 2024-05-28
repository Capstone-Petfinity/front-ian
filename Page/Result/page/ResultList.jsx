import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Header2 from '../../Component/Header/Header2';
import DiagnosisListFunction from '../function/DiagnosisListFunction';

function LoadDiagnosis({navigation, diagnosisList}) {
  return diagnosisList.map(diagnosis => {
    return (
      <TouchableOpacity
        key={diagnosis.uuid}
        onPress={() =>
          navigation.navigate('ResultInfo', {
            diagnosis_uuid: diagnosis.uuid,
          })
        }>
        <Text>{diagnosis.date}</Text>
        <Text>{diagnosis.disease_name}</Text>
      </TouchableOpacity>
    );
  });
}

function ResultList({navigation}) {
  const [diagnosisList, setDiagnosisList] = useState(null);

  function LoadDiagnosisList() {
    AsyncStorage.getItem('userState', async (err, result) => {
      const resultData = JSON.parse(result);

      if (resultData.uuid) {
        const result = await DiagnosisListFunction({uuid: resultData.uuid});
        if (result.statusCode === '200') {
          setDiagnosisList(result.diagnoses);
        }
      }
    });
  }

  useEffect(() => {
    LoadDiagnosisList();
  }, []);

  if (diagnosisList) {
    return (
      <View style={styles.container}>
        <Header2 navigation={navigation} />
        <ScrollView style={styles.scrollViewContent}>
          <View style={styles.smallContainer}>
            <LoadDiagnosis
              navigation={navigation}
              diagnosisList={diagnosisList}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ResultList;

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
    width: '70%',
    height: '75%',
    marginBottom: 30,
  },
  buttonDiv: {
    marginTop: 0,
  },
});
