import {useEffect, useState} from 'react';

import {Image, StyleSheet, Text, View} from 'react-native';
import DiagnosisInfoFunction from '../function/DiagnosisInfoFunction';
import Header1 from '../../Component/Header/Header1';
import MainButton from '../../Component/Button/MainButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImageTestFunction2 from '../../AIDiagnosis/function/ImageTestFunction2';
import {ScrollView} from 'react-native-gesture-handler';

function ResultInfo({navigation, route}) {
  let {diagnosis_uuid} = route.params;
  const [diagnosis, setDiagnosis] = useState(null);
  const [isParent, setIsParent] = useState(null);
  const [img_url, setImg_url] = useState(null);

  async function LoadDiagnosisInfoFunction() {
    const result = await DiagnosisInfoFunction({
      diagnosis_uuid: diagnosis_uuid,
    });

    if (result.statusCode === '200') {
      setDiagnosis(result);
    }
  }

  async function getImgUrlFunction() {
    if (diagnosis) {
      const res = await ImageTestFunction2({insert_id: diagnosis.insert_id});
      setImg_url(res[0]);
    }

    return;
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

  useEffect(() => {
    getImgUrlFunction();
  }, [diagnosis]);

  if (diagnosis) {
    return (
      <View style={styles.container}>
        <Header1 navigation={navigation} />
        <ScrollView style={styles.scrollViewContent}>
          <View style={styles.smallContainer}>
            {img_url && <Image source={{uri: img_url}} style={styles.img} />}
            {diagnosis.disease_name !== '정상' && (
              <Text style={styles.resultText}>
                <Text style={styles.disease_highlight}>
                  {diagnosis.disease_name}{' '}
                </Text>
                이{'(가)'}
                {'\n'}
                <Text style={styles.percent_highlight}>
                  {diagnosis.percent}%
                </Text>{' '}
                의심됩니다.
              </Text>
            )}
            {diagnosis.disease_name === '정상' && (
              <Text style={styles.resultText}>
                <Text style={styles.resultText}>
                  <Text style={styles.percent_highlight}>
                    {diagnosis.percent}%
                  </Text>
                  의 확률로{'\n'}의심되는 질병이 없습니다.
                </Text>
              </Text>
            )}
            {diagnosis.diagnosis !== '정상' && isParent && (
              <View style={styles.additionalTextView}>
                <Text style={styles.additionalText}>{diagnosis.content}</Text>
              </View>
            )}
          </View>
        </ScrollView>
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
    );
  }
}

export default ResultInfo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: 'white',
    marginTop: 30,
  },
  smallContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  picture: {
    width: 300,
    height: 300,
    borderWidth: 1,
    backgroundColor: 'gray',
    borderColor: 'gray',
    marginBottom: 35,
  },
  img: {
    height: 300,
    width: 300,
    marginBottom: 30,
  },
  resultText: {
    fontSize: 17,
    fontWeight: '500',
    marginBottom: 50,
    textAlign: 'center',
    lineHeight: 30,
  },
  additionalTextView: {
    // marginBottom: 45,
    width: 300,
  },
  additionalText: {
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'center',
  },
  buttonDiv: {
    marginBottom: 50,
    marginTop: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  disease_highlight: {
    fontSize: 20,
    fontWeight: '700',
    color: 'red',
  },
  percent_highlight: {
    fontSize: 20,
  },
});
