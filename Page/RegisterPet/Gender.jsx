import {useState, useMemo, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

function Gender({setGender}) {
  const radioButtons = useMemo(
    () => [
      {
        id: '1',
        label: '남',
        value: 'male',
      },
      {
        id: '2',
        label: '여',
        value: 'female',
      },
    ],
    [],
  );

  const [selectedId, setSelectedId] = useState();

  useEffect(() => {
    setGender(selectedId);
  }, [selectedId]);

  return (
    <View style={styles.container}>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={setSelectedId}
        selectedId={selectedId}
        layout="row"></RadioGroup>
    </View>
  );
}

export default Gender;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 0.2,
    width: 280,
    marginBottom: 10,
    paddingBottom: 5,
    paddingTop: 5,
  },
});
