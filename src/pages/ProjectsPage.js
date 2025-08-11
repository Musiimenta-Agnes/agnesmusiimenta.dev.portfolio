import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AOS from 'aos'
import { Link } from "react-router-dom";
import { useEffect } from "react";

function ProjectsPage() {
      useEffect(() => {
        AOS.init({
          duration: 800,  // animation duration
          easing: 'ease-in-out', 
          once: true,     // animate only once
        });
      }, []);

  return (
    <div className="container-fluid">

<br/>

<h1 className="display-6" style={{ textAlign: 'center', fontWeight:'bold' }}>My Projects</h1>

<br/>

        {/* Projects row */}
        <div className="row justify-content-center">
          {/* First column */}
          <div className="col-12 col-md-4 mb-3 mb-lg-0" data-aos="fade-up">
            <div
              className="card"
              style={{
                width: '100%',
                backgroundColor: "aliceblue",
                height: 200,
                borderStyle: "solid 5px",

              }}
            >
              <div className="card-body">
                <p style={{ width: "100%", color: "black" , textAlign:'center'}}>
                  As a passionate and versatile web developer based in Wandegeya,
                  I specialize in crafting seamless digital experiences by
                  blending creativity with technical expertise.
                </p>
                <div style={{display:'flex',justifyContent:'center'}}>
                  <Link to="/" className="category-btn"  id="skills"  style={{animation: "pulse 2s ease-in-out infinite", border: "2px solid rgba(52, 152, 219, 0.7)" }} >   My Fruits website &hearts; </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Second column */}
          <div className="col-12 col-md-4 mb-3 mb-lg-0"  data-aos="fade-up">
            <div
              className="card"
              style={{
                width: '100%',
                backgroundColor: "aliceblue",
                height: 200,
                borderStyle: "solid 5px",
              }}
            >
              <div className="card-body">
                <p style={{ width: "100%", color: "black", textAlign:'center' }}>
                  I have a deep understanding of HTML, CSS, and JavaScript,
                  ensuring that the websites I create are both functional and
                  beautiful.
                </p>

                <div style={{display:'flex',justifyContent:'center'}}>
                  <Link to="/" className="category-btn"  id="skills"  style={{animation: "pulse 2s ease-in-out infinite", border: "2px solid rgba(52, 152, 219, 0.7)" }} >   Go dady website &hearts; </Link>
                </div>

              </div>
            </div>
          </div>

          {/* Third column */}
          <div className="col-12 col-md-4 mb-3 mb-lg-0"  data-aos="fade-up">
            <div
              className="card"
              style={{
                width: '100%',
                backgroundColor: "aliceblue",
                height: 200,
                borderStyle: "solid 5px",
              }}
            >
              <div className="card-body">
                <p style={{ width: "100%", color: "black", textAlign:'center' }}>
                  Over the years, I’ve had the privilege of working on a variety
                  of projects that demonstrate my versatility and commitment to
                  delivering high-quality solutions
                </p>

                <div style={{display:'flex',justifyContent:'center'}}>
                  <Link to="/" className="category-btn"  id="skills"  style={{animation: "pulse 2s ease-in-out infinite", border: "2px solid rgba(52, 152, 219, 0.7)" }} >   Witu website &hearts; </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />


        {/* Graphic Design Section */}
        <div className="row">
          {/* Left column */}
          <div className="col  mb-4 mb-lg-0"   data-aos="fade-up">
            <div style={{ width: "100%" }}>
              <div className="card-body" style={{ width: "90%" }}>
                <h1 className="display-5">Graphic Design Expertise</h1>
                <p style={{ color: "black", textAlign:'center' }}>
                  My background in graphic design enhances my ability to develop
                  visually striking websites and applications. I have an eye for
                  design and an understanding of color theory, typography, and
                  layout composition, which I incorporate into all of my
                  projects. Whether creating logos, custom icons, banners, or any
                  other graphical element, I ensure that my designs are both
                  creative and functional, aligning perfectly with the client’s
                  brand identity.
                </p>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div
            className="card" data-aos="fade-up"
            style={{ marginRight: 90, width: 400 }}
          >
            <div className="card-body" >
              <p style={{ width: "90%", color: "black", textAlign:'center' }}>
                Over the years, I’ve had the privilege of working on a variety of
                projects that demonstrate my versatility and commitment to
                delivering high-quality solutions
              </p>

              <div style={{display:'flex',justifyContent:'center'}}>
              <a href={`${process.env.PUBLIC_URL}/images/My Graphics Portifolio.pdf`} target="_blank" rel="noopener noreferrer" className="category-btn" style={{
                  animation: "pulse 2s ease-in-out infinite",
                  border: "2px solid rgba(52, 152, 219, 0.7)",
                }}>Graphis Portfolio  &hearts;</a>
              {/* <a
                href="/projects/My Graphics Portifolio.pdf"
               

                download
              >
                Graphics Portfolio 
              </a> */}
              </div>
            </div>
          </div>
        </div>


      <br/><br/><br/>

    </div>
  );
}

export default ProjectsPage;
