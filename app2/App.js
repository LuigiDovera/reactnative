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
  Image
} from 'react-native';

const Estilos = {
  principal: {
    backgroundColor: 'cornflowerblue',
    paddingTop: 40,
  },

  imagem: {
    justifyContent: 'flex-end',
    padding: 5
  }
  

  

}


const App: () => Node = () => {
  const { principal, imagem } = Estilos;
  return (
    <View style={ principal }>
      
      <Image style={imagem} source={ require('./imgs/uvas.png')} >
        <Text>Legenda para a foto</Text>
      </Image> {/* Não é mais suportado, Image não pode ter componentes filhos*/}
      
      <Image source={ {uri: 'https://avatars.githubusercontent.com/u/38481701?v=4'}} 
              style={{width:300, height: 300}}
      />
      
    </View>
  
  );
};


export default App;
