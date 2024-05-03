import {Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import ReservationInfoFunction from '../function/ReservationInfoFunction';

function ReservationInfo() {
  const [reservationList, setReservationList] = useState(null);

  async function LoadReservationInfo() {
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
    LoadReservationInfo();
  }, []);

  if (reservationList) {
    return reservationList.map(reservation => {
      return (
        <View>
          <Text>reservation</Text>
          <Text>{reservation.reservation_date}</Text>
        </View>
      );
    });
  }
}

export default ReservationInfo;
