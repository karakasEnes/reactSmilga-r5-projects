import React, { useEffect } from 'react';

const Alert = ({ setIsAlert }) => {
  useEffect(() => {
    console.log('alert invoked');
    const timeoutId = setTimeout(() => {
      setIsAlert(false);
    }, 1000);

    return () => {
      clearInterval(timeoutId);
    };
  }, []);
  return <h2>alert component</h2>;
};

export default Alert;
