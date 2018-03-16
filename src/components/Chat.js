import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { sendMessage } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  user: state.user,
  messages: state.chatroom.messages,
  isFetching: state.chatroom.meta.isFetching
});

export class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: this.props.messages || [],
      user: this.props.user
    };
  }

  onSend(text) {
    sendMessage(text, this.props.user)
  }

  render() {
    /*
    return (this.props.isFetching ? 
      <ActivityIndicator size="large" color="#0000ff" /> :
      */
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={this.state.user}
      />
    );
  }
}

export default ChatContainer = connect(mapStateToProps)(Chat);
