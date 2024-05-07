import {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import Header1 from '../../Component/Header/Header1';
import {ScrollView} from 'react-native-gesture-handler';
import PetInfoFunction from '../../Main/function/PetInfoFunction';
import RenderPet from '../component/RenderPet';
import CalendarRender from '../component/CalendarRender';
import LoadOneHospitalFunction from '../function/LoadOneHospitalFunction';
import HospitalInfo from '../component/HospitalInfo';
import MainButton from '../../Component/Button/MainButton';
import reservationFunction from '../function/ReservationFunction';
import {useIsFocused} from '@react-navigation/native';

function Reservation2({navigation, route}) {
  const {uuid, hospitalUuid} = route.params;
  const isFocused = useIsFocused();

  const [petInfo, setPetInfo] = useState(null);
  const [hospitalInfo, setHospitalInfo] = useState(null);

  const [selectedPet, setSelectedPet] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  async function LoadPetInfo() {
    const res = await PetInfoFunction({uuid});

    if (res.statusCode === '200') {
      const pets = await res.pets;
      setPetInfo(pets);
    }

    return;
  }

  async function LoadHospitalInfo() {
    const res = await LoadOneHospitalFunction({hospitalUuid});
    if (res.statusCode === '200') {
      setHospitalInfo(res);
    }

    return;
  }

  async function onPressReservationButton() {
    if (!selectedPet || !selectedDate) {
      Alert.alert(
        '병원 예약 실패',
        '모든 항목을 선택하여주세요',
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

      return;
    }

    // 현재 날짜와 시간을 가져오기
    var currentDate = new Date();

    // 특정 시간 설정 (예: 2024년 4월 1일)
    var specificDate = new Date(selectedDate);

    // 현재 날짜와 특정 시간 사이의 차이 계산
    var timeDiff = specificDate.getTime() - currentDate.getTime();
    var dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)); // 밀리초를 일로 변환하고, 올림하여 일수 계산

    if (dayDiff < 0) {
      Alert.alert(
        '병원 예약 실패',
        '유효한 날짜를 선택해주세요',
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

      return;
    }

    const res = await reservationFunction({
      userUuid: uuid,
      petUuid: selectedPet,
      hospitalUuid: hospitalUuid,
      reservationDate: selectedDate,
    });

    if (res.statusCode === '200') {
      navigation.navigate('Reservation3');
      return;
    }

    Alert.alert(
      '병원 예약 실패',
      '모든 항목을 선택하여주세요',
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
    LoadPetInfo();
    LoadHospitalInfo();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Header1 navigation={navigation} />
      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.subContainer}>
          <RenderPet
            navigation={navigation}
            petList={petInfo}
            setSelectedPet={setSelectedPet}
            uuid={uuid}
            hospitalUuid={hospitalUuid}
          />
          <HospitalInfo hospital={hospitalInfo} />
          <CalendarRender
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
          <View style={styles.buttonDiv}>
            <MainButton
              title="병원 예약하기"
              onPress={onPressReservationButton}
            />
            <View style={styles.buttonView} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Reservation2;

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
  buttonDiv: {
    marginTop: 50,
  },
  buttonView: {
    height: 40,
  },
});
