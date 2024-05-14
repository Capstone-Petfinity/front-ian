import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
import Header1 from '../../Component/Header/Header1';

import LoadHospitalFunction from '../function/LoadHospitalFunction';
import HospitalList from '../component/HospitalList';
import MainButton from '../../Component/Button/MainButton';

function Reservation1({navigation}) {
  const [hospitalList, setHospitalList] = useState(null);
  const [selectedHospital, setSelectedHospital] = useState(-1);
  const [uuid, setUuid] = useState(null);

  async function LoadHospital() {
    AsyncStorage.getItem('userState', async (err, result) => {
      const resultData = JSON.parse(result);

      const res = await LoadHospitalFunction({uuid: resultData.uuid});
      setUuid(resultData.uuid);
      if (res.statusCode === '200') {
        const hospitalList = res.hospitalList.slice(0, 4);
        setHospitalList(hospitalList);
      }
    });

    return;
  }

  function onPressReservationButton() {
    if (selectedHospital != -1) {
      navigation.navigate('Reservation2', {
        uuid: uuid,
        hospitalUuid: selectedHospital,
      });

      return;
    }

    Alert.alert(
      '병원 예약 실패',
      '병원을 선택해주세요',
      [
        {
          text: '확인',
          onPress: () => {},
          style: 'cancel',
        },
      ],

      {
        cancelable: true,
        onDismiss: () => {},
      },
    );
  }

  useEffect(() => {
    LoadHospital();
  }, []);

  if (hospitalList) {
    return (
      <View style={styles.container}>
        <Header1 navigation={navigation} />
        <ScrollView style={styles.scrollViewContent}>
          <View style={styles.subContainer}>
            <View style={styles.addressView}>
              <Text style={styles.address}>
                {hospitalList[0].city} 지역 동물병원 리스트
              </Text>
            </View>
            <HospitalList
              hospitalList={hospitalList}
              selectedHospital={selectedHospital}
              setSelectedHospital={setSelectedHospital}
            />
          </View>
          <View style={styles.mainButtonView}>
            <MainButton
              title="병원 선택하기"
              onPress={onPressReservationButton}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Reservation1;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  subContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  addressView: {
    borderWidth: 0.2,
    width: 320,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  address: {
    fontSize: 15,
  },
  bottomMargin: {
    height: 30,
  },
  mainButtonView: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: 150,
    marginTop: 30,
  },
});
