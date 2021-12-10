import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';
const Home = () => {
  const { openModal, openSideBar } = useGlobalContext();

  return (
    <main>
      <button className='sidebar-toggle' onClick={openSideBar}>
        <FaBars />
      </button>
      <button onClick={openModal} className='btn'>
        show modal
      </button>
    </main>
  );
};

export default Home;
