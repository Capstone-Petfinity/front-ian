import {useEffect, useState} from 'react';

import {Image, StyleSheet, Text, View} from 'react-native';
import DiagnosisInfoFunction from '../function/DiagnosisInfoFunction';
import Header1 from '../../Component/Header/Header1';
import MainButton from '../../Component/Button/MainButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

function ResultInfo({navigation, route}) {
  let {diagnosis_uuid} = route.params;
  const [diagnosis, setDiagnosis] = useState(null);
  const [isParent, setIsParent] = useState(null);

  async function LoadDiagnosisInfoFunction() {
    const result = await DiagnosisInfoFunction({
      diagnosis_uuid: diagnosis_uuid,
    });

    if (result.statusCode === '200') {
      setDiagnosis(result);
    }
  }

  function LoadUserInfo() {
    AsyncStorage.getItem('userState', (err, result) => {
      const resultData = JSON.parse(result);

      setIsParent(resultData.isParent);
    });
  }
  useEffect(() => {
    LoadDiagnosisInfoFunction();
    LoadUserInfo();
  }, []);

  if (diagnosis) {
    return (
      <View style={styles.container}>
        <Header1 navigation={navigation} />
        <View style={styles.smallContainer}>
          {/* {img_url && (
              <Image source={{uri: img_url}} style={{height: 300, width: 300}} />
            )} */}
          <Text style={styles.resultText}>
            {diagnosis.disease_name}이{'(가)'} {diagnosis.percent}% 의심됩니다.
          </Text>
          <View style={styles.additionalTextView}>
            <Text style={styles.additionalText}>{diagnosis.content}</Text>
          </View>
          {isParent && (
            <View style={styles.buttonDiv}>
              <MainButton
                title="병원 예약"
                onPress={() => navigation.navigate('Reservation1')}
              />
            </View>
          )}
          {!isParent && (
            <View style={styles.buttonDiv}>
              <MainButton
                title="홈으로"
                onPress={() => navigation.navigate('VetMain')}
              />
            </View>
          )}
        </View>
      </View>
    );
  }
}

export default ResultInfo;

const styles = StyleSheet.create({
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
    marginBottom: 35,
  },
  resultText: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 50,
  },
  additionalTextView: {
    marginBottom: 45,
  },
  additionalText: {
    fontSize: 17,
  },
  buttonDiv: {
    // marginBottom: 20,
    marginTop: 50,
  },
});
