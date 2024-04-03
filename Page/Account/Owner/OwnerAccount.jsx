import {StyleSheet, Text, View} from 'react-native';

function OwnerAccount() {
  return (
    <View style={styles.container}>
      <Text>owner account</Text>
    </View>
  );
}

export default OwnerAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
