export const LOGIN = 'LOGIN';
export const PLAYER_SCORE = 'PLAYER_SCORE';
export const PLAYER_HITS = 'PLAYER_HITS';

export const setPlayer = (userEmail, userName) => ({
  type: LOGIN,
  payload: {
    name: userName,
    gravatarEmail: userEmail,
  },
});

export const playerScore = (score) => ({
  type: PLAYER_SCORE,
  score,
});

export const setHit = (hits) => ({
  type: PLAYER_HITS,
  hits,
});
