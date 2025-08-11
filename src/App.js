import './App.css';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React from 'react';
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

  const isAdminPage =
    location.pathname === '/cool-panel' ||
    location.pathname.startsWith('/dashboard') ||
    location.pathname.startsWith('/add-') ||
    location.pathname.startsWith('/show-') ||
    location.pathname.startsWith('/delete-') ||
    location.pathname.startsWith('/edit-') ||
    location.pathname.startsWith('/admin-contact-editor') ||
    location.pathname.startsWith('/admin-about-editor') ||
    location.pathname.startsWith('/view-');

  return (
    <>
      {!isAdminPage && <OurHeader />}

      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
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
  return (
    <Router>
      <ToastContainer />
      <LayoutWrapper />
    </Router>
  );
}

export default App;
