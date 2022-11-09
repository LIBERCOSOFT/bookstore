import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author, id }) => (
  <div>
    {title}
    {' '}
    {author}
    {' '}
    <button type="button" id={id}>Delete</button>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
