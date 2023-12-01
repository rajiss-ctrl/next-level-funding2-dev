import React, { useState, useEffect } from 'react';
import UserResponsePage from './UserResponsePage';
import { useTheme } from '@/context/ThemeContext';

const PopupComponent = () => {
  const {theme} = useTheme()
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseLeave = (e) => {
    if (e.clientY < 0) {
      setShowPopup(true);
    }
  };
 
  const handleClick = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setShowPopup(false);
    }
  };
  

  const handleCloseClick = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const popupStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // backgroundColor: '#fff',
    border: '1px solid #ccc',
    width: '60%',
    // width: '1200px',
    height: '400px',
    // padding: '20px',
    zIndex:'700',
    display: showPopup ? 'block' : 'none',
  };

  const overlayStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor:`${theme === 'light' ? 'rgba(0, 0, 0, 0.8)' : "white"}` ,
    
    display: showPopup ? 'block' : 'none',
  };
  const ContentoverlayStyle = {
    zIndex: '999'
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '24px',
    cursor: 'pointer',
    color:`${theme === 'light' ? 'white' : "black"}`
  };

  const popupRef = React.createRef();

  return (
    <>
      <div style={overlayStyle}></div>
      <div style={popupStyle} ref={popupRef} >
        <span style={closeButtonStyle} onClick={handleCloseClick}>
          &times;
        </span>
        <div style={ContentoverlayStyle}  className="m-0 ">
            <UserResponsePage/>
        </div>
      </div>
    </>
  );
};

export default PopupComponent;

