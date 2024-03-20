import {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    box: {
      borderStyle: 'solid',
      borderWidth: 1,
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
    },
    title: {
      fontSize: 30,
      marginBottom: 30,
    },
    input: {
      borderStyle: 'solid',
      borderWidth: 1,
      height: 30,
      width: 200,
      marginTop: 10,
    },
    button: {
      marginTop: 50,
      borderStyle: 'solid',
      borderWidth: 1,
    },
  });
  
  return (
    <View style={[styles.box, styles.container]}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="이메일을 입력해주세요"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        placeholder="비밀번호를 입력해주세요"
      />
      <Button style={styles.button} title="로그인" />
    </View>
  );
}

export default Login;
