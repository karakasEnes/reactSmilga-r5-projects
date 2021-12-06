import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [data, setData] = useState([]);
  const [comps, setComps] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);

    const c = data.reduce((total, cur) => {
      total.push(cur.company);
      return total;
    }, []);

    setComps(c);
  };

  useEffect(() => {
    getData();
  }, []);

  const activeTab = data && data[activeIndex];

  if (!activeTab) {
    return <div>Loading</div>;
  }

  return (
    <section className='section'>
      <div className='title'>
        <h2>Experience</h2>
        <p className='underline'></p>
      </div>

      <div className='jobs-center'>
        <div className='btn-container'>
          {comps.map((company, index) => {
            const isActive = index === activeIndex ? 'active-btn' : 'false';
            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`job-btn ${isActive}`}
              >
                {company}
              </div>
            );
          })}
        </div>

        <article className='job-info'>
          <h3>{activeTab.title}</h3>
          <h4>{activeTab.company}</h4>
          <p className='job-date'>{activeTab.dates}</p>
          {activeTab.duties.map((duty, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon' />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>

      <button className='btn'>more info</button>
    </section>
  );
}

export default App;
