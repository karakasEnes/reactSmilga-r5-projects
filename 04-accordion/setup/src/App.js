import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  const renderQuestions = () => {
    return data.map((question) => {
      return <SingleQuestion question={question} />;
    });
  };

  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>{renderQuestions()}</section>
      </div>
    </main>
  );
}

export default App;
