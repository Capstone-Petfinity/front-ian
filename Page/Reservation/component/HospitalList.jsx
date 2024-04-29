import {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import triangleIcon from '../../../asset/triangle.png';

function InfoRender({isOpened, hospital}) {
  function editTime({time}) {
    const editedTime = time.split(':').slice(0, 2).join(':');

    return editedTime;
  }

  if (isOpened) {
    return (
      <>
        <Text style={styles.hospital_callnumber}>
          {hospital.hospital_callnumber}
        </Text>
        <Text style={styles.hospital_time}>
          운영시간{'  '} {editTime({time: hospital.open_time})} ~{' '}
          {editTime({time: hospital.close_time})}
        </Text>

        <Text style={styles.hospital_lunch_time}>
          점심시간{'  '} {editTime({time: hospital.lunch_start})} ~{' '}
          {editTime({time: hospital.lunch_finish})}
        </Text>
      </>
    );
  }
}

function HospitalList({hospitalList, selectedHospital, setSelectedHospital}) {
  function handleSelectHospital(index) {
    setSelectedHospital(index);
  }

  return hospitalList.map(hospital => {
    const isSelected = hospital.uuid === selectedHospital;
    const [isOpened, setIsOpened] = useState(false);

    function handlePress() {
      setIsOpened(prev => !prev);
    }

    return (
      <TouchableOpacity
        key={hospital.uuid}
        style={[styles.contaier, isSelected && styles.highlighted]}
        onPress={() => handleSelectHospital(hospital.uuid)}>
        <View style={styles.smallContent}>
          <Text style={styles.hospital_name}>{hospital.hospital_name}</Text>
          <TouchableOpacity onPress={handlePress}>
            <Image
              style={[
                styles.icon,
                {transform: [{rotate: !isOpened ? '180deg' : '0deg'}]},
              ]}
              source={triangleIcon}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.hospital_city}>{hospital.city}</Text>

        <InfoRender isOpened={isOpened} hospital={hospital} />
      </TouchableOpacity>
    );
  });
}

export default HospitalList;

const styles = StyleSheet.create({
  contaier: {
    borderWidth: 0.2,
    width: 320,
    marginTop: 5,
    marginBottom: 5,
    padding: 20,
    borderRadius: 8,
  },
  highlighted: {
    borderColor: '#00835C',
    borderWidth: 1,
    marginTop: 4.2,
    marginBottom: 4.2,
  },
  smallContent: {
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    width: 15,
    height: 15,
    marginTop: 18,
    marginBottom: -18,
  },
  hospital_name: {
    fontSize: 20,
    fontWeight: '600',
    width: 260,
  },
  hospital_city: {
    marginTop: 13,
    fontSize: 16,
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
