import React from 'react';
import { useSelector } from 'react-redux';

import Book from './Book';
import Form from './Form';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <>
      {books.map((book) => (
        <Book title={book.title} author={book.author} key={book.id} id={book.id} />
      ))}
      <Form />
    </>
  );
};

export default Books;
