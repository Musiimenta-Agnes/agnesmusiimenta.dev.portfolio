



import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import '../styles/About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 800,  // animation duration
      easing: 'ease-in-out',
      once: true,     // animate only once
    });
  }, []);

  return (
    <div>
      <br />
      <h1 className="display-6 text-center fw-bold">About me</h1>
      <br />

      <div style={{ backgroundColor: '#FDF5F5', padding: '20px', borderRadius: '10px' }}>
        <div className="container">
          <div className="row align-items-center" style={{ minHeight: '400px' }}>
            


            {/* Right Column: Text */}
            <div className="col-12 col-md-7" data-aos='fade-up'>
              <p style={{ color: 'black', textAlign: 'justify' }}>
                <span>Hello! I'm <strong>Musiimenta Agnes Angel</strong></span>, a passionate and dedicated web developer 
                crafting dynamic and responsive websites. I specialize in creating seamless user experiences and 
                beautiful front-end designs. I have honed my skills through continuous learning and real-world projects.
                I graduated from the <strong>Women's Institute of Technology and Innovation</strong>, 
                where I developed a deep understanding of web development, design, and the technologies that power the modern web.
                <br /><br />

                <span className="text-primary">
                  My primary coding tools include HTML, CSS, JavaScript, React, and Python, but I'm constantly 
                  expanding my knowledge to stay at the forefront of web technologies. When not coding, I enjoy 
                  hiking and exploring new technology trends. Let's connect and create something amazing together.
                </span>
              </p>
            </div>

            {/* Left Column: Image */}
            <div className="col-12 col-md-5 mb-4 mb-md-0 text-center">
              <img
                src={`${process.env.PUBLIC_URL}/images/0ce2c6ad308d08d809265e188effecdd_8.jpeg`}
                alt="Musiimenta Agnes Angel"
                className="img-fluid rounded shadow"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            </div>

          </div>
        </div>
      </div>


    </div>
  );
}

export default AboutUs;

