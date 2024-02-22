import React from 'react';
import skate from '../../img/assets/skate.jpg';

const Purchase = () => {
  const styles = {
    backgroundImage: `url(${skate})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: 'Anta',
  };

  const headingStyle = {
    fontWeight: 'extrabold',
    fontSize: '36px', 
    color: 'skyblue',
    borderRadius: '50px',
    boxShadow: '10px 20px 50px rgba(255,255,255,1)', 
  };
  
  const buttonContainerStyle = {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px', // Reduced gap between buttons for smaller screens
    marginLeft: '0',
  };
  
  const buttonStyle = {
    padding: '5px 50px', // Adjusted padding for smaller screens
    backgroundColor: 'black',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.3s ease', 
    boxShadow: '10px 20px 50px rgba(255,255,255,1)',
    position: 'relative', 
  };
  
  const purchaseButtonStyle = {
    position: 'relative',
    padding: '2px 10px', // Adjusted padding for smaller screens
    backgroundColor: 'black',
    color: '#fff',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.3s ease', 
    fontSize: '14px', // Adjusted font size for smaller screens
  };
  
  const arrowStyle = {
    content: '""',
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    width: '0',
    height: '0',
    borderTop: '8px solid transparent',
    borderBottom: '8px solid transparent',
    borderLeft: '8px solid white',
  };
  
  const handlePurchase = (option) => {
    console.log(`You clicked on ${option}`);
  };

  return (
    <div style={styles}>
      <h1 style={headingStyle}>DIGITAL EDITION</h1>
      <div style={buttonContainerStyle}>
        <button
          style={buttonStyle}
          onClick={() => handlePurchase('India')}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        >
          <h3>INDIA</h3>
          <span style={arrowStyle}></span> {/* Arrow */}
        </button>

        <button
          style={buttonStyle}
          onClick={() => handlePurchase('Steam')}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        >
          <h3>STEAM</h3>
          <span style={arrowStyle}></span> {/* Arrow */}
        </button>
        
        <button
          style={buttonStyle}
          onClick={() => handlePurchase('Digital Edition')}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        >
          <h3>DIGITAL EDITION</h3>
          <span style={arrowStyle}></span> {/* Arrow */}
        </button>
        
        <button
          style={purchaseButtonStyle}
          onClick={() => handlePurchase('Digital Edition')}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        >
          <h3>PURCHASE</h3>
        </button>
      </div>
    </div>
  );
};

export default Purchase;
