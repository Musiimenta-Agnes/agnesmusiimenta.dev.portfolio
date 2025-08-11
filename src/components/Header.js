import React, { useRef } from 'react';
import { Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Header.css';


function OurHeader() {
  const navbarCollapseRef = useRef(null);
  const handleLinkClick = () => {
    const navbarCollapse = navbarCollapseRef.current;
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      new window.bootstrap.Collapse(navbarCollapse).hide();
    }
  };

  return (
    <div>
      <header className="w-100">


        <nav className="navbar navbar-expand-lg" style={{ width: '100%', boxShadow: '0 2px 5px darkblue', height:'65px', position: 'relative', zIndex: 1000 , color:'white'}}>
          <div className="container-fluid">

          
            <div className="navbar-brand agie" style={{color:'white'}}>
              <img src={`${process.env.PUBLIC_URL}/images/Agie.png`} alt="Agie" className="logo" /> AGNES ANGEL
            </div>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" >
              <span className="navbar-toggler-icon"  style={{backgroundColor:'white'}}></span>
            </button>

            <div style={{  backgroundColor: 'rgb(10, 10, 87)',marginLeft:'80px', height:'60px', color:'white'}} className="collapse navbar-collapse" id="navbarMenu" ref={navbarCollapseRef}>
              <ul className="navbar-nav ms-auto nav">
                <li className="custom-item nav-item">
                  <Link to="/" className="custom-link nav-link" onClick={handleLinkClick}>Home</Link>
                </li>
                <li className="custom-item nav-item">
                  <Link to="/about" className="custom-link nav-link" onClick={handleLinkClick}>About Me</Link>
                </li>
                <li className="custom-item nav-item">
                  <Link to="/projects" className="custom-link nav-link" onClick={handleLinkClick}>Projects</Link>
                </li>
                <li className="custom-item nav-item">
                  <Link to="/services" className="custom-link nav-link" onClick={handleLinkClick}>Services</Link>
                </li>
                <li className="custom-item nav-item">
                  <Link to="/skills" className="custom-link nav-link" onClick={handleLinkClick}>Skills</Link>
                </li>
                <li className="custom-item nav-item">
                  <Link to="/contact" className="custom-link nav-link" onClick={handleLinkClick}>Contact Me</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

 
      </header>
    </div>
  );
}

export default OurHeader;


