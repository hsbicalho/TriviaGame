export const LOGIN = 'LOGIN';
export const setUser = (email, userName) => ({
  type: LOGIN,
  payload: {
    email,
    userName,
  },
});
