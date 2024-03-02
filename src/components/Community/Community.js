import React from 'react';
import skate from '../../img/assets/skate2.webp';
import twitterLogo from '../../img/assets/twitter.jpg';
import facebookLogo from '../../img/assets/facebook.png';
import discordLogo from '../../img/assets/discord.jpg';
import instagramLogo from '../../img/assets/insta.jpg'; 
const Community = () => {
  return (
    <div>
      {/* Join us button */}
      <div style={{ position: 'fixed', left: '20px', top: '60%', transform: 'translateY(-50%)', zIndex: '9999' }}>
        <button 
          style={{ 
            backgroundColor: 'transparent', 
            border: '1px solid black', 
            color: 'blue', 
            padding: '10px 20px', 
            borderRadius: '5px', 
            cursor: 'pointer', 
            margintop:'100px',
            transition: 'background-color 0.3s ease' 
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'black'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Join us
        </button>
      </div>
      
      {/* Image and background */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        
        {/* Heading and button */}
        <div style={{ marginRight: '-300px' }}>
          <h1>Join The Community</h1>
          <h3>The Official skate.Discord Server</h3>
        </div>
        <div
          style={{
            position: 'relative',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            overflow: 'hidden',
            marginLeft: '800px',
            marginTop: '50px',
            boxShadow: '0 0 20px 10px rgba(0, 0, 0, 0.5)',
            animation: 'spin 3s linear infinite',
          }}
        >
          {/* Inner container to hold the image */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={skate}
              alt="Community"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover', // Ensure the entire image fills the container without leaving any space
              }}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: 'black', color: 'white', padding: '60px', textAlign: 'center' }}>
        <p>Follow us on social media:</p>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
            <img src={twitterLogo} alt="Twitter" style={{ width: '50px', height: '50px' }} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
            <img src={facebookLogo} alt="Facebook" style={{ width: '40px', height: '40px' }} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
            <img src={instagramLogo} alt="Instagram" style={{ width: '50px', height: '50px' }} />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
            <img src={discordLogo} alt="Discord" style={{ width: '50px', height: '50px' }} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Community;
