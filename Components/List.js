import React, { Component } from 'react'
import { AppRegistry, ListView, View, Text, StyleSheet } from 'react-native'

import { Button } from 'react-native-elements'

class ButtonsList extends Component {
  render() {
    return(
<View>
  <Button
  buttonStyle={styles.us}
  raised
  icon={{name: 'face'}}
    title='About Us' />

  <Button
  buttonStyle={styles.location}
  raised
  icon={{name: 'location-on'}}
    title='Locations' />

  <Button 
  buttonStyle={styles.keycodes}
  raised
  icon={{name:'vpn-key'}}
    title='Generate Keycode' />

  <Button 
  buttonStyle={styles.partner}
  raised
  icon={{name:'attach-money'}}
    title='Partnership Opportunities' />

  <Button 
  buttonStyle={styles.membership}
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
    backgroundColor: '#639df9',
    borderRadius: 5
  },
us: {
    backgroundColor: '#639df9',
    borderRadius: 5
  },
});


module.exports = ButtonsList;