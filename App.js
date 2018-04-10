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



type Props = {};
export default class App extends Component<Props> {


  render() {
    return (
      <View style={styles.container}>

          <View style={styles.header}>
              <Text style={{fontSize: 30}}>
                  Administrado - Rentas
                  <Icon name="logo-angular" style={{fontSize: 35}}></Icon>
              </Text>
          </View>
          <Button title="BOTON" style={{ container: { backgroundColor: 'blue' }}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
    header: {
      flex: 1,
        height: 50,
        flexDirection: 'row',
        borderBottomColor: '#47315a',
        borderBottomWidth: 1 / PixelRatio.get(),
    },
    line: {
      width: '100%'
    }
});
