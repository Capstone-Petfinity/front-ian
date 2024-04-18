import {StyleSheet, Text, View} from 'react-native';

import OwnerHeader from '../../Component/Header/OwnerHeader';
import MainButton from '../../Component/Button/MainButton';
import Header1 from '../../Component/Header/Header1';

function VetResult({navigation}) {
  return (
    <View style={styles.container}>
      <Header1 navigation={navigation} />
      <View style={styles.smallContainer}>
        <View style={styles.picture}></View>
        <Text style={styles.resultText}>ooo이 97% 의심됩니다.</Text>
        <View style={styles.additionalTextView}>
          <Text style={styles.additionalText}>병에 대한 정보 설명</Text>
          <Text style={styles.additionalText}>병에 대한 정보 설명</Text>
          <Text style={styles.additionalText}>병에 대한 정보 설명</Text>
        </View>

        <View style={styles.buttonDiv}>
          <MainButton
            title="홈으로"
            onPress={() => navigation.navigate('VetMain')}
          />
        </View>
      </View>
    </View>
  );
}

export default VetResult;

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
