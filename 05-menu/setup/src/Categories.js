import React from 'react';
import Menu from './Menu';

const Categories = ({ categories, handleMenuClick }) => {
  return categories.map((catName) => {
    return <Menu handleMenuClick={handleMenuClick} name={catName} />;
  });
};

export default Categories;
