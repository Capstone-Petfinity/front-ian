import {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import MainButton from '../../Component/Button/MainButton';
import Header1 from '../../Component/Header/Header1';

import ImageTestFunction2 from '../function/ImageTestFunction2';
import {ScrollView} from 'react-native-gesture-handler';

function VetResult({navigation, route}) {
  let {result} = route.params;
  const [img_url, setImg_url] = useState(null);

  async function getImgUrlFunction() {
    if (result.insert_id) {
      const res = await ImageTestFunction2({insert_id: result.insert_id});
      setImg_url(res[0]);
    }

    return;
  }

  useEffect(() => {
    getImgUrlFunction();
  }, []);

  if (img_url) {
    return (
      <View style={styles.container}>
        <Header1 navigation={navigation} />
        <ScrollView style={styles.scrollViewContent}>
          <View style={styles.smallContainer}>
            {img_url && <Image source={{uri: img_url}} style={styles.img} />}
            {result.disease_name !== '정상' && (
              <Text style={styles.resultText}>
                <Text style={styles.disease_highlight}>
                  {result.disease_name}{' '}
                </Text>
                이{'(가)'}
                {'\n'}
                <Text style={styles.percent_highlight}>
                  {result.percent}%
                </Text>{' '}
                의심됩니다.
              </Text>
            )}
            {result.disease_name === '정상' && (
              <Text style={styles.resultText}>
                <Text style={styles.percent_highlight}>{result.percent}%</Text>
                의 확률로{'\n'}의심되는 질병이 없습니다.
              </Text>
            )}
            {result.disease_name !== '정상' && result.content !== 'null' && (
              <View style={styles.additionalTextView}>
                <Text style={styles.additionalText}>{result.content}</Text>
              </View>
            )}
            {result.disease_name === '정상' && (
              <View style={styles.additionalTextView}></View>
            )}
          </View>
        </ScrollView>
        <View style={styles.buttonDiv}>
          <MainButton
            title="홈으로"
            onPress={() => navigation.navigate('VetMain')}
          />
        </View>
      </View>
    );
  }
}

export default VetResult;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: 'white',
    marginTop: 30,
  },
  smallContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  picture: {
    width: '70%',
    height: 600,
    borderWidth: 1,
    backgroundColor: 'gray',
    borderColor: 'gray',
    marginBottom: 35,
  },
  img: {
    height: 300,
    width: 300,
    marginBottom: 30,
  },
  resultText: {
    fontSize: 17,
    fontWeight: '500',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 30,
  },
  additionalTextView: {
    width: 240,
  },
  additionalText: {
    fontSize: 17,
  },
  buttonDiv: {
    marginBottom: 50,
    marginTop: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  disease_highlight: {
    fontSize: 20,
    fontWeight: '700',
    color: 'red',
  },
  percent_highlight: {
    fontSize: 20,
  },
});
