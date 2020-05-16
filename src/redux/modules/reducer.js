import { combineReducers } from 'redux';
import auth from './auth';
import books from './books';
import { connectRouter } from 'connected-react-router';

const reducer = (history) =>
  combineReducers({
    auth,
    books,
    router: connectRouter(history),
  });

export default reducer;
