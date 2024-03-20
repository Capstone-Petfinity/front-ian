import {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

function CustomerScreen({navigation}) {
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
    <View style={styles.container}>
      <Text style={styles.title}>회원가입</Text>
      <Text>이메일</Text>
      <TextInput style={styles.input} onChange={setEmail} value={email} />
      <Text>비밀번호</Text>
      <TextInput style={styles.input} onChange={setPassword} value={password} />
    </View>
  );
}

export default CustomerScreen;
