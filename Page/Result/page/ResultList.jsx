import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import DiagnosisListFunction from '../function/DiagnosisListFunction';
import BackButton from '../../Component/Button/BackButton';

function LoadDiagnosis({navigation, diagnosisList}) {
  return (
    <View>
      {diagnosisList.map(diagnosis => {
        return (
          <TouchableOpacity
            style={styles.conponentView}
            key={diagnosis.uuid}
            onPress={() =>
              navigation.navigate('ResultInfo', {
                diagnosis_uuid: diagnosis.uuid,
              })
            }>
            <Image source={{uri: diagnosis.img_url}} style={styles.img} />

            <View style={styles.textView}>
              <View style={styles.smallTextView}>
                <Text style={styles.title}>질병명</Text>
                <Text style={styles.text}>{diagnosis.disease_name}</Text>
              </View>
              <View style={styles.smallTextView}>
                <Text style={styles.title}>질병 확률</Text>
                <Text style={styles.text}>{diagnosis.percent}%</Text>
              </View>
              <View style={styles.smallTextView}>
                <Text style={styles.title}>진단 일자</Text>
                <Text style={styles.text}>{diagnosis.date}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
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
        <BackButton navigation={navigation} title="진단 결과 조회" />
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
  img: {
    height: 90,
    width: 90,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  conponentView: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 0.2,
    borderRadius: 8,

    marginBottom: 20,
  },
  textView: {
    width: 200,
    marginTop: 30,
  },
  smallTextView: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  title: {
    width: 60,
    fontSize: 14,
    fontWeight: '500',
    marginRight: 10,
  },
  text: {fontSize: 12},
  loadingText: {
    fontSize: 10,
    width: 90,
    height: 80,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 50,
  },
});
