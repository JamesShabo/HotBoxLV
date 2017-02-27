'use strict'

//ReactNative Componenets

import React, {Component} from 'react';
import { 
  View,
  Text,
  List,
  ListView,
  Image,
  StyleSheet,
  AppRegistry
} from 'react-native'

 

//Imported Components
const ButtonsList = require('./List')


class Home extends Component {
  render() {
    return (
    <View style={styles.container}>
        <Image style={styles.logo} 
        source={require('../Logo.jpg')} />
      <Text style={styles.largeText}>Welcome to the Hot Box!</Text>
          <ButtonsList></ButtonsList>
      <Text style={styles.logoText}>Support The Cause!</Text>
    <Image style={styles.goFundMe}
      source={require('../GoFundMeLogo.png')} />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee'
  },
  largeText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor: '#D8870A'
  },
  logo:{
    alignItems: 'center',
    height: 100,
    width:100,
    borderRadius: 5,
  },
  menuText:{
    backgroundColor:'#000',
    color:'#fff'
  },
  goFundMe:{
    height:30,
    width:100,
    marginTop: 0,
  },
  logoText:{
    fontSize:20,
    textAlign:'center',
    color: '#fff',
  }
});

module.exports = Home;