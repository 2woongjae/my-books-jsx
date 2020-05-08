import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from './actions';

const initialState = {
  token: null,
  loading: false,
  error: null,
};

const auth = (state = initialState, action) => {
  if (action.type === LOGIN_START) {
    return {
      token: null,
      loading: true,
      error: null,
    };
  } else if (action.type === LOGIN_SUCCESS) {
    return {
      token: action.token,
      loading: false,
      error: null,
    };
  } else if (action.type === LOGIN_FAIL) {
    return {
      token: null,
      loading: false,
      error: action.error,
    };
  }
  return state;
};

export default auth;
