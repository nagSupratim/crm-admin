import React, { useEffect, useRef, useState } from 'react';
import './dropdown.css';

const DropDown = (props) => {
  const dropdown = useRef();
  const [showList, setShowList] = useState(false);

  //prettier-ignore
  const closeList = () => setShowList(false)
  const toggleList = () => setShowList((state) => !state);

  useEffect(() => {
    const handler = (event) => {
      if (!dropdown.current.contains(event.target)) closeList();
    };
    document.addEventListener('click', handler);
    return () => {
      document.removeEventListener('click', handler);
    };
  }, [showList]);

  return (
    <div ref={dropdown} className="dropdown">
      <button className="dropdown__toggle" onClick={toggleList}>
        {props.icon ? <i className={props.icon}></i> : ''}
        {props.badge ? (
          <span className="dropdown__toggle-badge">
            {props.badge}
          </span>
        ) : (
          ''
        )}
        {props.customToggle ? props.customToggle() : ''}
      </button>
      <div className={`dropdown__content ${showList && 'active'}`}>
        {props.contentData && props.renderItems
          ? props.contentData.map((item, index) =>
              props.renderItems(item, index)
            )
          : ''}
        {props.renderFooter ? (
          <div className="dropdown__footer">
            {props.renderFooter()}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default DropDown;
