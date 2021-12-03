import React from 'react';

const Menu = ({ name, handleMenuClick }) => {
  return (
    <button
      type='button'
      className='filter-btn'
      onClick={() => handleMenuClick(name)}
    >
      {name}
    </button>
  );
};

export default Menu;
