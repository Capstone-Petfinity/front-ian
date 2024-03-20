import {useState} from 'react';
import {Text, View, TouchableOpacity, Alert} from 'react-native';
import {StyleSheet} from 'react-native';
import OwnerSignUp from './OwnerSignUp';

function OwnerButton({isPetOwnerSelected, onPress}) {
  const styles = StyleSheet.create({
    button: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'green',
      width: '50%',
      height: 60,
      justifyContent: 'center',
      display: 'flex',
      alignItems: 'center',
    },
    buttonText: {
      color: 'green',
      fontSize: 20,
    },
    selected: {
      backgroundColor: 'green',
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
      <Text style={textStyles}>반려인</Text>
    </TouchableOpacity>
  );
}

function VetButton({isPetOwnerSelected, onPress}) {
  const styles = StyleSheet.create({
    button: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'green',
      width: 200,
      height: 60,
      justifyContent: 'center',
      display: 'flex',
      alignItems: 'center',
    },
    buttonText: {
      color: 'green',
      fontSize: 20,
    },
    selected: {
      backgroundColor: 'green',
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

function SignUp() {
  const [isPetOwnerSelected, setIsPetOwnerSelected] = useState(true);

  const styles = StyleSheet.create({
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
      <View style={styles.topContainer}>
        <OwnerButton
          isPetOwnerSelected={isPetOwnerSelected}
          onPress={petOwnerPress}
        />
        <VetButton isPetOwnerSelected={isPetOwnerSelected} onPress={vetPress} />
      </View>
      <View style={styles.innerContainer}>
        <OwnerSignUp />
      </View>
    </View>
  );
}

export default SignUp;
