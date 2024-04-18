import {StyleSheet, Text, View, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

function OwnerHeader2({navigation}) {
  return (
    <>
      <View style={styles.topArea} />
      <View style={styles.container}>
        <Text style={styles.title}>Petfinity</Text>
      </View>
    </>
  );
}

export default OwnerHeader2;

const styles = StyleSheet.create({
  topArea: {
    height: 60,
  },
  container: {
    borderWidth: 1,
    borderColor: '#00835C',
    backgroundColor: '#00835C',
    width: {windowWidth},
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    fontWeight: '800',
    fontSize: 27,
  },
});
