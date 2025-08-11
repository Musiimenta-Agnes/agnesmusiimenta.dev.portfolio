// src/components/WhatsAppButton.js
import React from 'react';
import './Whatsapp.css';

const WhatsAppButton = () => {
  const adminPhone = '0742443850'; 
  const defaultMessage = encodeURIComponent("Hello Agnes, I need assistance.");

  const handleClick = () => {
    const isMobile = /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);
    const link = isMobile
      ? `whatsapp://send?phone=${adminPhone}&text=${defaultMessage}`
      : `https://web.whatsapp.com/send?phone=${adminPhone}&text=${defaultMessage}`;
    window.open(link, '_blank');
  };

  return (
    <div className="whatsapp-float" onClick={handleClick} title="Chat with us on WhatsApp">
      <i className="bi bi-whatsapp"></i>
    </div>
  );
};

export default WhatsAppButton;
