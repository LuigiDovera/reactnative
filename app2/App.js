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
  Image,
  Alert
} from 'react-native';

const Estilos = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20,
  },
  
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }

  

  

}

const gerarNovaFrase = () => {
  var numeroAleatorio = Math.random();
  numeroAleatorio = numeroAleatorio * 5;
  numeroAleatorio = Math.floor(numeroAleatorio);

  //frases
  var frases = Array();
  frases[0] = 'aa';
  frases[1] = 'bb';
  frases[2] = 'cc';
  frases[3] = 'dd';
  frases[4] = 'ee';

  var fraseEscolhida = frases[numeroAleatorio];

  Alert.alert(fraseEscolhida);

}

const App: () => Node = () => {
  const { principal, botao, textoBotao} = Estilos;
  return (
    <View style={ principal }>
      
      <Image source={require('./imgs/uvas.png')} />
      
      <TouchableOpacity 
        onPress={gerarNovaFrase}
        style={botao}>
        <Text style={textoBotao}>Nova Frase</Text>
      </TouchableOpacity>
      
    </View>
  
  );
};


export default App;
