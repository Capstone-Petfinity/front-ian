import {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import MainButton from '../../Component/Button/MainButton';
import Header1 from '../../Component/Header/Header1';

import ImageTestFunction2 from '../function/ImageTestFunction2';

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
        <View style={styles.smallContainer}>
          {img_url && (
            <Image source={{uri: img_url}} style={{height: 300, width: 300}} />
          )}
          <Text style={styles.resultText}>
            {result.disease_name}이{'(가)'} {result.percent}% 의심됩니다.
          </Text>
          {result.content != null && (
            <View style={styles.additionalTextView}>
              <Text style={styles.additionalText}>{result.content}</Text>
            </View>
          )}

          <View style={styles.buttonDiv}>
            <MainButton
              title="홈으로"
              onPress={() => navigation.navigate('VetMain')}
            />
          </View>
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
  smallContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  picture: {
    width: '70%',
    height: 600,
    borderWidth: 1,
    backgroundColor: 'gray',
    borderColor: 'gray',
    marginBottom: 35,
  },
  resultText: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 50,
  },
  additionalTextView: {
    marginBottom: 45,
  },
  additionalText: {
    fontSize: 17,
  },
  buttonDiv: {
    marginBottom: 20,
    marginTop: 30,
  },
});
