import React, { Component } from 'react';
import params from './src/params'
import Field from './src/components/Field'
import {
  StyleSheet,
  Text,
  Platform,
  View,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines!</Text>
        <Text style={styles.welcome}>Tamanho da grade:
    {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>

    <Field />
    <Field opened />
    <Field opened nearMines={1} />
    <Field opened nearMines={2} />
    <Field opened nearMines={3} />
    <Field opened nearMines={6} />
    <Field mined />
    <Field mined opened />
    <Field mined opened exploded />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },

});


