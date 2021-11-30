import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, clickedTour }) => {
  const renderTours = tours.map((tour) => {
    return <Tour clickedTour={clickedTour} tour={tour} />;
  });

  return <div className='tours'>{renderTours}</div>;
};

export default Tours;
