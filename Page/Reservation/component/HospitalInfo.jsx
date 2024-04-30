import {StyleSheet, Text, View} from 'react-native';

function editTime({time}) {
  const editedTime = time.split(':').slice(0, 2).join(':');

  return editedTime;
}

function HospitalInfo({hospital}) {
  if (hospital) {
    return (
      <>
        <Text style={styles.title}>병원 정보</Text>
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
      </>
    );
  }
}

export default HospitalInfo;

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    marginBottom: 10,
    fontWeight: '500',
    marginLeft: 10,
  },
  container: {
    borderWidth: 0.2,
    borderRadius: 8,
    width: 280,
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
});
