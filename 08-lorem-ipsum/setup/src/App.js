import React, { useState } from 'react';
import data from './data';
function App() {
  const [inputValue, setInputValue] = useState(0);
  const [text, setText] = useState([]);

  const handleGenerate = (e) => {
    e.preventDefault();
    const amount = inputValue <= 0 ? 1 : inputValue;
    setText(data.slice(0, amount));
  };

  return (
    <section className='section-center'>
      <h3>TIRED OF BORING LOREM IPSUM?</h3>
      <form onSubmit={handleGenerate} className='lorem-form'>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={inputValue}
          onChange={(e) => setInputValue(parseInt(e.target.value))}
        ></input>
        <button type='submit' className='btn'>
          Generate
        </button>
      </form>
      <article>
        {text.map((singleText, index) => (
          <p key={index}>{singleText}</p>
        ))}
      </article>
    </section>
  );
}

export default App;
