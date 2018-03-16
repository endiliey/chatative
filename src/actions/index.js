import firebase from '../firebase';

export function addMessage(message) {
  return {
    type: 'ADD_MESSAGE',
    ...message
  };
}

export function sendMessage(text, user) {
  return function (dispatch) {
    let msg = {
      text: text,
      createdAt: now,
      user: {
        _id: user._id,
        avatar: user.avatar
      }
    };

    const newMsgRef = firebase.database()
                              .ref('messages')
                              .push();
    msg._id = newMsgRef.key;
    newMsgRef.set(msg);

    dispatch(addMessage(msg));
  }
}

export function setIsFetching(isFetching) {
  return {
    type: 'SET_IS_FETCHING',
    isFetching: isFetching
  };
}

export function receiveMessages(messages) {
  return function (dispatch) {
    Object.values(messages).forEach((msg) => {

      // process msg from server 
      var item = {
        _id: msg._id,
        text: msg.text,
        createdAt: new Date(msg.createdAt),
        user: {
          _id: msg.user._id,
          avatar: msg.user.avatar
        }
      };
      dispatch(addMessage(item));
    });

    dispatch(setIsFetching(false));
  }
}


export function fetchMessages() {
  return function (dispatch) {
    dispatch(setIsFetching(true));

    console.log("fetch messages action here");
    firebase.database()
            .ref('messages')
            .limitToLast(20)
            .on('value', (snapshot) => {
              setTimeout(() => {
                const messages = snapshot.val() || [];

                dispatch(receiveMessages(messages))
              }, 1);
            });
  }
}

export function setUserName(name) {
  return {
    type: 'SET_USER_NAME',
    name
  };
}

export function setUserId(_id) {
  return {
    type: 'SET_USER_ID',
    _id
  };
}

export function setUserAvatar(avatar) {
  return {
    type: 'SET_USER_AVATAR',
    avatar: avatar && avatar.length > 0 ? avatar : 'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_400x400.png'
  };
}

export function login() {
  return function (dispatch) {

    firebase.auth()
            .signInAnonymously()
            .then((user) => {
              dispatch(setUserId(user.uid));
              dispatch(fetchMessages());
            });
  }
}

