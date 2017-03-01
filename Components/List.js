import React, { Component } from 'react'
import { AppRegistry, ListView, View, Text, StyleSheet } from 'react-native'

import { Button } from 'react-native-elements'

class ButtonsList extends Component {
  render() {
    return(
      <View>
  <Button
  style={styles.us}
  raised
  icon={{name: 'face'}}
    title='About Us' />

  <Button
  style={styles.location}
  raised
  icon={{name: 'location-on'}}
    title='Locations' />

  <Button 
  style={styles.keycodes}
  raised
  icon={{name:'vpn-key'}}
    title='Generate Keycode' />

  <Button 
  style={styles.partner}
  raised
  icon={{name:'attach-money'}}
    title='Partnership Opportunities' />
  <Button 
    style={styles.membership}
    small
    raised
    icon={{name:'person'}}
      title='Membership' />
  

  </View>
    );
  }
}

const styles = StyleSheet.create({
  us: {
    color: '#639df9',
    borderRadius: 5
  },
  red: {
    color: 'red',
  },
});


module.exports = ButtonsList;