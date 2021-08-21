import React from 'react';
import DropDown from '../dropdown/DropDown';
import { Link } from 'react-router-dom';

import ThemeMenu from '../thememenu/ThemeMenu';

import './topnav.css';

import user_image from '../../assets/images/user.png';
import user_menu from '../../assets/JsonData/user_menus.json';
import notifications from '../../assets/JsonData/notification.json';

const renderNotificationItems = (item, index) => (
  <div className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
);
const renderUserMenu = (item, index) => (
  <Link to="/" key={index}>
    <div className="notification-item">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
);
const current_user = {
  display_name: 'Supratim',
  image: user_image,
};

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user.image} alt="profile pic" />
    </div>
    <div className="topnav__right-user__name">
      {user.display_name}
    </div>
  </div>
);

const TopNav = () => {
  return (
    <div className="topnav">
      <div className="topnav__search">
        <input type="text" placeholder="Search here..." />
        <i className="bx bx-search"></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          {/* dropdown here - profile*/}
          <DropDown
            // icon="bx bx-user"
            customToggle={() => renderUserToggle(current_user)}
            contentData={user_menu}
            renderItems={renderUserMenu}
          />
        </div>
        <div className="topnav__right-item">
          {/* dropdown - notification*/}
          <DropDown
            icon="bx bx-bell"
            badge="12"
            contentData={notifications}
            renderItems={renderNotificationItems}
            renderFooter={() => <Link to="/">View All</Link>}
          />
        </div>
        <div className="topnav__right-item">
          {/* theme settings */}
          <ThemeMenu />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
