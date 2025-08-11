import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AOS from 'aos'
import { useEffect } from "react";

const skills = [
    { name: "HTML5", icon: "fab fa-html5", level: 95 },
    { name: "CSS3", icon: "fab fa-css3-alt", level: 90 },
    { name: "JavaScript", icon: "fab fa-js-square", level: 85 },
    { name: "React", icon: "fab fa-react", level: 85 },
    { name: "Node.js", icon: "fab fa-node-js", level: 80 },
    { name: "Python", icon: "fab fa-python", level: 75 },
    { name: "SQL", icon: "fas fa-database", level: 80 },
    { name: "Git & GitHub", icon: "fab fa-git-alt", level: 80 },
    { name: "Postman", icon: "fas fa-envelope-open-text", level: 80 },  // no official icon for Postman, this is a close alternative
    { name: "Figma", icon: "fab fa-figma", level: 93 }, // FontAwesome has figma icon in newer versions
    { name: "Trello", icon: "fab fa-trello", level: 70 },
  ];
  

function SkillsPage() {

      useEffect(() => {
        AOS.init({
          duration: 800,  // animation duration
          easing: 'ease-in-out', 
          once: true,     // animate only once
        });
      }, []);
    


  return (
    <div className="container py-5">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold">My Skills</h1>
        <p className="lead text-muted">
          Here are some of my core competencies and proficiency levels.
        </p>
      </header>

      <div className="row g-4">
        {skills.map((skill, idx) => (
          <div key={idx} className="col-12 col-md-6" data-aos='fade-up'>
            <div className="d-flex align-items-center mb-3">
              <i
                className={`${skill.icon} me-3`}
                style={{ fontSize: "2rem", color: "rgb(10, 10, 87)" }}
              ></i>
              <div style={{ flexGrow: 1 }}>
                <div className="d-flex justify-content-between">
                  <h5 className="mb-1">{skill.name}</h5>
                  <span>{skill.level}%</span>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${skill.level}%`, backgroundColor: "rgb(10, 10, 87)" }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="text-center mt-5 text-muted">
        &copy; {new Date().getFullYear()} My Skills Portfolio. All rights reserved.
      </footer>
    </div>
  );
}

export default SkillsPage;
