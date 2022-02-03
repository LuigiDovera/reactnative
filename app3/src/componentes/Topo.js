import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import {
    View,
    Image,
  } from 'react-native';

class Topo extends Component{
    render(){
        return(
        <View>
            <Image source={require('D:/reactnative/app3/src/componentes/imgs/jokenpo.png')}></Image>
        </View>
        );
    }
}