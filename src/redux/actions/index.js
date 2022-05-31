export const LOGIN = 'LOGIN';
export const PLAYER_SCORE = 'PLAYER_SCORE';

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
