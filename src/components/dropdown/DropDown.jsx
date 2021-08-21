import React, { useRef } from 'react';
import './dropdown.css';

const clickOutsideRef = (toggle_ref, content_ref) => {
  document.addEventListener('click', (event) => {
    if (
      toggle_ref.current &&
      toggle_ref.current.contains(event.target)
    ) {
      content_ref.current.classList.toggle('active');
    } else {
      if (
        content_ref.current &&
        !content_ref.current.contains(event.target)
      ) {
        content_ref.current.classList.remove('active');
      }
    }
  });
};

const DropDown = (props) => {
  const dropdown_toggle_el = useRef();
  const dropdown_content_el = useRef();
  clickOutsideRef(dropdown_toggle_el, dropdown_content_el);
  return (
    <div className="dropdown">
      <button ref={dropdown_toggle_el} className="dropdown__toggle">
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
      <div ref={dropdown_content_el} className="dropdown__content">
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
