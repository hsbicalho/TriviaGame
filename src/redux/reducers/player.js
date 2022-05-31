import { LOGIN, PLAYER_SCORE } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return { ...state, ...action.payload };
  case PLAYER_SCORE:
    return { ...state, score: action.score };
  default:
    return state;
  }
};

export default playerReducer;
