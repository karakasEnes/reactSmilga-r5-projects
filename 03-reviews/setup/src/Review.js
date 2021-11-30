import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { id, name, job, image, text, info } = people[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prevVal) => {
      if (prevVal === 0) {
        return people.length - 1;
      } else {
        return prevVal - 1;
      }
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevVal) => {
      if (prevVal === people.length - 1) return 0;
      return prevVal + 1;
    });
  };

  return (
    <article key={id} className='review'>
      <div className='img-container'>
        <img className='person-img' src={image} alt={name} />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn'>
          <FaChevronLeft onClick={() => handlePrev()} />
        </button>
        <button className='next-btn'>
          <FaChevronRight onClick={handleNext} />
        </button>
      </div>
      <button className='random-btn'>Surprise Me</button>
    </article>
  );
};

export default Review;
