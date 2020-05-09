import React, { useEffect } from 'react';
import axios from 'axios';
import Book from './Book';

const Books = ({ books, token, booksStart, booksSuccess, booksFail }) => {
  useEffect(() => {
    async function getBooks() {
      booksStart(); // api 시작
      try {
        await sleep(1000);
        const response = await axios.get('https://api.marktube.tv/v1/book', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        booksSuccess(response.data); // api 성공
      } catch (error) {
        booksFail(error); // api 실패
      }
    }
    getBooks();
  }, [token, booksStart, booksSuccess, booksFail]);

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

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export default Books;
