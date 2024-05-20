import {Image, StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from 'react';

import Picture from '../Picture';
import MainButton from '../../Component/Button/MainButton';
import Header1 from '../../Component/Header/Header1';
import CameraTypeList from './CameraTypeList';
import DetailAreaList from './DetailAreaList';
import PositionList from './PositionList';

function VetAIDiagnosis({navigation, route}) {
  const [detailArea, setDetailArea] = useState(null);
  const [position, setPosition] = useState(null);
  const [type, setType] = useState(null);

  const {uri, area} = route.params;

  return (
    <View style={styles.container}>
      <Header1 navigation={navigation} />
      <View style={styles.smallContainer}>
        {uri ? (
          <Image source={uri} style={styles.picture2} />
        ) : (
          <View style={styles.picture}>
            <Text>사진을 선택해주세요</Text>
          </View>
        )}
        <Picture navigation={navigation} />

        <View style={styles.dropdownContainer}>
          {area === '안구' ? (
            <CameraTypeList camera={type} setCamera={setType} />
          ) : null}
          {area === '피부' ? (
            <DetailAreaList
              detailArea={detailArea}
              setDetailArea={setDetailArea}
            />
          ) : null}
          {area === '복부' || area === '근골격계' || area === '흉부' ? (
            <PositionList position={position} setPosition={setPosition} />
          ) : null}
        </View>
        <View style={styles.buttonDiv}>
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
  blank: {
    height: 110,
  },
  dropdownContainer: {
    marginBottom: 70,
  },
});
