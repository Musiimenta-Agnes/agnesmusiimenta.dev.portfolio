// HeroSection.js
import React, { useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './HeroSection.css';
import './Header.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutUs from "../pages/About";
import ProjectsPage from "../pages/ProjectsPage";
import ServicesPage from "../pages/Services";
import ContactUs from "../pages/Contact";
import SkillsPage from "../pages/SkillsPage";

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

    console.log('Typing effect started'); 
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


  
const videoProjects = [
    {
      title: "Okuosi Website UI Walkthrough",
      description: "Screen recording demo of the website prototype.",
      videoSrc: `${process.env.PUBLIC_URL}/projects/Okuosi vid.mp4`// local or external video URL
    },
    {
      title: "Figma Designs",
      description: "User flow video for the website figma design.",
      videoSrc: `${process.env.PUBLIC_URL}/projects/Graphics Portfolio.mp4`
    },
  ];


  return (
    <div className="container-fluid hero-container">
      <div className="row align-items-center  text-md-start">
        <div
            className="col-12 col-md-6 mb-4 mb-md-0"
            data-aos="fade-right"
      
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/Agie no back.png`}
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
          <a href={`${process.env.PUBLIC_URL}/My CV pdf.pdf`}  target="_blank" rel="noopener noreferrer" className="category-btn" style={{
                  animation: "pulse 2s ease-in-out infinite",
                  border: "2px solid rgba(52, 152, 219, 0.7)"
                }}>Download CV</a>

          </div>
          
        </div>



 
        <div className="row mt-5" data-aos="fade-up">
  {/* First Column */}
  {/* <div className="col-12 col-md-6">
    <h3 style={{ color: "rgb(10, 10, 87)", fontWeight: "700" }}>Why Choose Me?</h3>
    <ul style={{ listStyleType: "none", paddingLeft: 0, fontSize: "18px", color: "#333" }}>
      <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Expertise in both frontend and backend development</li>
      <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Creative graphic design skills to make your brand stand out</li>
      <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Responsive, user-friendly, and optimized websites</li>
      <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Strong focus on clean, maintainable, and scalable code</li>
      <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Passionate about delivering quality on time</li>
    </ul>
  </div> */}

</div>

<AboutUs/>

<br/><br/>

<SkillsPage/>
<br/><br/>

  <ProjectsPage/>

      </div>
<br/>

      {/* Videos */}
      <section>
        <h2 className="mb-4 text-center"style={{fontWeight:'bold',color: "rgb(10, 10, 87)"}}>Design Demo Videos  Lets Together Design the Best UI's for Our Clients</h2>
        <br/>
        <div className="row">
          {videoProjects.map(({ title, description, videoSrc }, idx) => (
            <div className="col-md-6 mb-4" data-aos='fade-up' key={idx}>
              <div className="card shadow-sm">
                <video
                  controls
                  className="w-100"
                  style={{ maxHeight: "360px", objectFit: "contain" }}
                >
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="card-body">
                  <h5>{title}</h5>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


<br/>
<br />
      <h1 className="display-6 text-center fw-bold">My Services</h1>
      <br />
<ServicesPage/>

<br/>

<br />
      <h1 className="display-6 text-center fw-bold">Contact me</h1>
      <br />
<ContactUs/>


      
    </div>
  );
}

export default HeroSection;

