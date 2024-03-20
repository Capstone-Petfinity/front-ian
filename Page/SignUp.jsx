import {Text, View, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
function SignUp({navigation}) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
      fontWeight: 900,
      color: 'black',
      marginBottom: 30,
    },
    button: {
      borderStyle: 'solid',
      borderWidth: 1,
      width: 200,
      height: 100,
      justifyContent: 'center',
      display: 'flex',
      alignItems: 'center',
      marginBottom: 10,
    },
    buttonText: {
      color: 'black',
      fontSize: 20,
    },
  });

  function CustomButton({title, onPress}) {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SignUp</Text>
      <CustomButton
        title="반려인"
        onPress={() => navigation.navigate('Customer')}
      />
      <CustomButton title="의료진" onPress={() => navigation.navigate('Vet')} />
    </View>
  );
}

export default SignUp;
