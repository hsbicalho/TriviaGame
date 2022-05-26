export const LOGIN = 'LOGIN';
export const setPlayer = (userEmail, userName) => ({
  type: LOGIN,
  payload: {
    name: userName,
    email: userEmail,
  },
});
