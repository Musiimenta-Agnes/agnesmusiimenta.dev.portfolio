// HeroSection.js
import React, { useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './HeroSection.css';
import './Header.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Optional: module-level guard (only use if you still see duplicates in dev StrictMode)
// let typingHasRun = false;

function HeroSection() {
  const textRef = useRef(null);
  const timeoutsRef = useRef([]); // store timeouts so we can clear them
  const text = "FRONTEND & BACKEND | GRAPHIC DESIGNING";

  // Typing effect
  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    console.log('Typing effect started'); // for debugging — remove later

    // Optional strict guard: uncomment only if necessary
    // if (typingHasRun) return;
    // typingHasRun = true;

    // Clear any previous content so we always start fresh
    el.textContent = "";

    let i = 0;
    function type() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i += 1;
        const id = setTimeout(type, 120); // delay between letters (ms)
        timeoutsRef.current.push(id);
      }
    }
    type();

    // cleanup: clear all pending timeouts if component unmounts/re-runs effect
    return () => {
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
      console.log('Typing effect cleaned up');
    };
  }, []); // empty deps -> run only after mount (but will still run twice in dev StrictMode if you have it)

  // AOS init
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div className="container-fluid hero-container">
      <div className="row align-items-center  text-md-start">
        <div
            className="col-12 col-md-6 mb-4 mb-md-0"
            data-aos="fade-right"
      
          >
            <img
              src="/images/Agie no back.png"
              alt="Agnes"
              className="open-pic img-fluid"
           />
       </div>


        <div className="col-12 col-md-6" data-aos="fade-left">
          <h2 ref={textRef} className="typing-text text-center "></h2>
          <p style={{fontSize:'20px', textAlign:'center'}} className="mt-3">
            Creating stunning websites and powerful backend solutions tailored to your needs.
          </p>

          <div style={{justifyContent:'center', display:'flex'}}>
             <a  className="category-btn" style={{textAlign:'center'}}  href="/My CV pdf.pdf" download >Download CV </a> 
          </div>
          
        </div>




          <div className="row mt-5" data-aos="fade-up">
            <div className="col-12 col-md-8 offset-md-2 ">
              <h3 style={{ color: "rgb(10, 10, 87)", fontWeight: "700" }}>Why Choose Me?</h3>
              <ul style={{ listStyleType: "none", paddingLeft: 0, fontSize: "18px", color: "#333" }}>
                <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Expertise in both frontend and backend development</li>
                <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Creative graphic design skills to make your brand stand out</li>
                <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Responsive, user-friendly, and optimized websites</li>
                <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Strong focus on clean, maintainable, and scalable code</li>
                <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Passionate about delivering quality on time</li>
              </ul>
            </div>
          </div>

      </div>


      
    </div>
  );
}

export default HeroSection;

