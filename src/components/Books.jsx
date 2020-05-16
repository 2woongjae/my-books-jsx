import React, { useEffect } from 'react';
import Book from './Book';
import { Button } from 'antd';

const Books = ({
  books,
  getBooksThunk,
  removeTokenThunk,
  loading,
  getBooksSaga,
}) => {
  useEffect(() => {
    getBooksSaga();
    getBooksSaga();
    getBooksSaga();
    getBooksSaga();
    getBooksSaga();
  }, []);

  return (
    <div>
      <Button onClick={click} loading={loading}>
        Logout
      </Button>
      <h1>Books</h1>
      <div>
        {books.map((book) => (
          <Book title={book.title} />
        ))}
      </div>
    </div>
  );

  function click() {
    removeTokenThunk();
  }
};

export default Books;
