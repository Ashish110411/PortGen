import React, { useState } from 'react';
import Main from '../components/Main.js';
import Navbar from '../components/navbar/Navbar.js';

const HomePage = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);
  const closeNav = () => nav && setNav(false);

  return (
    <div className='pages'>
      <Navbar nav={nav} handleNav={handleNav} />
      <Main nav={nav} closeNav={closeNav} handleNav={handleNav} />
    </div>
  );
};

export default HomePage;
