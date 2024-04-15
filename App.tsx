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

import OwnerAccount from './Page/Account/Owner/OwnerAccount';
import VetAccount from './Page/Account/Vet/VetAccount';
import OwnerResult from './Page/AIDiagnosis/Owner/OwnerResult';
import VetResult from './Page/AIDiagnosis/Vet/VetResult';
import {RecoilRoot} from 'recoil';

function App(): React.JSX.Element {
  const Stack = createStackNavigator();

  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="OwnerAccount" component={OwnerAccount} />
          <Stack.Screen name="VetAccount" component={VetAccount} />
          <Stack.Screen name="OwnerMain" component={OnwerMain} />
          <Stack.Screen name="VetMain" component={VetMain} />
          <Stack.Screen name="OwnerAIDiagnosis" component={OnwerAIDiagnosis} />
          <Stack.Screen name="VetAIDiagnosis" component={VetAIDiagnosis} />
          <Stack.Screen name="OwnerResult" component={OwnerResult} />
          <Stack.Screen name="VetResult" component={VetResult} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default App;
