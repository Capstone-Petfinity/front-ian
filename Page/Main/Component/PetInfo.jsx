import {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {StyleSheet, Text, View} from 'react-native';

import PetInfoFunction from '../function/PetInfoFunction';

import RegisterPetButton from '../../Account/component/RegisterPetButton';

function RenderPets({petInfo}) {
  if (petInfo.length != 0) {
    return petInfo.map((pet, index) => {
      const date = new Date(pet.birth);
      const year = date.getFullYear();

      const now = new Date();
      const currentYear = now.getFullYear();

      const age = currentYear - year + 1;

      return (
        <View key={pet.uuid}>
          <View style={styles.smallContainer}>
            <Text style={styles.title}>이름</Text>
            <Text style={styles.content}>{pet.name}</Text>
          </View>
          <View style={styles.smallContainer}>
            <Text style={styles.title}>생년월일</Text>
            <Text style={styles.content}>
              {pet.birth} ({age}살)
            </Text>
          </View>
          <View style={styles.smallContainer}>
            <Text style={styles.title}>견종</Text>
            <Text style={styles.content}>{pet.kind}</Text>
          </View>
          <View style={styles.smallContainer}>
            <Text style={styles.title}>성별</Text>
            <Text style={styles.content}>{pet.gender}</Text>
          </View>
          {index != petInfo.length - 1 ? (
            <View style={styles.hr} />
          ) : (
            <View style={styles.hr_transparent} />
          )}
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

function PetInfo({navigation}) {
  const [petInfo, setPetInfo] = useState(null);
  const isFocused = useIsFocused();
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

  useEffect(() => {
    LoadPetInfo();
  }, [isFocused]);

  if (petInfo) {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>반려동물 정보</Text>
        </View>
        <RenderPets petInfo={petInfo} />
        <RegisterPetButton navigation={navigation} />
      </View>
    );
  }
}

export default PetInfo;

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
  },
});
