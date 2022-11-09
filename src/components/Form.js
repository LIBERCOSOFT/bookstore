import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addBook } from '../redux/books/books';

const Form = () => {
  const [formData, setFormData] = useState({ title: '', author: '' });

  const dispatch = useDispatch();

  const handleInput = (e) => {
    if (e.target.name === 'title') {
      setFormData({
        title: e.target.value,
        author: formData.author,
      });
    } else {
      setFormData({
        title: formData.title,
        author: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.length > 0 && formData.author.length > 1) {
      const newBook = {
        id: uuidv4(),
        title: formData.title,
        author: formData.author,
        completed: 0,
      };
      dispatch(addBook(newBook));
      setFormData({ title: '', author: '' });
    }
  };

  return (

    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" onChange={handleInput} value={formData.title} />
      <input type="text" name="author" placeholder="Author" onChange={handleInput} value={formData.author} />
      <input type="submit" value="Submit" />
    </form>

  );
};

export default Form;
