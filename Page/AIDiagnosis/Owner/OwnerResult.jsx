import {StyleSheet, Text, View} from 'react-native';

import OwnerHeader from '../../Component/OwnerHeader';
import MainButton from '../../Component/MainButton';

function OwnerResult({navigation}) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
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
    buttonDiv: {
      marginBottom: 20,
      marginTop: 30,
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
        <View style={styles.buttonDiv}>
          <MainButton title="병원 예약" />
        </View>
      </View>
    </View>
  );
}

export default OwnerResult;
