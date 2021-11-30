import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import questions from './data';

const Question = ({ question }) => {
  const [isActive, setIsActive] = useState(false);
  const { id, title, info } = question;

  const Info = () => {
    return <p>{info}</p>;
  };

  return (
    <article key={id} className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setIsActive(!isActive)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <Info />}
    </article>
  );
};

export default Question;
