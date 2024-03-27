import {StyleSheet, Text, View} from 'react-native';
import Header from '../Component/Header';
import {TouchableOpacity} from 'react-native-gesture-handler';

function Button({text, onPress}) {
  const styles = StyleSheet.create({
    container: {
      borderWidth: 0.2,
      backgroundColor: '#F8F8F8',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 140,
      width: 200,
      marginBottom: 20,
    },
    text: {
      fontSize: 22,
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

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
          onPress={() => navigation.navigate('VetAIDiagnosis')}
        />
        <Button text="병원 예약" />
      </View>
    </View>
  );
}

export default OwnerMain;
