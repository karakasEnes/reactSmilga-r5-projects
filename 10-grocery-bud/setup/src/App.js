import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

const initialItems = ['test1', 'xy1'];
function App() {
  const [items, setItems] = useState(initialItems);
  const [isAlert, setIsAlert] = useState(false);
  const [isSubmit, setIsSubmit] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmit) {
      setItems([...items, inputValue]);
      setInputValue('');
      setIsAlert(true);
    } else {
      const newItems = items.map((item, index) => {
        if (index === editIndex) {
          return inputValue;
        }
        return item;
      });
      setItems(newItems);
      setIsAlert(true);
      setInputValue('');
    }
  };

  const handleSetSubmit = (item, index) => {
    setIsSubmit(false);
    setInputValue(item);
    setEditIndex(index);
  };

  return (
    <section>
      {isAlert && <Alert setIsAlert={setIsAlert} />}
      <form onSubmit={handleSubmit} className='grocery-form'>
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type='text'
            className='grocery'
          />
          <button type='submit' className='submit-btn'>
            {isSubmit ? 'Submit' : 'Edit'}
          </button>
        </div>
      </form>
      <List handleSetSubmit={handleSetSubmit} items={items} />
    </section>
  );
}

export default App;
