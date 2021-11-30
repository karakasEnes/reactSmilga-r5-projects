import React, { useState } from 'react';

const Tour = ({ tour, clickedTour }) => {
  const { id, image, info, name, price } = tour;

  return (
    <article className='single-tour' key={id} className='tour'>
      <img src={image} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>{price}</h4>
        </div>
        <p>{info}</p>
        <button className='delete-btn' onClick={() => clickedTour(id)}>
          NON INTERESTED
        </button>
      </footer>
    </article>
  );
};

export default Tour;
