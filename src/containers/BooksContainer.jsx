import React, { useCallback } from 'react';
import Books from '../components/Books';
import { useSelector, useDispatch } from 'react-redux';
import {
  booksStartAction,
  booksSuccessAction,
  booksFailAction,
} from '../redux/actions';

const BooksContainer = ({ token }) => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  //
  const booksStart = useCallback(() => {
    dispatch(booksStartAction());
  }, [dispatch]);
  const booksSuccess = useCallback(
    (books) => {
      dispatch(booksSuccessAction(books));
    },
    [dispatch],
  );
  const booksFail = useCallback(
    (error) => {
      dispatch(booksFailAction(error));
    },
    [dispatch],
  );

  return (
    <Books
      books={books}
      token={token}
      booksStart={booksStart}
      booksSuccess={booksSuccess}
      booksFail={booksFail}
    />
  );
};

export default BooksContainer;
