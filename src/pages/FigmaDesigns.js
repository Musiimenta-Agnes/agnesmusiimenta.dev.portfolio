import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const videoProjects = [
    {
      title: "Website UI Walkthrough",
      description: "Screen recording demo of the website prototype.",
      videoSrc: "/figmaDesigns/Figma full design.mp4", // local or external video URL
    },
    {
      title: "React App Demo",
      description: "User flow video for the website design.",
      videoSrc: "/figmaDesigns/my site.mp4",
    },
  ];
  
const figmaProjects = [
  {
    title: "Landing Page Design",
    description: "A clean and modern landing page prototype.",
    figmaEmbedUrl: "https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_FILE_URL", // replace with your actual URL
  },
  {
    title: "Mobile App UI",
    description: "Interactive mobile app prototype with smooth transitions.",
    figmaEmbedUrl: "https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_FILE_URL",
  },
];


function FigmaShowcase() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5" style={{ color: "rgb(10, 10, 87)" }}>
        My Figma Designs & Videos
      </h1>

      {/* Videos */}
      <section>
        <h2 className="mb-4">Design Demo Videos</h2>
        <div className="row">
          {videoProjects.map(({ title, description, videoSrc }, idx) => (
            <div className="col-md-6 mb-4" key={idx}>
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

      {/* Figma Prototypes */}
      <section className="mb-5">
        <h2 className="mb-4">Figma Prototypes</h2>
        <div className="row">
          {figmaProjects.map(({ title, description, figmaEmbedUrl }, idx) => (
            <div className="col-md-6 mb-4" key={idx}>
              <div className="card shadow-sm">
                <div className="ratio ratio-16x9">
                  <iframe
                    src={figmaEmbedUrl}
                    allowFullScreen
                    title={title}
                    style={{ border: "none" }}
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5>{title}</h5>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
}

export default FigmaShowcase;
