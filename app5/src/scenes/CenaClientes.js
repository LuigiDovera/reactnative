import React, {Component} from 'react';
import {
    View,
    StatusBar,
    Image,
    StyleSheet,
    Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import BarraNavegacao  from '@components/BarraNavegacao'

const detalheCliente = require('@imgs/detalhe_cliente.png');
const cliente1 = require('@imgs/cliente1.png');
const cliente2 = require('@imgs/cliente2.png');


export default class CenaClientes extends Component {
    
    render(){
        return(
            <View>
                <StatusBar
                    backgroundColor="#CCC"/>
                
                <BarraNavegacao/>

                <View style={styles.cabecalho}>
                    <Image source={detalheCliente}/>
                    <Text style={styles.txtTitulo}>Nossos Clientes</Text>
                </View>

                <View style={styles.detalheCliente}>
                    <Image source={cliente1}/>
                    <Text>Lorem Ipsum</Text>
                </View>

                <View style={styles.detalheCliente}>
                    <Image source={cliente2}/>
                    <Text>Lorem Ipsum</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cabecalho: {
        flexDirection: 'row',
        marginTop: 20,
    },
    txtTitulo: {
        fontSize: 30,
        color: '#b9c941',
        marginLeft: 25,
    },
    detalheCliente: {
        padding: 20,
        marginTop: 10,
    },
    txtDetalheCliente: {
        fontSize: 18,
        marginLeft: 20,
    }
});