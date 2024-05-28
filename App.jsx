/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import React from 'react';

import LoginScreen from './Page/Login/Login';
import SignUp from './Page/SignUp/SignUp';

import OnwerMain from './Page/Main/OwnerMain';
import VetMain from './Page/Main/VetMain';

import OnwerAIDiagnosis from './Page/AIDiagnosis/Owner/OwnerAIDiagnosis';
import VetAIDiagnosis from './Page/AIDiagnosis/Vet/VetAIDiganosis';

import CameraRender from './Page/AIDiagnosis/Camera/CameraRender';
import GalleryRender from './Page/AIDiagnosis/Gallery/GalleryRender';

import OwnerPictureRender from './Page/AIDiagnosis/Camera/OwnerPictureRender';
import OwnerPictureRender2 from './Page/AIDiagnosis/Gallery/OwnerPictureRender2';
import VetPictureRender from './Page/AIDiagnosis/Camera/VetPictureRender';
import VetPictureRender2 from './Page/AIDiagnosis/Gallery/VetPictureRender2';

import OwnerResult from './Page/AIDiagnosis/Owner/OwnerResult';
import VetResult from './Page/AIDiagnosis/Vet/VetResult';

import OwnerAccount from './Page/Account/Owner/OwnerAccount';
import VetAccount from './Page/Account/Vet/VetAccount';

import RegisterPet from './Page/RegisterPet/RegisterPet';
import RegisterPet2 from './Page/Reservation/page/RegisterPet';

import Reservation1 from './Page/Reservation/page/Reservation1';
import Reservation2 from './Page/Reservation/page/Reservation2';
import Reservation3 from './Page/Reservation/page/Reservation3';
import ReservationDescription from './Page/Reservation/page/ReservationDescription';
import ResultList from './Page/Result/page/ResultList';
import ResultInfo from './Page/Result/page/ResultInfo';

function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen
          name="OwnerMain"
          component={OnwerMain}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="VetMain"
          component={VetMain}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen name="OwnerAccount" component={OwnerAccount} />
        <Stack.Screen name="VetAccount" component={VetAccount} />

        <Stack.Screen name="RegisterPet" component={RegisterPet} />
        <Stack.Screen name="RegisterPet2" component={RegisterPet2} />

        <Stack.Screen name="OwnerAIDiagnosis" component={OnwerAIDiagnosis} />
        <Stack.Screen name="VetAIDiagnosis" component={VetAIDiagnosis} />
        <Stack.Screen name="CameraRender" component={CameraRender} />
        <Stack.Screen name="GalleryRender" component={GalleryRender} />

        <Stack.Screen
          name="OwnerPictureRender"
          component={OwnerPictureRender}
        />
        <Stack.Screen
          name="OwnerPictureRender2"
          component={OwnerPictureRender2}
        />
        <Stack.Screen name="VetPictureRender" component={VetPictureRender} />
        <Stack.Screen name="VetPictureRender2" component={VetPictureRender2} />

        <Stack.Screen name="OwnerResult" component={OwnerResult} />
        <Stack.Screen name="VetResult" component={VetResult} />
        <Stack.Screen name="Reservation1" component={Reservation1} />
        <Stack.Screen name="Reservation2" component={Reservation2} />
        <Stack.Screen name="Reservation3" component={Reservation3} />
        <Stack.Screen
          name="ReservationDescription"
          component={ReservationDescription}
        />

        <Stack.Screen name="ResultList" component={ResultList} />
        <Stack.Screen name="ResultInfo" component={ResultInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
