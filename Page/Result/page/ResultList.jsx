import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Header2 from '../../Component/Header/Header2';

function ResultList({navigation}) {
  return (
    <View style={styles.container}>
      <Header2 navigation={navigation} />
      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.smallContainer}>
          <Text>result list page</Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default ResultList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  smallContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  picture: {
    width: 300,
    height: 350,
    borderWidth: 1,
    backgroundColor: 'lightgray',
    borderColor: 'lightgray',
    marginBottom: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  picture2: {
    width: '70%',
    height: '75%',
    marginBottom: 30,
  },
  buttonDiv: {
    marginTop: 0,
  },
});
