import React from 'react';

const Item = ({ item }) => {
  return (
    <article className='menu-item'>
      <img className='photo' src={item.img} alt={item.title} />
      <div className='item-info'>
        <header>
          <h4>{item.title}</h4>
          <h4 className='price'>$ {item.price}</h4>
        </header>
        <p></p>
      </div>
    </article>
  );
};

export default Item;
