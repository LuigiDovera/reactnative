/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { Component } from 'react/cjs/react.production.min';
import {
  Button,
  Text,
  View,
} from 'react-native';
import Topo from './src/componentes/Topo'


class App3 extends Component{
  constructor(props){
    super(props);

    this.state = {  escolhaUsuario : '', 
                    escolhaComputador : '',
                    resultado : '',
                  };
  }
  
  jokenpo(escolhaUsuario){
    
    var numeroAleatorio = Math.floor(Math.random() * 3);
    
    var escolhaComputador = '';
    switch(numeroAleatorio){
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
    }


    var resultado = '';
    if(escolhaUsuario == escolhaComputador){
      resultado = 'empate';
    }else if(escolhaUsuario == 'tesoura'){
      if(escolhaComputador == 'pedra') resultado = 'derrota';
      else resultado = 'vitória';
    }else if(escolhaUsuario == 'pedra'){
      if(escolhaComputador == 'papel') resultado = 'derrota';
      else resultado = 'vitória';
    }else if(escolhaUsuario == 'papel'){
      if(escolhaComputador == 'tesoura') resultado = 'derrota';
      else resultado = 'vitória';
    }


    this.setState({ escolhaUsuario : escolhaUsuario,
                    escolhaComputador : escolhaComputador,
                    resultado : resultado,
                });

    

  }

  render(){
    return(
      <View>

        <Topo></Topo>
        <View></View>
        <View></View>

        <Text>Escolha do computador: {this.state.escolhaComputador}</Text>
        <Text>Escolha do usuário: {this.state.escolhaUsuario}</Text>
        <Text>Resultado: {this.state.resultado}</Text>
        <Button title='pedra' onPress={ () => {this.jokenpo('pedra')}}/>
        <Button title='papel' onPress={ () => {this.jokenpo('papel')}}/>
        <Button title='tesoura' onPress={ () => {this.jokenpo('tesoura')}}/>
      </View>
    );
  }
}




const App: () => Node = () => {
  
  
  return (
    <App3></App3>
    );
};



export default App;
