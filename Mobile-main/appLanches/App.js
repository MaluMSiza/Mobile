import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import FormScreen from './components/FormScreen';
import ConsultaScreen from './components/ConsultaScreen';
import LancheLiberationScreen from './components/LancheLiberationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          name="FormScreen"
          component={FormScreen}
        />
        <Stack.Screen
          name="ConsultaScreen"
          component={ConsultaScreen}
        />
        <Stack.Screen
          name="LancheLiberationScreen"
          component={LancheLiberationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
