import {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PetInfoFunction from '../function/PetInfoFunction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RegisterPetButton from '../../Account/component/RegisterPetButton';

function PetInfo({navigation}) {
  const [petInfo, setPetInfo] = useState(null);

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
      marginLeft: -45,
    },

    petContainer: {
      display: 'flex',
      flexDirection: 'row',
      fontSize: 15,
      marginLeft: 5,
      marginBottom: 10,
      width: 300,
    },
    petName: {
      marginTop: 1,
      height: 20,
    },
    petAge: {
      height: 20,
    },
    petKind: {
      marginTop: 2,
      height: 20,
    },
  });

  async function LoadPetInfo() {
    AsyncStorage.getItem('userState', async (err, result) => {
      const resultData = JSON.parse(result);

      const res = await PetInfoFunction({uuid: resultData.uuid});

      if (res.statusCode === '200') {
        const pets = await res.pets;
        setPetInfo(pets);
      }
    });

    return;
  }

  function RenderPets() {
    console.log(petInfo);
    if (petInfo.length != 0) {
      return petInfo.map(pet => {
        const date = new Date(pet.birth);
        const year = date.getFullYear();

        const now = new Date();
        const currentYear = now.getFullYear();

        const age = currentYear - year + 1;

        return (
          <View style={styles.petContainer} key={pet.uuid}>
            <Text style={styles.petName}>{pet.name}</Text>
            <Text style={styles.petAge}>({age}) </Text>
            <Text style={styles.petKind}>{pet.kind}</Text>
          </View>
        );
      });
    } else {
      return (
        <View style={styles.petContainer}>
          <Text>등록된 반려동물이 없습니다.</Text>
        </View>
      );
    }
  }

  useEffect(() => {
    LoadPetInfo();
  }, []);

  if (petInfo) {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>반려동물 정보</Text>
        </View>
        <RenderPets />
        <RegisterPetButton navigation={navigation} />
      </View>
    );
  }
}

export default PetInfo;
