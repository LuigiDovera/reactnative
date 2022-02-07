/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import CenaPrincipal from '@scenes/CenaPrincipal';
import CenaClientes from '@scenes/CenaClientes';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Principal'>

        <Stack.Screen
          name = 'Principal'
          component = {CenaPrincipal}
        />

        <Stack.Screen
          name = 'Clientes'
          component = {CenaClientes}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
