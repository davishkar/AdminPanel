import React from 'react';
import { BsHouseDoor, BsPeopleFill, BsGraphUp, BsChatDots, BsBellFill, BsGearFill, BsX } from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsHouseDoor className='icon_header' /> FEEDBACK
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}><BsX /></span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="">
            <BsHouseDoor className='icon' /> Home
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsPeopleFill className='icon' /> Friends
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsGraphUp className='icon' /> Analytics
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsChatDots className='icon' /> Messages
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsBellFill className='icon' /> Notifications
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsGearFill className='icon' /> Settings
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
