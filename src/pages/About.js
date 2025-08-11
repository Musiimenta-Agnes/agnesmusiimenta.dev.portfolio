
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect } from 'react';
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
<br/>
<h1 className="display-6" style={{ textAlign: 'center', fontWeight:'bold' }}>ABOUT ME</h1>
<br/>
     
      <div style={{ width: "100%", height: "100%", backgroundColor: '#FDF5F5', padding: '20px 20px', borderRadius: '10px' }}>
           <div className='container' style={{justifyContent:'center', display:'flex'}}>
    
 
                    <div  data-aos="zoom-in">
             

                            <p style={{ width: '100%', color: 'black', textAlign:'center' }}>

                            <span >Hello! I'm Musiimenta Agnes Angel</span> , a passionate and
                                dedicated web developer with 2 years of experience in crafting dynamic and responsive
                                websites.
                                I specialize in creating seamless user experiences and beautiful front-end designs. I
                                have honed my skills through continuous learning and real-world projects.
                                I graduated from the <strong>Women's Institute of Technology and Innovation</strong>,
                                where I developed a deep understanding of web development, design, and the technologies
                                that power the modern web.
                                I am always excited to take on new challenges and bring creative ideas to life on the
                                web. <br /><br />

                                <span className="text-primary">
                                    I am driven by a desire to create solutions that not only look good but also
                                    function flawlessly.
                                    My approach to web development is user-centered, ensuring that the end product meets
                                    the needs of
                                    clients and enhances the user experience. Whether it's building responsive websites,
                                    interactive
                                    web applications, or developing backend systems, I leverage the latest technologies
                                    and tools to ensure
                                    that every project I work on is optimized for performance, security, and
                                    accessibility.
                                </span>
                                <br />
                                <span className="text-primary">
                                    My primary coding tools include HTML, CSS, JavaScript,React, python, React  but I'm constantly
                                    expanding my knowledge to stay at the forefront of web technologies.
                                    When not coding I enjoy hiking and exploring new technology trends.
                                    Lets connect and create something amazing together.
                                </span>
                            </p>


                     
                    </div>
  
  </div>
  </div>


<br/> <br/><br/>
     <div style={{justifyContent:'center', display:'flex'}}>
          <div>
              <Link to="/services" className='category-btn' style={{textAlign:'center'}}>My services</Link>
          </div>
     </div>

<br/> <br/><br/>

       </div>
  );
}

export default AboutUs;
