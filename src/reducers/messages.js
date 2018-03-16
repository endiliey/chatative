function message(state, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        _id: action._id,
        text: action.text,
        createdAt: action.createdAt,
        user: action.user
      };
    default:
      return state;
  }
}

export default function messages(state = [], action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      if (state.map(m => m._id).includes(action._id)) {
        return state;
      } else {
        return [
          ...state,
          message(undefined, action)
        ];
      }
    case 'SEND_MESSAGE':
      return [
        ...state,
        message(undefined, action)
      ];
    default:
      return state;
  }
}
