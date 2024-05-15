import {Dimensions, StyleSheet, Text, View} from 'react-native';

const windowWidth = Dimensions.get('window').width;

function NavigationBar() {
  return (
    <View style={styles.container}>{/* <Text>navigation bar</Text> */}</View>
  );
}

export default NavigationBar;

const styles = StyleSheet.create({
  container: {
    width: {windowWidth},
    height: 80,
    backgroundColor: 'white',
    borderWidth: 0.2,
    borderColor: 'white',
    borderTopColor: 'gray',
  },
});
