import React, { useEffect, useState } from 'react';
import UserResponsePage from './UserResponsePage';
import { useTheme } from '@/context/ThemeContext';
import ExitIntent from 'exit-intent';

const ExitIntentPop = () => {
  const { theme } = useTheme();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Initialize exit intent
    const removeExitIntent = ExitIntent({
      threshold: 50,
      maxDisplays: 2,
      eventThrottle: 100,
      onExitIntent: () => {
        // Your logic to show the exit intent popup
        // Set state, display a modal, etc.
        setShowPopup(true);
      }
    });

    // Add beforeunload event listener
    const handleBeforeUnload = (event) => {
      // Your logic to show the exit intent popup
      // Set state, display a modal, etc.
      setShowPopup(true);

      // Custom message to be displayed in some browsers
      const message = 'Are you sure you want to leave? Your unsaved changes may be lost.';
      event.returnValue = message;

      return message;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Destroy exit intent and remove beforeunload event listener when component is unmounted
    return () => {
      removeExitIntent();
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleCloseClick = () => {
    const userConfirmed = window.confirm('Are you sure you want to close the window?');
  
    if (userConfirmed) {
      setShowPopup(false);
      window.close();
    }
  };
  

  const popupStyle = {
    position: 'fixed',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '35%',
    height: '300px',
    zIndex: '700',
    display: showPopup ? 'block' : 'none',
    // Add your existing styles here
  };

  const overlayStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: `${theme === 'light' ? 'rgba(0, 0, 0, 0.8)' : 'white'}`,
    display: showPopup ? 'block' : 'none',
    // Add your existing styles here
  };

  const ContentoverlayStyle = {
    zIndex: '999',
    // Add your existing styles here
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '24px',
    cursor: 'pointer',
    color: `${theme === 'light' ? 'white' : 'black'}`,
    // Add your existing styles here
  };

  return (
    <div>
      <div style={overlayStyle}></div>
      <div style={popupStyle}>
      <span style={closeButtonStyle} onClick={handleCloseClick}>
          &times;
      </span>

        <div style={ContentoverlayStyle} className="">
          <UserResponsePage />
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPop;
