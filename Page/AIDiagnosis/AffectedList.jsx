import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import triagleIcon from '../../asset/triangle.png';
import {useState} from 'react';
function AffectedList() {
  const [selectedArea, setSelectedArea] = useState('질환 부위를 선택하세요');
  const [isOpened, setIsOpened] = useState(false);
  const [rotateAngle, setRotateAngle] = useState(180);

  const areaArr = ['안구', '피부'];

  function rotateTriangle() {
    if (rotateAngle == 180) setRotateAngle(0);
    else setRotateAngle(180);

    return;
  }

  function ToggleTriangle({onPress, rotateAngle}) {
    const styles = StyleSheet.create({
      triangle: {
        transform: [{rotate: `${rotateAngle}deg`}],
        width: 12,
        height: 12,
      },
    });

    return (
      <TouchableOpacity onPress={onPress}>
        <Image source={triagleIcon} style={styles.triangle} />
      </TouchableOpacity>
    );
  }

  function List({key, text, onPress}) {
    const styles = StyleSheet.create({
      listContainer: {
        borderWidth: 0.2,
        backgroundColor: 'white',
        width: 200,
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'left',
      },
      listText: {
        fontSize: 15,
        marginLeft: 20,
      },
      hidden: {
        display: 'hidden',
      },
    });

    return (
      <TouchableOpacity onPress={onPress} style={styles.listContainer}>
        <Text key={key} style={styles.listText}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }

  function AffectedArea() {
    const styles = StyleSheet.create({
      container: {
        display: 'flex',
        width: 280,
        flexDirection: 'row',
        marginTop: 40,
      },
      titleContainer: {
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
      },
      title: {
        fontSize: 15,
        fontWeight: '700',
      },
      listContainer: {
        borderWidth: 0.2,
        width: 200,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
      },
      listText: {
        fontSize: 15,
        marginLeft: 20,
        width: 150,
      },
      hidden: {
        opacity: 0,
      },
      triangle: {
        width: 10,
        height: 10,
      },
    });

    const toggleStyle = [!isOpened && styles.hidden];

    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>질병 부위</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              setIsOpened(!isOpened);
              rotateTriangle();
            }}
            style={styles.listContainer}>
            <Text style={styles.listText}>{selectedArea}</Text>
            <ToggleTriangle
              style={styles.triangle}
              onPress={() => {
                setIsOpened(prev => !prev);
                rotateTriangle();
              }}
              isOpened={isOpened}
              rotateAngle={rotateAngle}
            />
          </TouchableOpacity>

          <View style={toggleStyle}>
            {areaArr.map((area, index) => (
              <List
                key={index}
                text={area}
                onPress={() => {
                  setIsOpened(false);
                  setSelectedArea(area);
                  rotateTriangle();
                }}
              />
            ))}
          </View>
        </View>
      </View>
    );
  }

  return <AffectedArea />;
}

export default AffectedList;
