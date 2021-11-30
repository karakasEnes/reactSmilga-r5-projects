import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';
function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getTours = async () => {
    const tours = await fetch(url)
      .then((response) => {
        console.log(response);
        if (response.status >= 200 && response.status < 299) {
          console.log(response);
          setIsError(false);
          return response.json();
        } else {
          setIsError(true);
          setIsLoading(false);
          throw Error('Best Error EVER');
        }
      })
      .then((data) => {
        console.log(data);
        setIsError(false);
        setIsLoading(false);
        setTours(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTours();
  }, []);

  const Button = () => {
    // const [isShow, setIsShow] = useState();
    return <button onClick={() => getTours()}>REFRESH</button>;
  };

  const clickedTour = (tourID) => {
    const newTours = tours.filter((tour) => {
      return tour.id !== tourID;
    });

    setTours(newTours);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>ERROR!</div>;
  }

  return (
    <main>
      <section>
        <h2 className='title'>Our Tours</h2>
        {tours.length > 0 ? (
          <Tours tours={tours} clickedTour={clickedTour} />
        ) : (
          <Button />
        )}
      </section>
    </main>
  );
}

export default App;
