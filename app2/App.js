/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

const Estilos = {
  principal: {
    flex: 1,
    backgroundColor: 'cornflowerblue'
  },

  conteudo1: {
    flex: 2,
    backgroundColor: 'brown'
  },

  conteudo2: {
    flex: 8,
    backgroundColor: 'yellowgreen'
  },

  conteudo3: {
    flex: 1,
    backgroundColor: 'orangered'
  }

}

const App: () => Node = () => {
  const { principal, conteudo1, conteudo2, conteudo3 } = Estilos;
  return (
    <View style={ principal }>
      
      <Button 
        title = "Clique aqui"

      />

    </View>
  
  );
};


export default App;
