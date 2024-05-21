import React, {useEffect, useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {StyleSheet, View, Text} from 'react-native';

const nullData = [{label: '부위를 먼저 선택해주세요.', value: '-1'}];
const eyeData = [
  {label: '결막염', value: 'eb07'},
  {label: '궤양성각막질환', value: 'eb08'},
  {label: '비궤양성각막질환', value: 'eb09'},
  {label: '색소침착성결막염', value: 'eb05'},
  {label: '백내장', value: 'eb010'},
  {label: '유리체변성', value: 'eb011'},
];

const skinData = [
  {label: '구진플라크', value: 'sk01'},
  {label: '비듬각질상피성잔고리', value: 'sk02'},
  {label: '태선화과다색소침착', value: 'sk03'},
  {label: '농포여드름', value: 'sk04'},
  {label: '미란궤양', value: 'sk05'},
  {label: '결절종괴', value: 'sk06'},
];

const stomachData = [
  {label: '복부종양', value: 'ab04'},
  {label: '비뇨기결석', value: 'ab05'},
  {label: '복수', value: 'ab09'},
];

const chestData = [
  {label: '기관허탈', value: 'ch02'},
  {label: '종격동변위', value: 'ch03'},
  {label: '흉강종양', value: 'ch04'},
  {label: '기흉', value: 'ch05'},
  {label: '횡경막탈장', value: 'ch06'},
];

const skeletalData = [{label: '슬개골탈구', value: 'mu05'}];

function DiseaseList({area, disease, setDisease}) {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState();
  const [data, setData] = useState(nullData);

  const renderItem = item => {
    if (disease || isFocus) {
      return (
        <View style={styles.item}>
          <Text style={styles.textItem}>{item.label}</Text>
        </View>
      );
    }
  };

  useEffect(() => {
    if (area === 'eye') setData(eyeData);
    if (area === 'skin') setData(skinData);
    if (area === 'stomach') setData(stomachData);
    if (area === 'chest') setData(chestData);
    if (area === 'skeletal') setData(skeletalData);
  }, [area]);

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      placeholder="의심 질병을 선택하세요"
      data={data}
      maxHeight={100}
      labelField="label"
      valueField="value"
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(true)}
      onChange={item => {
        setDisease(item.value);
        setValue(item.value);
        setIsFocus(false);
      }}
      renderItem={renderItem}
    />
  );
}

export default DiseaseList;

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
