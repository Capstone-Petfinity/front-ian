import React, {useEffect, useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {StyleSheet, View, Text} from 'react-native';

const data = [
  {label: 'VD', value: '1'},
  {label: 'Lateral', value: '2'},
];

function PositionList({position, setPosition}) {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState();

  const renderItem = item => {
    if (position || isFocus) {
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
      placeholder="자세를 선택하세요"
      data={data}
      maxHeight={300}
      labelField="label"
      valueField="value"
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(true)}
      onChange={item => {
        setPosition(item.label);
        setValue(item.value);
        setIsFocus(false);
      }}
      renderItem={renderItem}
    />
  );
}

export default PositionList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderWidth: 0.2,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: 280,
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
