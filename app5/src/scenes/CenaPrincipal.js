import React, {Component} from 'react';
import {
    View,
    StatusBar,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import BarraNavegacao  from '@components/BarraNavegacao'

const logo = require('@imgs/logo.png');
const menuCliente = require('@imgs/menu_cliente.png');
const menuContato = require('@imgs/menu_contato.png');
const menuEmpresa = require('@imgs/menu_empresa.png');
const menuServico = require('@imgs/menu_servico.png');


export default function CenaPrincipal({ navigation })  {
    
        return(
            <View>
                <StatusBar
                    backgroundColor="#CCC"/>
                
                <BarraNavegacao/>

                <View style={styles.logo}>
                    <Image source={logo}/>
                </View>

                <View style={styles.menu}>
                    <View style={styles.menuGrupo}>
                        <TouchableOpacity
                            onPress={ () => navigation.navigate('Clientes')}>
                            <Image style={styles.imgMenu} source={menuCliente}/>
                        </TouchableOpacity>
                        
                        <Image style={styles.imgMenu} source={menuContato}/>
                    </View>    

                    <View style={styles.menuGrupo}>
                        <Image style={styles.imgMenu} source={menuEmpresa}/>
                        <Image style={styles.imgMenu} source={menuServico}/>
                    </View>
                </View>
            </View>
        );
}

const styles = StyleSheet.create({
    logo: {
        marginTop: 30,
        alignItems: 'center',

    },
    menu: {
        alignItems: 'center',
    },
    menuGrupo:{
        flexDirection: 'row',
    },
    imgMenu:{
        margin: 15,
    }
});