const ADD_BOOK = 'bookStore/books/addBook';
const DELETE_BOOK = 'bookStore/books/deleteBook';

export const addBook = (newBook) => ({
  type: ADD_BOOK,
  payload: newBook,
});

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  payload: id,
});

const booksReducer = (books = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...books, action.payload];
    case DELETE_BOOK:
      return books.filter((book) => book !== action.payload);
    default:
      return books;
  }
};

export default booksReducer;
