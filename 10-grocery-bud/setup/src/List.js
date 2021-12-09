import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({ items, handleSetSubmit }) => {
  return (
    <div className='grocery-container'>
      <div className='grocery-list'>
        {items.map((item, index) => {
          return (
            <article key={index} className='grocery-item'>
              <p className='title'>{item}</p>
              <div className='btn-container'>
                <button className='edit-btn'>
                  <FaEdit onClick={() => handleSetSubmit(item, index)} />
                </button>
                <button className='delete-btn'>
                  <FaTrash />
                </button>
              </div>
            </article>
          );
        })}
      </div>
      <button className='clear-btn'>clear items</button>
    </div>
  );
};

export default List;
