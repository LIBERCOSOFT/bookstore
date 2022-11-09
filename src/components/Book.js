import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteBook } from '../redux/books/books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    dispatch(deleteBook(e.target.id));
  };
  return (
    <div>
      {title}
      {' '}
      {author}
      {' '}
      <button type="button" id={id} onClick={handleDelete}>Delete</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
