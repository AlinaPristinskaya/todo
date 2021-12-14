import React from 'react';


const IconButton = ({ children, onClick, ...allyProps }) => (
  <button type="button" onClick={onClick} >
    Кнопка
  </button>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};



export default IconButton;