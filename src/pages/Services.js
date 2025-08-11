import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AOS from "aos";

const services = [
  {
    icon: "fas fa-code",
    title: "Frontend Development",
    description:
      "Build engaging, responsive, and accessible user interfaces using React, Vue, Angular, or plain JavaScript.",
    link: "/", // your route or external URL
  },
  {
    icon: "fab fa-figma",
    title: "Figma Designs",
    description:
      "Designing fantastic figma designs for your websites, Web-systems, portfolios",
    link: "/figma",
  },
  {
    icon: "fas fa-server",
    title: "Backend Development",
    description:
      "Create scalable RESTful APIs, manage databases, and build robust server-side logic with Node.js, Django, Flask, or Ruby on Rails.",
    link: "/",
  },
  {
    icon: "fas fa-database",
    title: "Database Design & Management",
    description:
      "Design efficient schemas and ensure data integrity using SQL (MySQL, PostgreSQL) and NoSQL (MongoDB) databases.",
    link: "/",
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Mobile App Development",
    description:
      "Build cross-platform mobile apps with React Native or Flutter to reach users on iOS and Android.",
    link: "/",
  },
  {
    icon: "fas fa-lock",
    title: "Security & Performance Optimization",
    description:
      "Ensure your applications are secure, fast, and optimized for the best user experience.",
    link: "/",
  },
];

function ServicesPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="container py-5">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold">Our Full Stack Developer Services</h1>
        <p className="lead text-muted">
          Delivering end-to-end solutions with quality, creativity, and
          innovation.
        </p>
      </header>

      <div className="row g-4">
        {services.map((service, idx) => (
          <div key={idx} className="col-12 col-md-6 col-lg-4">
            <div
              className="card h-100 shadow-sm border-0"
              data-aos="fade-up"
              style={{
                borderRadius: "15px",
                transition: "transform 0.3s ease",
              }}
            >
              <div
                className="card-body d-flex flex-column align-items-center text-center p-4"
                data-aos="fade-up"
              >
                <div
                  className="mb-4 rounded-circle text-white d-flex align-items-center justify-content-center"
                  style={{
                    width: "80px",
                    height: "80px",
                    fontSize: "2.5rem",
                    backgroundColor: "rgb(10, 10, 87)",
                  }}
                >
                  <i className={service.icon}></i>
                </div>
                <h5 className="card-title fw-bold">{service.title}</h5>
                <p className="card-text text-muted">{service.description}</p>
                <a
                  href={service.link}
                  className="btn btn-outline-primary mt-auto"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="text-center mt-5 text-muted">
        &copy; {new Date().getFullYear()} Full Stack Developer Services. All rights
        reserved.
      </footer>
    </div>
  );
}

export default ServicesPage;
