import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteBook } from '../redux/books/books';

const Book = ({
  title, author, category, id,
}) => {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    dispatch(deleteBook(e.target.id));
  };
  return (
    <div className="book__item">
      <div className="details">
        <p>{category}</p>
        <h2>{title}</h2>
        <p className="author">{author}</p>
        <div className="details__btn">
          <button type="button" id={id}>Comments</button>
          <button type="button" id={id} onClick={handleDelete}>Remove</button>
          <button type="button" id={id}>Edit</button>
        </div>
      </div>

      <div className="progress">
        <div className="progress__bar__container">
          <div className="progress__bar" />
        </div>
        <div className="progress__percent__container">
          <p className="progress__percent">
            {Math.floor(Math.random() * 100)}
            %
          </p>
          <p className="progress__completed">Completed</p>
        </div>
        <div className="divider" />
      </div>
      <div className="chapter">
        <span>CURRENT CHAPTER</span>
        <p>Chapter 17</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
