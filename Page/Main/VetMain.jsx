import {StyleSheet, View} from 'react-native';
import VetHeader from '../Component/VetHeader';
import Button from './Button';

function VetMain({navigation}) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
    },
    subContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 230,
    },
  });

  return (
    <View style={styles.container}>
      <VetHeader navigation={navigation} />
      <View style={styles.subContainer}>
        <Button
          text="AI 진단"
          onPress={() => navigation.navigate('VetAIDiagnosis')}
        />
      </View>
    </View>
  );
}

export default VetMain;
