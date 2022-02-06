import React, {Component} from 'react';
import {
    Text,
    View,
} from 'react-native';
import axios from 'axios';
import Itens from './Itens';

export default class ListaItens extends Component {
    
    componentDidMount(){

    }
    
    render(){
        return(
            <View>
                <Itens></Itens>
                <Itens></Itens>
                <Itens></Itens>
            </View>
        );
    }
}