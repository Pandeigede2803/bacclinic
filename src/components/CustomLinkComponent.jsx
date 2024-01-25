// CustomLinkComponent.jsx
import React, { useState } from 'react';


const CustomLinkComponent = () => {
  const [style, setStyle] = useState('link-style-1');

  // Function to change the style
  const changeStyle = () => {
    setStyle(style === 'link-style-1' ? 'link-style-2' : 'link-style-1');
  };

  return (
    <a 
      href="#" 
      className={style}
      onMouseEnter={changeStyle} // Change style on mouse enter
      onMouseLeave={changeStyle} // Revert style on mouse leave
      target="_blank" 
      rel="noopener noreferrer"
    >
      Hover and Select this Link
    </a>
  );
};

export default CustomLinkComponent;
