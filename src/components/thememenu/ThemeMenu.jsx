import React, { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ThemeAction from '../../store/actions/ThemeAction';
import './thememenu.css';
const mode_settings = [
  {
    id: 'light',
    name: 'Light',
    background: 'light-background',
    class: 'theme-mode-light',
  },
  {
    id: 'dark',
    name: 'Dark',
    background: 'dark-background',
    class: 'theme-mode-dark',
  },
];
const color_settings = [
  {
    id: 'blue',
    name: 'Blue',
    background: 'blue-color',
    class: 'theme-color-blue',
  },
  {
    id: 'red',
    name: 'Red',
    background: 'red-color',
    class: 'theme-color-red',
  },
  {
    id: 'cyan',
    name: 'Cyan',
    background: 'cyan-color',
    class: 'theme-color-cyan',
  },
  {
    id: 'green',
    name: 'Green',
    background: 'green-color',
    class: 'theme-color-green',
  },
  {
    id: 'orange',
    name: 'Orange',
    background: 'orange-color',
    class: 'theme-color-orange',
  },
];

const ThemeMenu = () => {
  const [currMode, setCurrMode] = useState('light');
  const [currColor, setCurrColor] = useState('blue');
  const menu_ref = useRef();
  const dispatch = useDispatch();

  const setMode = (mode) => {
    setCurrMode(mode.id);
    localStorage.setItem('themeMode', mode.class);
    dispatch(ThemeAction.setMode(mode.class));
  };
  const setColor = (color) => {
    setCurrColor(color.id);
    localStorage.setItem('colorMode', color.class);
    dispatch(ThemeAction.setColor(color.class));
  };
  // prettier-ignore
  const openMenu = () => menu_ref.current.classList.add('active');
  // prettier-ignore
  const closeMenu = () => menu_ref.current.classList.remove('active');

  useEffect(() => {
    // prettier-ignore
    const themeClass = mode_settings.find((e) => e.class === localStorage.getItem('themeMode', 'theme-mode-light'));
    if (themeClass !== undefined) setCurrMode(themeClass.id);

    // prettier-ignore
    const colorClass = color_settings.find((e) => e.class === localStorage.getItem('colorMode', 'color-mode-light'));
    if (colorClass !== undefined) setCurrColor(colorClass.id);

    // prettier-ignore
    const handler = (event) => !menu_ref.current.contains(event.target) && closeMenu();
    document.addEventListener('mousedown', handler);

    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <>
      {/*prettier-ignore */}
      <button className="dropdown__toggle" onClick={openMenu}>
        <i className="bx bx-palette"></i>
      </button>
      <div className="theme-menu" ref={menu_ref}>
        <h4>Theme settings</h4>
        <button className="theme-menu__close" onClick={closeMenu}>
          <i className="bx bx-x"></i>
        </button>
        <div className="theme-menu__select">
          <span>Choose mode</span>
          <ul className="mode-list">
            {mode_settings.map((item, index) => (
              <li key={index} onClick={() => setMode(item)}>
                <div
                  className={`mode-list__color ${item.background} ${
                    item.id === currMode ? 'active' : ''
                  }`}
                >
                  <i className="bx bx-check"></i>
                </div>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="theme-menu__select">
          <span>Choose color</span>
          <ul className="mode-list">
            {color_settings.map((item, index) => (
              <li key={index} onClick={() => setColor(item)}>
                <div
                  className={`mode-list__color ${item.background} ${
                    item.id === currColor ? 'active' : ''
                  }`}
                >
                  <i className="bx bx-check"></i>
                </div>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default ThemeMenu;
