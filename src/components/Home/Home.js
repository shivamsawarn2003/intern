import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react"; // Import useState and useEffect
import backgroundImage from "../../img/assets/front.png"; // Import your background image

const Home = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // State to track scroll position
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Update scroll position on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate transform values based on scroll position for parallax effect
  const translateY = scrollPosition * 0.3 + "px"; // Adjusted for mobile devices

  return (
    <>
      {isHomePage && (
        <div style={{ 
          position: 'relative',
          overflow: 'hidden',
          height: '100vh', /* Set height to cover the entire viewport */
          width: '100%', /* Set width to cover the entire viewport */
          display: 'flex',
          justifyContent: 'center', /* Center content horizontally */
          alignItems: 'center',
          textAlign: 'center', /* Center text horizontally */
          padding: '0 20px',
          backgroundImage: `url(${backgroundImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
        }}>
          <div style={{ 
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) translateY(${translateY})`, // Apply parallax effect
            textAlign: 'center', /* Center text horizontally */
            color: '#ffffff',
            fontFamily: 'Poppins', 
            fontWeight: '290', 
            fontSize: '20px', /* Adjust font size for mobile screens */
            marginBottom: '20px' /* Add spacing between text and button */
          }}>
            Built by developers,<br />
            For developers,<br />
            with fair terms for all,<br />
            Let's build incredible things together.<br/>
            <button style={{ 
              fontFamily: 'Poppins', 
              fontWeight: '300', 
              fontSize: '14px', /* Adjust font size for mobile screens */
              color: "white", 
              border: '2px solid #00f',
              backgroundColor: 'transparent',
              borderRadius: '5px',
              padding: '10px 20px',
              cursor: 'pointer',
              transition: 'background-color 0.3s, color 0.3s',
              marginTop: '20px'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'black'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Learn more about us
          </button>
          </div>
        </div>
      )}

      <nav>
        {/* Navbar content goes here */}
      </nav>

      <Outlet />
    </>
  )
};

export default Home;
