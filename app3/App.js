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
} from 'react-native';
import { Component } from 'react/cjs/react.production.min';

class MeuComponente extends Component{
  render(){
    return (
      <View>
        <Text>{this.props.propriedade1}</Text>
        <Text>{this.props.xyz}</Text>
        <Text>{this.props.p}</Text>
      </View>
    );
  }
}

const App: () => Node = () => {
  return (
    <MeuComponente propriedade1='Banana' xyz='Abacaxi' p='Uva'/>
  );
};



export default App;
