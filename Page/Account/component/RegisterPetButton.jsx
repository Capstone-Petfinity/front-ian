import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function RegisterPetButton() {
  const styles = StyleSheet.create({
    container: {
      borderWidth: 0.2,
      borderRadius: 8,
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 340,
      paddingTop: 20,
      paddingBottom: 20,
    },
    button: {
      width: 50,
      height: 50,
      borderWidth: 0.2,
      borderRadius: 50,
      borderColor: 'black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 30,
      marginLeft: 1,
      marginBottom: 2,
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

export default RegisterPetButton;
