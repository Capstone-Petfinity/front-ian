import {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import RegisterPetButton from './RegisterPetButton';

function RenderPet({navigation, petList, setSelectedPet}) {
  const [isFocus, setIsFocus] = useState(false);

  const renderItem = item => {
    const date = new Date(item.birth);
    const year = date.getFullYear();

    const now = new Date();
    const currentYear = now.getFullYear();

    const age = currentYear - year + 1;

    if (isFocus) {
      return (
        <View style={styles.item}>
          <Text style={styles.textItem}>
            {item.name} ({age}) {item.kind}
          </Text>
        </View>
      );
    }
  };

  if (petList) {
    if (petList.length > 0) {
      return (
        <>
          <Text style={styles.title}>반려동물 선택</Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            placeholder="반려동물을 선택하세요"
            data={petList}
            maxHeight={80}
            labelField="name"
            valueField="uuid"
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(true)}
            onChange={item => {
              setIsFocus(false);
              setSelectedPet(item.uuid);
            }}
            renderItem={renderItem}
          />
        </>
      );
    } else {
      return (
        <>
          <Text style={styles.title}>반려동물 선택</Text>
          <RegisterPetButton navigation={navigation} />
          <Text style={styles.text}>
            등록된 반려동물이 없습니다. {'\n'}반려동물을 먼저 등록해주세요.
          </Text>
        </>
      );
    }
  }
}

export default RenderPet;

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    marginBottom: 10,
    fontWeight: '500',
    marginLeft: 10,
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'whites',
    borderWidth: 0.2,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: 300,
    marginBottom: 20,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    marginLeft: 10,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 10,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  item: {
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'left',
    backgroundColor: 'white',
  },
  textItem: {
    marginLeft: 15,
    fontSize: 15,
  },
  text: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: '300',
  },
});
