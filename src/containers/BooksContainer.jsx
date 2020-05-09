import React from 'react';
import Books from '../components/Books';
import { useSelector, useDispatch } from 'react-redux';
import { getBooksThunkAction } from '../redux/actions';

const BooksContainer = ({ token }) => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  function getBooksThunk() {
    dispatch(getBooksThunkAction(token));
  }

  return <Books books={books} token={token} getBooksThunk={getBooksThunk} />;
};

export default BooksContainer;
