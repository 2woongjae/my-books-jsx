import React, { useEffect } from 'react';
import Book from './Book';

const Books = ({ books, getBooksThunk }) => {
  useEffect(() => {
    getBooksThunk();
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <div>
        {books.map((book) => (
          <Book title={book.title} />
        ))}
      </div>
    </div>
  );
};

export default Books;
