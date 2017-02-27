import React, { Component } from 'react'
import { AppRegistry, ListView, View, Text, StyleSheet } from 'react-native'

import { Button } from 'react-native-elements'

class ButtonsList extends Component {
  render() {
    return(
      <Button
      style={styles.aboutUs}
  title='About Us' />

    );
  }
}

const styles = StyleSheet.create({
  aboutUs: {
    color: '#fff',
  },
  red: {
    color: 'red',
  },
});


module.exports = ButtonsList;