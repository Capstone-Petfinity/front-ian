import {StyleSheet, Text, View} from 'react-native';

function UserInfo() {
  const styles = StyleSheet.create({
    container: {
      borderWidth: 0.2,
      borderRadius: 8,
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 150,
      width: 340,
      marginBottom: 20,
    },
  });
  return (
    <View style={styles.container}>
      <Text>userinfo</Text>
    </View>
  );
}

export default UserInfo;
