import {StyleSheet, View} from 'react-native';
import Header from '../Component/Header';
import Button from './Button';

function OwnerMain({navigation}) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
    },
    subContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 120,
    },
  });

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.subContainer}>
        <Button
          text="AI 진단"
          onPress={() => navigation.navigate('OwnerAIDiagnosis')}
        />
        <Button text="병원 예약" />
      </View>
    </View>
  );
}

export default OwnerMain;
