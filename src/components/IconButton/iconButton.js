import React from 'react';


const IconButton = ({ name, onClick, ...allyProps }) => (
  <button type="button" onClick={onClick} >
    {name}
  </button>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};



export default IconButton;