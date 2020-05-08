export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const loginStartAction = () => ({ type: LOGIN_START });
export const loginSuccessAction = (token) => ({ type: LOGIN_SUCCESS, token });
export const loginFailAction = (error) => ({ type: LOGIN_FAIL, error });
