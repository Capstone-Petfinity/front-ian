import {StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import ReservationInfoFunction from '../function/ReservationInfoFunction';

function RenderReservation({reservationList}) {
  if (reservationList.length != 0) {
    return reservationList.map((reservation, index) => {
      const hospital = reservation.hospital;
      const pet = reservation.pet;

      return (
        <View key={reservation.reservationUuid}>
          <View style={styles.smallContainer}>
            <Text style={styles.title}>병원</Text>
            <Text style={styles.content}>{hospital.hospital_name}</Text>
          </View>
          <View style={styles.smallContainer}>
            <Text style={styles.title}>반려동물</Text>
            <Text style={styles.content}>{pet.name}</Text>
          </View>
          <View style={styles.smallContainer}>
            <Text style={styles.title}>예약 일자</Text>
            <Text style={styles.content}>{reservation.reservationDate}</Text>
          </View>

          {index != reservationList.length - 1 ? (
            <View style={styles.hr} />
          ) : (
            <View style={styles.hr_transparent} />
          )}
        </View>
      );
    });
  }
}

function ReservationInfo() {
  const [reservationList, setReservationList] = useState(null);

  async function LoadReservationList() {
    AsyncStorage.getItem('userState', async (err, result) => {
      const resultData = JSON.parse(result);

      const res = await ReservationInfoFunction({uuid: resultData.uuid});
      if (res.statusCode === '200') {
        setReservationList(res.reservations);
        return;
      }

      return;
    });
  }

  useEffect(() => {
    LoadReservationList();
  }, []);

  if (reservationList) {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>병원 예약 정보</Text>
        </View>
        <RenderReservation reservationList={reservationList} />
      </View>
    );
  }
}

export default ReservationInfo;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.2,
    borderRadius: 8,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 340,
    marginBottom: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },
  smallContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 200,
    marginBottom: 8,
  },
  textContainer: {
    width: 300,
    marginBottom: 5,
  },
  text: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: '800',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    width: 60,
  },
  content: {
    fontSize: 15,
    marginLeft: 30,
    width: 200,
  },

  hr: {
    width: 280,
    height: 1,
    borderWidth: 0.2,
    borderColor: 'gray',
    marginTop: 10,
    marginBottom: 20,
  },
  hr_transparent: {
    width: 280,
    height: 1,
    borderWidth: 0.2,
    borderColor: 'white',
    marginTop: 10,
    // marginBottom: 20,
  },
});
