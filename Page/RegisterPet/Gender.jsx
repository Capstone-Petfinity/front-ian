import {useState, useEffect} from 'react';

import {StyleSheet, View} from 'react-native';
import {RadioButton} from 'react-native-radio-buttons-group';

function Gender({setGender}) {
  const [selectedId, setSelectedId] = useState();
  const [maleSelected, setMaleSelected] = useState(false);
  const [femaleSelected, setFemaleSelected] = useState(false);

  useEffect(() => {
    setGender(selectedId);
    if (selectedId == '남') {
      setMaleSelected(true);
      setFemaleSelected(false);
      return;
    }

    if (selectedId == '여') {
      setMaleSelected(false);
      setFemaleSelected(true);
      return;
    }
  }, [selectedId]);

  return (
    <View style={styles.container}>
      <RadioButton
        onPress={() => setSelectedId('남')}
        selectedId={selectedId}
        borderColor="black"
        borderSize={0.5}
        layout="row"
        color="#00835C"
        id="1"
        value="male"
        label="남"
        selected={maleSelected}
        size={20}
      />

      <RadioButton
        onPress={() => setSelectedId('여')}
        selectedId={selectedId}
        borderColor="black"
        borderSize={0.5}
        layout="row"
        color="#00835C"
        id="2"
        value="female"
        label="여"
        selected={femaleSelected}
        size={20}
      />
    </View>
  );
}

export default Gender;

const styles = StyleSheet.create({
  container: {
    width: 280,
    marginBottom: 10,
    paddingBottom: 5,
    paddingTop: 5,
    display: 'flex',
    flexDirection: 'row',
  },

  radio: {
    borderWidth: 1,
  },
});
