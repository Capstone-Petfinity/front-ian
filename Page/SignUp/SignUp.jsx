import {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';

import OwnerSignUp from './OwnerSignUp';
import VetSignUp from './VetSignUp';

function OwnerButton({isPetOwnerSelected, onPress}) {
  const styles = StyleSheet.create({
    button: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'transparent',
      width: '50%',
      height: 60,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightgray',
    },
    buttonText: {
      color: 'black',
      fontSize: 20,
      fontWeight: '700',
    },
    selected: {
      backgroundColor: '#00835C',
    },
    selectedText: {
      color: 'white',
    },
  });

  const buttonStyles = [styles.button, isPetOwnerSelected && styles.selected];
  const textStyles = [
    styles.buttonText,
    isPetOwnerSelected && styles.selectedText,
  ];

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <Text style={textStyles}>보호자</Text>
    </TouchableOpacity>
  );
}

function VetButton({isPetOwnerSelected, onPress}) {
  const styles = StyleSheet.create({
    button: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'transparent',
      width: 200,
      height: 60,
      justifyContent: 'center',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'lightgray',
    },
    buttonText: {
      color: 'black',
      fontSize: 20,
      fontWeight: '700',
    },
    selected: {
      backgroundColor: '#00835C',
    },
    selectedText: {
      color: 'white',
    },
  });

  const buttonStyles = [styles.button, !isPetOwnerSelected && styles.selected];
  const textStyles = [
    styles.buttonText,
    !isPetOwnerSelected && styles.selectedText,
  ];

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <Text style={textStyles}>수의사</Text>
    </TouchableOpacity>
  );
}

function SignUp({navigation}) {
  const [isPetOwnerSelected, setIsPetOwnerSelected] = useState(true);

  const styles = StyleSheet.create({
    topArea: {
      height: 70,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    topContainer: {
      flexDirection: 'row',
    },
    innerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
  });

  function petOwnerPress(e) {
    e.preventDefault();
    if (!isPetOwnerSelected) {
      Alert.alert(
        '주의',
        '정보가 저장되지 않을 수 있습니다.',
        [
          {text: '취소', onPress: () => {}, style: 'cancel'},
          {
            text: '이동',
            onPress: () => {
              setIsPetOwnerSelected(true);
            },
            style: 'destructive',
          },
        ],
        {
          cancelable: true,
          onDismiss: () => {},
        },
      );
    }

    return;
  }

  function vetPress(e) {
    e.preventDefault();
    if (isPetOwnerSelected) {
      Alert.alert(
        '주의',
        '정보가 저장되지 않을 수 있습니다.',
        [
          {text: '취소', onPress: () => {}, style: 'cancel'},
          {
            text: '이동',
            onPress: () => {
              setIsPetOwnerSelected(false);
            },
            style: 'destructive',
          },
        ],
        {
          cancelable: true,
          onDismiss: () => {},
        },
      );
    }

    return;
  }

  return (
    <View style={styles.container}>
      <View style={styles.topArea}></View>
      <View style={styles.topContainer}>
        <OwnerButton
          isPetOwnerSelected={isPetOwnerSelected}
          onPress={petOwnerPress}
        />
        <VetButton isPetOwnerSelected={isPetOwnerSelected} onPress={vetPress} />
      </View>
      <View style={styles.innerContainer}>
        {isPetOwnerSelected && <OwnerSignUp navigation={navigation} />}
        {!isPetOwnerSelected && <VetSignUp navigation={navigation} />}
      </View>
    </View>
  );
}

export default SignUp;
