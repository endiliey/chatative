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
      messages: [],
    }
  }

  componentWillMount() {
    /*
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://porcelainfacespa.com/blog/wp-content/uploads/2013/08/suzy__miss_a__png__render__by_gajmeditions-d79dtqa-e1432807580441.png',
          },
        },
      ],
    });
    */
  }

  onSend(text = []) {
    this.props.dispatch(sendMessage(text, this.props.user));
  }

  render() {
    return (
      <GiftedChat
        messages={this.props.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: this.props.user._id,
          avatar: this.props.user.avatar,
          name: this.props.user.name
        }}
      />
    );
  }
}

export default ChatContainer = connect(mapStateToProps)(Chat);
