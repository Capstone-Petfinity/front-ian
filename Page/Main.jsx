import {Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import logo from '../asset/capstone_logo.png';

function MainButton({text}) {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
}

function Main() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.subContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.title}>PetFinity</Text>
          <Text style={styles.subTitle}>반려동물을 위한 끝없는 연결</Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default Main;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  subContainer: {
    alignItems: 'center',
    marginTop: 200,
  },
  logo: {
    height: 100,
    width: 100,
    marginBottom: 30,
  },
  title: {
    fontSize: 40,
    fontWeight: '900',
    color: '#00835C',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#00835C',
    marginBottom: 30,
  },
});
