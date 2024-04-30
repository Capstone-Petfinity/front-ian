import {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

function RenderPet({petList, setSelectedPet}) {
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
    return (
      <View>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          placeholder="반려동물을 선택하세요"
          data={petList}
          maxHeight={300}
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
      </View>
    );
  }
}

export default RenderPet;

const styles = StyleSheet.create({
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
    width: 280,
    marginBottom: 70,
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
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'left',
    backgroundColor: 'white',
  },
  textItem: {
    marginLeft: 15,
  },
});
