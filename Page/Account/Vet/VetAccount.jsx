import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

function BackButton() {
  const styles = StyleSheet.create({
    container: {
      marginTop: 80,
      marginLeft: 30,
    },
    text: {
      fontSize: 16,
    },
  });

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{'<  '}뒤로가기</Text>
    </TouchableOpacity>
  );
}

function VetAccount() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    smallContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
  });

  return (
    <View style={styles.container}>
      <BackButton />
      <View style={styles.smallContainer}>
        <Text>vet account</Text>
      </View>
    </View>
  );
}

export default VetAccount;
