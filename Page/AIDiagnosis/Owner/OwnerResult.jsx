import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import OwnerHeader from '../../Component/OwnerHeader';

function ReservationButton({title, onPress}) {
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

function OwnerResult({navigation}) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
      alignItems: 'center',
    },
    smallContainer: {
      marginTop: 30,
      alignItems: 'center',
    },
    picture: {
      width: 300,
      height: 300,
      borderWidth: 1,
      backgroundColor: 'gray',
      borderColor: 'gray',
      marginBottom: 35,
    },
    resultText: {
      fontSize: 20,
      fontWeight: '500',
      marginBottom: 50,
    },
    additionalTextView: {
      marginBottom: 45,
    },
    additionalText: {
      fontSize: 17,
    },
  });

  return (
    <View style={styles.container}>
      <OwnerHeader navigation={navigation} />
      <View style={styles.smallContainer}>
        <View style={styles.picture}></View>
        <Text style={styles.resultText}>ooo이 97% 의심됩니다.</Text>
        <View style={styles.additionalTextView}>
          <Text style={styles.additionalText}>병에 대한 정보 설명</Text>
          <Text style={styles.additionalText}>병에 대한 정보 설명</Text>
          <Text style={styles.additionalText}>병에 대한 정보 설명</Text>
        </View>
        <ReservationButton title="병원 예약" />
      </View>
    </View>
  );
}

export default OwnerResult;
