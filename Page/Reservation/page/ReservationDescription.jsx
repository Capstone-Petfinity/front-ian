import {useEffect} from 'react';
import {Text, View} from 'react-native';

function ReservationDescription({navigation, route}) {
  const {reservation} = route.params;

  useEffect(() => {
    console.log('reservation:', reservation);
  }, []);

  return (
    <View>
      <Text>reservation description</Text>
    </View>
  );
}
export default ReservationDescription;
