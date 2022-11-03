import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <div>
    {title}
    {' '}
    {author}
    {' '}
    <button type="button">Delete</button>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
