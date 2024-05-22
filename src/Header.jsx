import React from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';

function Header({ OpenSidebar }) {
  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        <div className='search-bar'>
          <BsSearch className='icon search-icon' />
          <input type='text' placeholder='Search...' className='search-input' />
        </div>
      </div>
      <div className='header-right'>
        <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />
        <div className='user-profile'>
          <BsPersonCircle className='icon' />
          <span className='username'>John Doe</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
