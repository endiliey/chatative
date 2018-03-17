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

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    })
  }

  onSend(text = []) {
    this.props.dispatch(sendMessage(text, this.props.user));
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
        user={{
          _id: this.state.user._id,
          avatar: this.state.user.avatar,
          name: this.state.user.name
        }}
      />
    );
  }
}

export default ChatContainer = connect(mapStateToProps)(Chat);
