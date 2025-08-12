
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/Contact.css';
import 'aos/dist/aos.css';

const API_URL = process.env.REACT_APP_API_URL;

function ContactUs() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, phone, subject, message };

    setName('');
    setPhone('');
    setSubject('');
    setMessage('');
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/direct_order/send-contact-sms`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setIsSuccess(true);
        setResponseMessage('Thank you for supporting my services! Message Sent Successfully.');
      } else {
        setIsSuccess(false);
        setResponseMessage('Error while sending message. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setIsSuccess(false);
      setResponseMessage('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <p style={{ textAlign: 'center', paddingTop: '30px' }} className="text-primary">
        If you want to contact me directly, please fill this form below and send your message. Thank you!
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
        <h4 style={{ fontWeight: 'bold' }}>Let’s Get In Touch:</h4>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
        <form
          onSubmit={handleSubmit}
          className="contact-form"
          data-aos="fade-up"
          style={{
            width: '100%',
            maxWidth: '600px',
            margin: '0 auto'
          }}
        >
          <div className="form-group mb-3">
            <label>Full Name:</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Phone Number:</label>
            <input
              type="tel"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Subject:</label>
            <input
              type="text"
              className="form-control"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Your Message:</label>
            <textarea
              className="form-control"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="category-btn"
              style={{ width: '50%', padding: '10px', border: 'none' }}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </div>
        </form>
      </div>

      {responseMessage && (
        <div className="text-center mt-3">
          <p style={{ color: isSuccess ? 'green' : 'red', fontWeight: 'bold' }}>
            {responseMessage}
          </p>
        </div>
      )}

      <br /><br />
    </div>
  );
}

export default ContactUs;

