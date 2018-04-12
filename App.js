/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    Image,
    PixelRatio,
    Button
} from 'react-native';

import { COLOR, ThemeProvider, Card } from 'react-native-material-ui';

import Icon from 'react-native-vector-icons/Ionicons'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import  { Header }  from './components/header/header'
import  { TableData }  from './components/shared/table'

type Props = {};
export default class App extends Component<Props> {


  render() {
      const { table, container, h1 } = styles
    return (
      <View style={container}>
          <Header headerText={'Administrado - Rentas '}></Header>
          <Text style={h1}>Listado de Contribuyentes</Text>
          <View style={table}>
              <TableData ></TableData>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'column',
    justifyContent: 'center',
  },
    table: {
      width: '100%',
        marginTop: 20
    },
    h1: {
      fontSize: 20,
        marginTop: 10
    }
});
