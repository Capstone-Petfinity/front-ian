import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header1 from '../../Component/Header/Header1';

import LoadHospitalFunction from '../function/LoadHospitalFunction';

function Reservation1({navigation}) {
  const [hospitalList, setHospitalList] = useState(null);

  async function LoadHospital() {
    AsyncStorage.getItem('userState', async (err, result) => {
      const resultData = JSON.parse(result);

      const res = await LoadHospitalFunction({uuid: resultData.uuid});
      if (res.statusCode === '200') setHospitalList(res.hospitalList);
    });

    return;
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
            <Text>hey</Text>
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
  bottomMargin: {
    height: 30,
  },
});
