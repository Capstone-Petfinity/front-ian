import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function RegisterPetButton({navigation, uuid, hospitalUuid}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('RegisterPet2', {
          uuid: uuid,
          hospitalUuid: hospitalUuid,
        })
      }>
      <View style={styles.button}>
        <Text style={styles.text}>+</Text>
      </View>
    </TouchableOpacity>
  );
}

export default RegisterPetButton;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.2,
    borderRadius: 8,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 80,
    paddingTop: 10,
    paddingBottom: 10,
  },
  button: {
    width: 40,
    height: 40,
    borderWidth: 0.2,
    borderRadius: 50,
    borderColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginLeft: 1,
    fontSize: 20,
    marginBottom: 2,
  },
});
