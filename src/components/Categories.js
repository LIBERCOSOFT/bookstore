import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <div className="categories__container">
      <button type="button" onClick={() => dispatch(checkStatus())}>Check status</button>
      <p>{categories}</p>
    </div>
  );
};

export default Categories;
