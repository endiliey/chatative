import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat'

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }
  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 2,
          text: 'Hello my friend',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Endi',
            avatar: 'https://dl.dropboxusercontent.com/s/6g9pw83nlt8lqbl/5a5edd95d8ca690562acdc2e-1-2018-01-26T04_46_41.811Z.png',
          },
        },
        {
          _id: 1,
          text: 'Hi Endi',
          createdAt: new Date().setDate(new Date().getDate() + 2),
          user: {
            _id: 2,
            name: 'Endi',
            avatar: 'https://dl.dropboxusercontent.com/s/6g9pw83nlt8lqbl/5a5edd95d8ca690562acdc2e-1-2018-01-26T04_46_41.811Z.png',
          },
        },

      ],
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
    console.log(messages);
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );
  }
}

export default Chat;
