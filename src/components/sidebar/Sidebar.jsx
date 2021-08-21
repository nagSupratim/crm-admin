import React from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import './sidebar.css';
import logo from '../../assets/images/logo.png';
import sidebar_items from '../../assets/JsonData/sidebar_routes.json';

import { useSelector } from 'react-redux';

const SidebarItems = (props) => {
  const active = props.active ? 'active' : '';
  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

const externalPaths = [
  {
    id: 'linkedin',
    path: 'https://www.linkedin.com/in/nagsupratim/',
    class: 'bx bxl-linkedin-square',
    tip: 'Linkedin 😁',
  },
  {
    id: 'github',
    path: 'https://github.com/nagSupratim/crm-admin',
    class: 'bx bxl-github',
    tip: 'Source Code 🧐',
  },
  {
    id: 'email',
    path: 'mailto:supratimnag1997@gmail.com',
    class: 'bx bx-mail-send',
    tip: 'Email me 🤭',
  },
];

const Sidebar = (props) => {
  const themeReducer = useSelector((state) => state.ThemeReducer);
  const activeItem = sidebar_items.findIndex(
    (item) => item.route === props.location.pathname
  );
  const tooltipConfig = {
    type: themeReducer.mode === 'theme-mode-light' ? 'dark' : 'light',
    delayShow: '100',
  };

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} alt="company logo" />
      </div>
      {sidebar_items.map((item, index) => (
        <Link to={item.route} key={index}>
          <SidebarItems
            title={item.display_name}
            icon={item.icon}
            active={index === activeItem}
          />
        </Link>
      ))}
      <div className="sidebar__footer">
        <div className="sidebar__footer-row">
          <div className="row">
            {externalPaths.map((item) => (
              <div className="col-4" key={item.id}>
                <Link
                  to={{ pathname: item.path }}
                  target="_blank"
                  data-tip={item.tip}
                >
                  <i className={item.class}></i>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="sidebar__footer-row">
          <div className="row">
            <Link
              to={{ pathname: 'https://github.com/nagSupratim' }}
              target="_blank"
              data-tip="To my Github"
            >
              <div className="col-12">
                <span>&copy; nagSupratim</span>
              </div>
            </Link>
          </div>
        </div>

        <ReactTooltip {...tooltipConfig} />
      </div>
    </div>
  );
};

export default Sidebar;
