import React from 'react';
import Books from '../components/Books';
import { useSelector, useDispatch } from 'react-redux';
import { getBooksThunkAction, startSaga } from '../redux/modules/books';
import { removeTokenThunkAction } from '../redux/modules/auth';

const BooksContainer = ({ token }) => {
  const books = useSelector((state) => state.books.books);
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();

  function getBooksThunk() {
    dispatch(getBooksThunkAction(token));
  }

  function getBooksSaga() {
    dispatch(startSaga(token));
  }

  function removeTokenThunk() {
    dispatch(removeTokenThunkAction(token));
  }

  return (
    <Books
      books={books}
      token={token}
      loading={loading}
      getBooksThunk={getBooksThunk}
      removeTokenThunk={removeTokenThunk}
      getBooksSaga={getBooksSaga}
    />
  );
};

export default BooksContainer;
