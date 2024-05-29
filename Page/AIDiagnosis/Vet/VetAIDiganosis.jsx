import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import Picture from '../Picture';
import MainButton from '../../Component/Button/MainButton';
import Header1 from '../../Component/Header/Header1';
import CameraTypeList from './CameraTypeList';
import PositionList from './PositionList';
import DiseaseList from './DiseaseList';

import AIDiagnosisFunction from '../function/AIDiagnosisFunction';
import ImageTestFunction from '../function/ImageTestFunction';
import PositionList2 from './PositionList2';

function VetAIDiagnosis({navigation, route}) {
  const [uuid, setUuid] = useState(null);
  const [position, setPosition] = useState(null);
  const [type, setType] = useState(null);
  const [disease, setDisease] = useState(null);
  const [img_url, setImg_url] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const {uri, area} = route.params;

  async function getImgUrlFunction() {
    let formData = new FormData();
    if (uri.filename) {
      formData.append('file', {
        name: uri.filename,
        type: uri.extension,
        uri: uri.uri,
      });
    } else {
      formData.append('file', {
        name: uri.path,
        type: 'jpeg',
        uri: 'file://' + uri.path,
      });
    }

    const result = await ImageTestFunction({formData: formData});
    setImg_url(result[0]);

    return;
  }

  async function onClickDiagnosisButton() {
    if (uri == null) {
      Alert.alert(
        'AI 진단 실패',
        '사진을 선택해주세요.',
        [{text: '확인', onPress: () => {}, style: 'cancel'}],

        {
          cancelable: true,
          onDismiss: () => {},
        },
      );

      return;
    }

    setIsLoaded(true);
    const result2 = await AIDiagnosisFunction({
      uuid: uuid,
      disease_area: area,
      type: type,
      position: position,
      disease: disease,
      img_url: img_url,
    });

    if (result2.statusCode === '200') {
      navigation.navigate('VetResult', {result: result2});
      setIsLoaded(false);
    }
  }

  function loadUserInfo() {
    AsyncStorage.getItem('userState', (err, result) => {
      const resultData = JSON.parse(result);
      setUuid(resultData.uuid);
    });
  }

  useEffect(() => {
    loadUserInfo();
    // console.log(area);
  }, []);

  useEffect(() => {
    if (uri) {
      getImgUrlFunction();
    }
  }, [uri]);

  if (!isLoaded) {
    return (
      <View style={styles.container}>
        <Header1 navigation={navigation} />
        <ScrollView>
          <View style={styles.smallContainer}>
            {!uri && (
              <View style={styles.picture}>
                <Text>사진을 선택해주세요</Text>
              </View>
            )}
            {uri && !uri.uri && (
              <Image
                source={{uri: 'file://' + uri.path}}
                style={styles.picture2}
              />
            )}
            {uri && uri.uri && (
              <Image source={{uri: uri.uri}} style={styles.picture2} />
            )}
            <Picture navigation={navigation} area={area} />

            <View style={styles.dropdownContainer}>
              {area === 'eye' ? (
                <CameraTypeList camera={type} setCamera={setType} />
              ) : null}
              {area === 'stomach' || area === 'chest' ? (
                <PositionList position={position} setPosition={setPosition} />
              ) : null}
              {area === 'skeletal' ? (
                <PositionList2 position={position} setPosition={setPosition} />
              ) : null}
            </View>
            <View style={styles.dropdownContainer}>
              <DiseaseList
                area={area}
                disease={disease}
                setDisease={setDisease}
              />
            </View>
            <View style={styles.buttonDiv}>
              <MainButton
                title="AI 진단하기"
                onPress={() => onClickDiagnosisButton()}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollViewContent}>
          <View style={styles.smallContainer2}>
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default VetAIDiagnosis;

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
  smallContainer2: {
    marginTop: 400,
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
    height: 330,
    marginBottom: 30,
  },
  buttonDiv: {
    marginTop: 0,
  },
  blank: {
    height: 110,
  },
  dropdownContainer: {
    marginBottom: 20,
  },
  loadingText: {
    fontSize: 25,
    fontWeight: '900',
    color: '#00835C',
  },
});
