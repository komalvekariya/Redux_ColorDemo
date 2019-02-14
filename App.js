
import React, { Component } from 'react';
import { Platform, TextInput, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import ColorView from './redux/ColorView'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <ColorView />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  }

});
