import {useEffect} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

function TextButton({text, onPress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

function VetPictureReneder2({navigation, route}) {
  const {photo, area} = route.params;

  console.log('photo: ' + photo);
  return (
    <>
      <Image style={styles.photo} source={{uri: photo}} />
      <View style={styles.overlayView}>
        <View style={styles.topView} />
        <View style={styles.buttonView}>
          <View style={styles.innerView}>
            <TextButton
              text="취소"
              onPress={() => navigation.navigate('GalleryRender', {area: area})}
            />
            <TextButton
              text="사용"
              onPress={() =>
                navigation.navigate('VetAIDiagnosis', {
                  uri: photo,
                  area: area,
                })
              }
            />
          </View>
        </View>
      </View>
    </>
  );
}

export default VetPictureReneder2;

const styles = StyleSheet.create({
  overlayView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  topView: {
    borderWidth: 1,
    backgroundColor: 'black',
    height: 150,
  },
  buttonView: {
    flex: 1,
    marginTop: 300,
    width: {windowWidth},
    justifyContent: 'flex-end',
  },
  innerView: {
    borderWidth: 1,
    backgroundColor: 'black',
    width: {windowWidth},
    display: 'flex',
    alignItems: 'center',
    height: 180,
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 160,
  },
  photo: {
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  button: {
    width: 100,

    display: 'flex',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
});
