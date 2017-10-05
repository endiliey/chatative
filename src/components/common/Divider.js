import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import { Colors, Styles } from './Shared';

class Divider extends Component {
  render() {
    return (
      <View style={styles.container} /> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    height: 1,
    backgroundColor: Colors.secondaryColor,
    alignSelf: 'stretch'
  }
});

export default Divider;
