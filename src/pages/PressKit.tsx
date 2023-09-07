// React + Web3 Essentials
import React from 'react';

// External Components
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';

function PressKit() {
  // React GA Analytics
  ReactGA.pageview('/presskit');

  return (
    <>
      <main>
        <h2>Press Kit</h2>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default PressKit;