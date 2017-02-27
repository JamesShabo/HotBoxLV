import React, {Component} from 'react';
import {Drawer} from 'react-native-drawer'

class Application extends Component {  
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  render () {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        content={<List />}
        >
        <App />
      </Drawer>
    )
  }
}

module.exports = Application;