import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import Header1 from '../../Component/Header/Header1';
import MainButton from '../../Component/Button/MainButton';

function Reservation3({navigation}) {
  return (
    <View style={styles.container}>
      <Header1 navigation={navigation} />
      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.subContainer}>
          <View style={styles.titleView}>
            <Text style={styles.title}>예약이 완료되었습니다</Text>
          </View>
          <MainButton
            title="홈으로"
            onPress={() => navigation.navigate('OwnerMain')}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default Reservation3;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: 'white',
    width: 400,
  },
  subContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  titleView: {
    height: 330,
    marginTop: 200,
  },
  title: {
    fontSize: 23,
    fontWeight: '600',
  },
});
