import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import TextField from './common/TextField';
import Button from './common/Button';
import Divider from './common/Divider';
import Header from './common/Header';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      avatar: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          headerText={"Who are you ?"}
        /> 
        <Divider />
        <TextField
          placeholder="Your name here"
          value={this.state.name}
          onChangeText={name => this.setState({ name })} 
        />
        <TextField
          placeholder="Your avatar url here"
          value={this.state.avatar}
          onChangeText={avatar => this.setState({ avatar })}
        />
        <Divider />
        <Button onPress={() => console.log("Button pressed")}>
          Start Chatting !
        </Button>
        <Divider />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    marginRight: 10,
    marginLeft: 10
  }
});

export default Login;
