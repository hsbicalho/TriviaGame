export const LOGIN = 'LOGIN';
export const setPlayer = (userEmail, userName) => ({
  type: LOGIN,
  payload: {
    userEmail,
    userName,
  },
});
