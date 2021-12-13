import React from 'react';
import './Navbar.css';
import { useGlobal } from './context';

function Navbar() {
  const { amount } = useGlobal();

  return (
    <section className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <h3>shopping chart</h3>
          <p>{amount} items</p>
        </div>
      </div>
      <div className='line'></div>
    </section>
  );
}

export default Navbar;
