import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native'

export default class APP extends Component {
  render() {
    return (
      <View style={StyleSheet.container}>
        <Text style={StyleSheet.welcome}>Welcome</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
})
