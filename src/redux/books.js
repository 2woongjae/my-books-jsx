import { BOOKS_START, BOOKS_SUCCESS, BOOKS_FAIL } from './actions';

const initialState = {
  books: [],
  loading: false,
  error: null,
};

const books = (state = initialState, action) => {
  switch (action.type) {
    case BOOKS_START:
      return {
        books: state.books,
        loading: true,
        error: null,
      };
    case BOOKS_SUCCESS:
      return {
        books: action.books,
        loading: false,
        error: null,
      };
    case BOOKS_FAIL:
      return {
        books: state.books,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default books;
