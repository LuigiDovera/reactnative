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
  Button,
  Text,
  View,
} from 'react-native';
import { Component } from 'react/cjs/react.production.min';

class MeuComponente extends Component{
  
  render(){
    return (
      <View>
        <Text>{this.props.teste}</Text>
      </View>
    );
  }
}

class AppComponente extends Component{
  constructor(props){
    super(props);

    this.state = {texto: 'Texto teste 2'}
  }

  alteraTexto(){
    this.setState({texto : 'Outra coisa'});
  }

  render(){
    return(
      <View>
        <MeuComponente teste={this.state.texto}></MeuComponente>
        <Button 
        title='botão'
        onPress={ () => {this.alteraTexto()}}/>
      </View>
    );
  }
}

const App: () => Node = () => {
  return (
    <View>
      <AppComponente></AppComponente>
      
    </View> 
    );
};



export default App;
