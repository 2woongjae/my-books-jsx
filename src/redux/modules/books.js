import BookService from '../../services/BookService';
import { createActions, handleActions } from 'redux-actions';
import { delay, put, call, takeLatest } from 'redux-saga/effects'; // 사가 이펙트 추가

const option = {
  prefix: 'my-books-jsx/books',
};

const { start, success, fail } = createActions(
  {
    SUCCESS: (books) => ({ books }),
  },
  'START',
  'FAIL',
  option,
);

// 리듀서 초기값
const initialState = {
  books: [],
  loading: false,
  error: null,
};

// thunk 함수
export const getBooksThunkAction = (token) => {
  return async (dispatch, getState) => {
    dispatch(start()); // api 시작
    try {
      await sleep(1000);
      const books = await BookService.getBooks(token);
      dispatch(success(books)); // api 성공
    } catch (error) {
      dispatch(fail(error)); // api 실패
    }
  };
};

// saga 함수
function* getBooksSaga(action) {
  const token = action.payload.token;
  try {
    yield put(start()); // api 시작
    yield delay(2000);
    const books = yield call(BookService.getBooks, token);
    yield put(success(books));
  } catch (error) {
    yield put(fail(error));
  }
}

const START_SAGA = 'START_SAGA';

export const startSaga = (token) => ({ type: START_SAGA, payload: { token } });

export function* booksSaga() {
  yield takeLatest(START_SAGA, getBooksSaga);
}

// 리듀서
const books = handleActions(
  {
    START: (state) => ({
      books: state.books,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      books: action.payload.books,
      loading: false,
      error: null,
    }),
    FAIL: (state, action) => ({
      books: state.books,
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  option,
);

export default books;

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
