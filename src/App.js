import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React, { useEffect } from 'react';
import axios from 'axios';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Static pages
import AboutUs from './pages/About';
import ContactUs from './pages/Contact';
import OurFooter from './components/Footer';
import OurHeader from './components/Header';
import HeroSection from './components/HeroSection';
import WhatsAppButton from './components/WhatsappButton';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/Services';
import SkillsPage from './pages/SkillsPage';
import FigmaShowcase from './pages/FigmaDesigns';

function LayoutWrapper() {
  const location = useLocation();

  //  Match all admin-related pages
  const isAdminPage =
    location.pathname === '/cool-panel' ||
    location.pathname.startsWith('/dashboard*/*') ||
    location.pathname.startsWith('/add-') ||
    location.pathname.startsWith('/show-') ||
    location.pathname.startsWith('/delete-') ||
    location.pathname.startsWith('/edit-') ||
    location.pathname.startsWith('/admin-contact-editor')||
    location.pathname.startsWith('/admin-about-editor')||
    
    location.pathname.startsWith('/view-');

  return (
    <>
      {!isAdminPage && <OurHeader />}
   

      <Routes>
\
        {/* Public Pages */}
        <Route path="/" element={<HeroSection />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/herosection" element={<HeroSection />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/figma" element={<FigmaShowcase />} />

      </Routes>

      {!isAdminPage && <WhatsAppButton />}
      {!isAdminPage && <OurFooter />}
    </>
  );
}

function App() {

  useEffect(() => {
    const hasVisited = localStorage.getItem('has_visited');
    if (!hasVisited) {
      axios.post('http://127.0.0.1:5000/api/views/add')
        .then(() => {
          localStorage.setItem('has_visited', 'true');
          console.log('Unique visitor recorded.');
        })
        .catch(err => console.error('Failed to record view:', err));
    }
  }, []);

  return (
    <Router basename="/agnesmusiimenta.dev.portfolio">
      <div className="container-fluid">
        <ToastContainer position="top-center" autoClose={3000} />
        <LayoutWrapper />
      </div>
    </Router>
  );
}


export default App;


