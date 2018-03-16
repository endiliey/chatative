import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import { fetchMessages } from './actions';
import LoginContainer from './components/Login';
import ChatContainer from './components/Chat';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

const Screen = connect(
  (state) => ({
    _id: state.user._id
  })
)(( { _id }) => {
  if ( _id !== null ) {
    return (<ChatContainer />);
  } else {
    return (<LoginContainer />);
  }
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Screen />
      </Provider>
    );
  }
}

export default App;
