import React, {useEffect, useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {StyleSheet, View, Text} from 'react-native';

const nullImage = [{label: '사진 유형을 먼저 선택해주세요', value: '1'}];

const cameraImage = [
  {label: '안구', value: '1'},
  {label: '피부', value: '2'},
];

const microscopeImage = [{label: '피부', value: '1'}];

const xRayimage = [
  {label: '근골격계', value: '1'},
  {label: '복부', value: '2'},
  {label: '흉부', value: '3'},
];

/* 
  카메라 이미지: 안구 질환 데이터, 피부 질환 1
  현미경: 피부 질환
  X-Ray: 근골격계 데이터, 복부 데이터, 흉부 데이터
  */

function AffectedList({format, area, setArea}) {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState();
  const [data, setData] = useState();

  const renderItem = item => {
    if (value || isFocus) {
      return (
        <View style={styles.item}>
          <Text style={styles.textItem}>{item.label}</Text>
        </View>
      );
    }
  };

  useEffect(() => {
    if (format === null) setData(nullImage);
    if (format === '카메라 이미지') setData(cameraImage);
    if (format === '현미경') setData(microscopeImage);
    if (format === 'X-Ray') setData(xRayimage);
    console.log(data);
    setArea(null);
  }, [format]);

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
        setArea(item.label);
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
    marginTop: 20,
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
