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
import VetAIDiagnosis from './Page/AIDiagnosis/VetAIDiagnosis';
import Account from './Page/Account/Account';

function App(): React.JSX.Element {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="OwnerMain" component={OnwerMain} />
        <Stack.Screen name="VetAIDiagnosis" component={VetAIDiagnosis} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
