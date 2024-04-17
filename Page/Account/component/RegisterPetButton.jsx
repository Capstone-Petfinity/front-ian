import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function RegisterPetButton({navigation}) {
  const styles = StyleSheet.create({
    container: {
      borderWidth: 0.2,
      borderRadius: 8,
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 300,
      paddingTop: 10,
      paddingBottom: 10,
    },
    button: {
      width: 25,
      height: 25,
      borderWidth: 0.2,
      borderRadius: 50,
      borderColor: 'black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      marginLeft: 1,
      fontSize: 15,
      marginBottom: 2,
    },
  });

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('RegisterPet')}>
      <View style={styles.button}>
        <Text style={styles.text}>+</Text>
      </View>
    </TouchableOpacity>
  );
}

export default RegisterPetButton;
