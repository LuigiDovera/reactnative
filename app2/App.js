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
  TouchableOpacity,
} from 'react-native';

const Estilos = {
  principal: {
    flex: 1,
    backgroundColor: 'cornflowerblue'
  },

  botao: {
    backgroundColor: '#48BBEC',
    padding: 10,
    borderColor: '#1d8eb8', 
    borderWidth: 3,
    borderRadius: 8,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center'
  }

}

const botaoPressionado = () => {
  alert('Botão pressionado');
}

const App: () => Node = () => {
  const { principal, botao, textoBotao } = Estilos;
  return (
    <View style={ principal }>
      
      <TouchableOpacity style = { botao }
      onPress={botaoPressionado}>
        <Text style = { textoBotao }> Clique Aqui </Text>
      </TouchableOpacity>

    </View>
  
  );
};


export default App;
