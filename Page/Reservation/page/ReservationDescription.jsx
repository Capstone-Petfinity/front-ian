import {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import BackButton from '../../Component/Button/BackButton';

function editTime({time}) {
  const editedTime = time.split(':').slice(0, 2).join(':');

  return editedTime;
}

function RenderHospital({hospital}) {
  return (
    <>
      <View style={styles.title2Container}>
        <Text style={styles.title2}>병원 정보</Text>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.container}>
          <View style={styles.smallContent}>
            <Text style={styles.hospital_name}>{hospital.hospital_name}</Text>
          </View>
          <Text style={styles.hospital_city}>{hospital.address}</Text>
          <Text style={styles.hospital_callnumber}>
            {hospital.hospital_callnumber}
          </Text>
          <Text style={styles.hospital_time}>
            운영시간{'  '} {editTime({time: hospital.open_time})} -{' '}
            {editTime({time: hospital.close_time})}
          </Text>

          <Text style={styles.hospital_lunch_time}>
            점심시간{'  '} {editTime({time: hospital.lunch_start})} -{' '}
            {editTime({time: hospital.lunch_finish})}
          </Text>
        </View>
      </View>
    </>
  );
}

function RenderPet({pet}) {
  const date = new Date(pet.birth);
  const year = date.getFullYear();

  const now = new Date();
  const currentYear = now.getFullYear();

  const age = currentYear - year + 1;

  return (
    <>
      <View style={styles.title2Container}>
        <Text style={styles.title2}>반려동물 정보</Text>
      </View>
      <View style={styles.innerContainer} key={pet.uuid}>
        <View style={styles.smallContainer2}>
          <Text style={styles.title}>이름</Text>
          <Text style={styles.content}>{pet.name}</Text>
        </View>
        <View style={styles.smallContainer2}>
          <Text style={styles.title}>생년월일</Text>
          <Text style={styles.content}>
            {pet.birth} ({age}살)
          </Text>
        </View>
        <View style={styles.smallContainer2}>
          <Text style={styles.title}>견종</Text>
          <Text style={styles.content}>{pet.kind}</Text>
        </View>
        <View style={styles.smallContainer2}>
          <Text style={styles.title}>성별</Text>
          <Text style={styles.content}>{pet.gender}</Text>
        </View>
      </View>
    </>
  );
}

function ReservationDescription({navigation, route}) {
  const {reservation} = route.params;
  const [hospital, setHospital] = useState(null);
  const [pet, setPet] = useState(null);

  useEffect(() => {
    console.log('reservation:', reservation);
    setHospital(reservation.hospital);
    setPet(reservation.pet);
  }, []);

  if (hospital && pet) {
    return (
      <View style={styles.container}>
        <BackButton navigation={navigation} title="예약 정보" />
        <ScrollView style={styles.scrollViewContent}>
          <View style={styles.smallContainer}>
            <View style={styles.title2Container}>
              <Text style={styles.title2}>예약 날짜</Text>
            </View>
            <Text style={styles.reservationDate}>
              {reservation.reservationDate}
            </Text>
            <RenderHospital hospital={hospital} />
            <RenderPet pet={pet} />
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default ReservationDescription;

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
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  smallContainer2: {
    display: 'flex',
    flexDirection: 'row',
    width: 200,
    marginBottom: 8,
  },
  innerContainer: {
    borderWidth: 0.2,
    borderRadius: 8,
    width: 300,
    padding: 20,
    marginBottom: 20,
  },
  hospital_name: {
    fontSize: 20,
    fontWeight: '600',
    width: 260,
  },
  hospital_city: {
    marginTop: 13,
    fontSize: 13,
    width: 230,
  },
  hospital_callnumber: {
    marginTop: 10,
  },
  hospital_time: {
    marginTop: 10,
    fontSize: 12,
  },
  hospital_lunch_time: {
    marginTop: 5,
    fontSize: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    width: 60,
  },
  title2Container: {
    width: 300,
    marginBottom: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title2: {
    fontSize: 20,
    fontWeight: '500',
  },
  content: {
    fontSize: 15,
    marginLeft: 30,
    width: 200,
  },
  reservationDate: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
  },
});
