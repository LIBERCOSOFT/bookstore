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

const initialState = [{
  id: '1',
  title: 'title 1',
  author: 'author 1',
  completed: 0,
},
{
  id: '2',
  title: 'title 2',
  author: 'author 2',
  completed: 0,
}, {
  id: '3',
  title: 'title 3',
  author: 'author 3',
  completed: 0,
}];

const booksReducer = (books = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...books, action.payload];
    case DELETE_BOOK:
      return books.filter((book) => book.id !== action.payload);
    default:
      return books;
  }
};

export default booksReducer;
