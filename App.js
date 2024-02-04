import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthStack } from './src/navigators/AuthStack';


export default function App() {
  return (
    <NavigationContainer>
        <AuthStack />
    </NavigationContainer>
  );
}