const INITIAL_STATE = {
  userName: '',
  email: '',
};

const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return { ...state, ...action.payload };
  default:
    return state;
  }
};

export default playerReducer;
