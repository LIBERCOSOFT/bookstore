import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Book from './Book';
import Form from './Form';
import { fetchBooks } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      {
      Object.keys(books).map((key) => (
        <Book
          title={books[key][0].title}
          author={books[key][0].author}
          category={books[key][0].category}
          key={key}
          id={key}
        />
      ))
}
      <Form />
    </>
  );
};

export default Books;
