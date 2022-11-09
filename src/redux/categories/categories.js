const CHECK_STATUS = 'bookStore/categories/checkStatus';

export const checkStatus = () => (
  {
    type: CHECK_STATUS,
  }
);

const categoriesReducer = (categories = '', action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return categories;
  }
};

export default categoriesReducer;
