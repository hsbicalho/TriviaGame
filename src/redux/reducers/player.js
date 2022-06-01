import { LOGIN, PLAYER_SCORE, PLAYER_HITS } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
  hits: 0,
};

const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return { ...state, ...action.payload };
  case PLAYER_SCORE:
    return { ...state, score: action.score };
  case PLAYER_HITS:
    return { ...state, hits: action.hits };
  default:
    return state;
  }
};

export default playerReducer;
