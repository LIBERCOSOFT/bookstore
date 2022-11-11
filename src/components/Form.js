import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addBook } from '../redux/books/books';

const Form = () => {
  const [formData, setFormData] = useState({ title: '', author: '', category: '' });

  const dispatch = useDispatch();

  const handleInput = (e) => {
    if (e.target.name === 'title') {
      setFormData({
        title: e.target.value,
        author: formData.author,
        category: formData.category,
      });
    } else if (e.target.name === 'author') {
      setFormData({
        title: formData.title,
        author: e.target.value,
        category: formData.category,
      });
    } else {
      setFormData({
        title: formData.title,
        author: formData.author,
        category: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.length > 0 && formData.author.length > 1 && formData.category.length > 1) {
      const newBook = {
        item_id: uuidv4(),
        title: formData.title,
        author: formData.author,
        category: formData.category,
      };
      dispatch(addBook(newBook));
      setFormData({ title: '', author: '', category: '' });
    }
  };

  return (
    <div className="form__container">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" onChange={handleInput} value={formData.title} required />
        <input type="text" name="author" placeholder="Author" onChange={handleInput} value={formData.author} required />
        <select name="category" value={formData.category} onChange={handleInput} required>
          <option value="" disabled>Category</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <input type="submit" value="Add Book" />
      </form>
    </div>

  );
};

export default Form;
