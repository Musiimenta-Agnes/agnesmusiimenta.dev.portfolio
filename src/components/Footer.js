import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css';


function OurFooter() {

  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row justify-content-around text-center">
          <div className="col-md-2">
            <h5 style={{ padding: '6px', color: '#00D4FF' }}><b>Contact Info</b></h5>
            <p style={{ color: 'white' }}>Location: Wandegeya Kampala</p>
            <p style={{ color: 'white' }}>Phone: 0742443850</p>
            <p style={{ color: 'white' }}>Email: musiimentaagnes9@gmail.com </p>
          </div>

          <div className="col-md-2">
            <h5 style={{ padding: '6px', color: '#00D4FF' }}><b>Quick links</b></h5>
            <ul className="ul-links">
              <li><Link to="/" className="footer-links">Home</Link></li> <br />
              <li><Link to="/about" className="footer-links">About Me</Link></li> <br />
            </ul>
          </div>

          <div className="col-md-2">
            <h5 style={{ padding: '6px', color: '#00D4FF' }}><b>Quick links</b></h5>
            <ul className="ul-links">
              <li><Link to="/projects" className="footer-links">Projects</Link></li> <br />
              <li><Link to="/services" className="footer-links">Services</Link></li>
            </ul>
          </div>

          <div className="col-md-2">
            <h5 style={{ padding: '6px', color: '#00D4FF' }}><b>Quick links</b></h5>
            <ul className="ul-links">
              <li><Link to="/skills" className="footer-links">Skills</Link></li> <br />
              <li><Link to="/contact" className="footer-links">Contact Me</Link></li> <br />
            </ul>
          </div>
        </div>

        <hr />

        <div style={{
          backgroundColor: '#00D4FF',
          textAlign: 'center',
          color: 'black',
          height: '100%',
          paddingTop: '10px',
          paddingBottom:'10px'
        }}>
          <b>&copy; 2025 Musiimenta Agnes Angel. All rights reserved.</b>
        </div>
      </div>
    </footer>
  );
}

export default OurFooter;
