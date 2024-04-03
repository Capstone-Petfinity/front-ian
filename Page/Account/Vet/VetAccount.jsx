import {StyleSheet, Text, View} from 'react-native';

function VetAccount() {
  return (
    <View style={styles.container}>
      <Text>vet account</Text>
    </View>
  );
}

export default VetAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
