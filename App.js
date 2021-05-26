import React, { Component } from 'react';
import params from './src/params'
import Field from './src/components/Field'
import MineField from './src/components/MineField'
import {
  StyleSheet,
  Text,
  Platform,
  View,
} from 'react-native';
import { createMinedBoard } from './src/functions' 

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
    }

  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines!</Text>
        <Text style={styles.welcome}>Tamanho da grade:
    {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
    <View style={styles.board}>
      <MineField board={this.state.board} />
    </View>
    
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }

});


