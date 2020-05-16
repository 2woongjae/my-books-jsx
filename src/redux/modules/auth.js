import userService from '../../services/UserService';
import { push } from 'connected-react-router';
import { createActions, handleActions } from 'redux-actions';

const option = {
  prefix: 'my-books-jsx/auth',
};

const { start, success, fail } = createActions(
  {
    SUCCESS: (token) => ({ token }),
  },
  'START',
  'FAIL',
  option,
);

const initialState = {
  token: null,
  loading: false,
  error: null,
};

export const loginThunkAction = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(start());
      await sleep(1000);
      const token = await userService.getToken(email, password);
      localStorage.setItem('token', token);
      dispatch(success(token));
      dispatch(push('/'));
    } catch (error) {
      dispatch(fail(error));
    }
  };
};

export const removeTokenThunkAction = (token) => {
  return async (dispatch) => {
    dispatch(start());
    await sleep(1000);
    await userService.removeToken(token);
    localStorage.removeItem('token');
    dispatch(success(null));
    dispatch(push('/signin'));
  };
};

// 리듀서
const auth = handleActions(
  {
    START: (state) => ({
      token: state.token,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      token: action.payload.token,
      loading: false,
      error: null,
    }),
    FAIL: (state, action) => ({
      token: state.token,
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  option,
);

export default auth;

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
