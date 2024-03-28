import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

function ChangePictureButton() {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F8F8F8',
      borderWidth: 0.2,
      width: 70,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: 'black',
    },
  });
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>사진 변경</Text>
    </TouchableOpacity>
  );
}

function AffectedArea() {
  const [isOpened, setIsOpened] = useState(false);
}

function DiagnosisButton({title, onPress}) {
  const styles = StyleSheet.create({
    loginButton: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#00835C',
      backgroundColor: '#00835C',
      width: 280,
      height: 50,
      justifyContent: 'center',
      display: 'flex',
      alignItems: 'center',
      marginBottom: 20,
      marginTop: 30,
      borderRadius: 5,
    },
    loginButtonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 25,
    },
  });

  return (
    <TouchableOpacity style={styles.loginButton} onPress={onPress}>
      <Text style={styles.loginButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

function VetAIDiagnosis({navigation}) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <ChangePictureButton />
      <DiagnosisButton
        title="AI 진단하기"
        onPress={() => console.log('click')}
      />
    </View>
  );
}

export default VetAIDiagnosis;
