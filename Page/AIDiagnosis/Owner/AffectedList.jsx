import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {StyleSheet, View, Text} from 'react-native';

const data = [
  {label: '안구', value: 'eye'},
  {label: '피부', value: 'skin'},
];

function AffectedList({area, setArea}) {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState();
  const renderItem = item => {
    if (area || isFocus) {
      return (
        <View style={styles.item}>
          <Text style={styles.textItem}>{item.label}</Text>
        </View>
      );
    }
  };

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      placeholder="질환 부위를 선택하세요"
      data={data}
      maxHeight={300}
      labelField="label"
      valueField="value"
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(true)}
      onChange={item => {
        setArea(item.value);
        setValue(item.value);
        setIsFocus(false);
      }}
      renderItem={renderItem}
    />
  );
}

export default AffectedList;

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
});
