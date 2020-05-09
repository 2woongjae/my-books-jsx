export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const loginStartAction = () => ({ type: LOGIN_START });
export const loginSuccessAction = (token) => ({ type: LOGIN_SUCCESS, token });
export const loginFailAction = (error) => ({ type: LOGIN_FAIL, error });

export const BOOKS_START = 'BOOKS_START';
export const BOOKS_SUCCESS = 'BOOKS_SUCCESS';
export const BOOKS_FAIL = 'BOOKS_FAIL';

export const booksStartAction = () => ({ type: BOOKS_START });
export const booksSuccessAction = (books) => ({ type: BOOKS_SUCCESS, books });
export const booksFailAction = (error) => ({ type: BOOKS_FAIL, error });
