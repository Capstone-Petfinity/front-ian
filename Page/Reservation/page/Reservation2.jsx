import {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header1 from '../../Component/Header/Header1';
import {ScrollView} from 'react-native-gesture-handler';
import PetInfoFunction from '../../Main/function/PetInfoFunction';
import RenderPet from '../component/RenderPet';
import CalendarRender from '../component/CalendarRender';

function Reservation2({navigation, route}) {
  const {uuid, hospitalUuid} = route.params;
  const [petInfo, setPetInfo] = useState(null);
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

  useEffect(() => {
    LoadPetInfo();
  }, []);

  useEffect(() => {
    console.log(selectedPet);
  }, [selectedPet]);

  return (
    <View style={styles.container}>
      <Header1 navigation={navigation} />
      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.subContainer}>
          <RenderPet petList={petInfo} setSelectedPet={setSelectedPet} />
          <CalendarRender
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
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
});
