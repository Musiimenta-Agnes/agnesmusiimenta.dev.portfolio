import { useState} from 'react';
import React from 'react';
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
        setResponseMessage('Thank for Supporting my services! Message Sent Successfully');
      } else {
        setIsSuccess(false);
        setResponseMessage(' Error while sending message. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setIsSuccess(false);
      setResponseMessage(' Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <p style={{ textAlign: 'center', paddingTop: '30px' }} className='text-primary'>
        If you want to contact me directly, please fill this form below and send your message. Thank you!
      </p>

      <div className='row'>
        

        <div className="col-12 col-md-6">
          <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
            <h4 style={{ fontWeight: 'bold' }}>Lets Get In Touch:</h4>
          </div>

          <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: 'auto' }} className='contact-form' data-aos="fade-up">
            <div className="form-group mb-3">
              <label>Full Name:</label>
              <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="form-group mb-3">
              <label>Phone Number:</label>
              <input type="tel" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <div className="form-group mb-3">
              <label>Subject:</label>
              <input type="text" className="form-control" placeholder="" value={subject} onChange={(e) => setSubject(e.target.value)} required />
            </div>
            <div className="form-group mb-3">
              <label>Your Message:</label>
              <textarea className="form-control" rows="4" placeholder="" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="category-btn" style={{ width: '50%', padding: '10px', border: 'none' }} disabled={loading}>
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

          {responseMessage && (
            <div className="text-center mt-3">
              <p style={{ color: isSuccess ? 'green' : 'red', fontWeight: 'bold' }}>
                {responseMessage}
              </p>
            </div>
          )}
        </div>
{/* My location map */}
        <div className="col-12 col-md-6">
          <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
            <h4 style={{ fontWeight: 'bold' }}>My Location:</h4>
          </div>
          <div style={{ height: '400px', border: '2px solid #ccc' }}>
            <iframe
              title="Okuosi Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7510142324163!2d32.57190540861033!3d0.3328042996625349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb2a51c6d0bb%3A0xc0fe4f5a441463cc!2sWandegeya%20Jb%20Hostel!5e0!3m2!1sen!2sug!4v1754925198730!5m2!1sen!2sug"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>



      </div>

     

      <br /><br />
    </div>
  );
}

export default ContactUs;
