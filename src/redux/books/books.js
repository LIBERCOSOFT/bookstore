import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_BOOK = 'bookStore/books/addBook';
const DELETE_BOOK = 'bookStore/books/deleteBook';
const SET_FETCHED_BOOKS = 'bookStore/books/setFetchedBooks';

const apiURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/5QhUfSFZl7dr41EG5uKQ/books';

export const fetchBooks = createAsyncThunk(SET_FETCHED_BOOKS, async () => {
  const books = await axios.get(apiURL);
  return books.data;
});

export const addBook = createAsyncThunk(ADD_BOOK, async (newBook) => {
  const response = await axios.post(apiURL, newBook);
  if (response.data === 'Created') {
    const books = await axios.get(apiURL);
    return books.data;
  }
  return null;
});

export const deleteBook = createAsyncThunk(DELETE_BOOK, async (id) => {
  const response = await axios.delete(`${apiURL}/${id}`);
  if (response.data === 'The book was deleted successfully!') {
    const books = await axios.get(apiURL);
    return books.data;
  }
  return null;
});

const booksReducer = (books = [], action) => {
  switch (action.type) {
    case `${ADD_BOOK}/fulfilled`:
    case `${SET_FETCHED_BOOKS}/fulfilled`:
    case `${DELETE_BOOK}/fulfilled`:
      return action.payload;
    default:
      return books;
  }
};

export default booksReducer;
