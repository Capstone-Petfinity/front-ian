import {Text} from 'react-native';

function CityList({cityList}) {
  return cityList.map(city => {
    return <Text key={city.id}>{city.name}</Text>;
  });
}

export default CityList;
