import {Button, Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import * as React from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
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

function LoginButton({title, onPress}) {
  return <Button title={title} onPress={onPress} />;
}

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>PetPinity</Text>

      <LoginButton title="Login" onPress={() => navigation.navigate('Login')} />

      <LoginButton
        title="SignUp"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
}

export default HomeScreen;
