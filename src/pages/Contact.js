import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/Contact.css';
import 'aos/dist/aos.css';

function ContactUs() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setResponseMessage('');
    setIsSuccess(null);
    setLoading(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);

    try {
      const res = await fetch('https://formspree.io/f/meoznkap', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',  // Important to avoid CORS redirect issues
        },
        body: formData,
      });

      if (res.ok) {
        setIsSuccess(true);
        setResponseMessage('Thank you for contacting me! Message sent successfully.');
        setName('');
        setPhone('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        const errorData = await res.json();
        setIsSuccess(false);
        setResponseMessage(errorData.error || 'Error sending message. Please try again.');
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
            <label>Email (optional):</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email (optional)"
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
              disabled={loading || (!phone && !email)} // Disable if both phone and email empty
              title={(!phone && !email) ? "Please enter either phone or email" : ""}
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




// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import '../styles/Contact.css';
// import 'aos/dist/aos.css';

// function ContactUs() {
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState(''); // optional email field
//   const [subject, setSubject] = useState('');
//   const [message, setMessage] = useState('');
//   const [responseMessage, setResponseMessage] = useState('');
//   const [isSuccess, setIsSuccess] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setResponseMessage('');
//     setIsSuccess(null);
//     setLoading(true);

//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('phone', phone);
//     formData.append('email', email); // optional email
//     formData.append('subject', subject);
//     formData.append('message', message);

//     try {
//       const res = await fetch('https://formspree.io/f/meoznkap', {
//         method: 'POST',
//         body: formData,
//       });

//       if (res.ok) {
//         setIsSuccess(true);
//         setResponseMessage('Thank you for contacting me! Message sent successfully.');
//         setName('');
//         setPhone('');
//         setEmail('');
//         setSubject('');
//         setMessage('');
//       } else {
//         setIsSuccess(false);
//         setResponseMessage('Error sending message. Please try again.');
//       }
//     } catch (error) {
//       console.error(error);
//       setIsSuccess(false);
//       setResponseMessage('Network error. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <p style={{ textAlign: 'center', paddingTop: '30px' }} className="text-primary">
//         If you want to contact me directly, please fill this form below and send your message. Thank you!
//       </p>

//       <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
//         <h4 style={{ fontWeight: 'bold' }}>Let’s Get In Touch:</h4>
//       </div>

//       <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
//         <form
//           onSubmit={handleSubmit}
//           className="contact-form"
//           data-aos="fade-up"
//           style={{
//             width: '100%',
//             maxWidth: '600px',
//             margin: '0 auto'
//           }}
//         >
//           <div className="form-group mb-3">
//             <label>Full Name:</label>
//             <input
//               type="text"
//               className="form-control"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>

//           <div className="form-group mb-3">
//             <label>Phone Number:</label>
//             <input
//               type="tel"
//               className="form-control"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               required={!email} // required if email is empty
//               placeholder="Enter your phone number or email"
//             />
//           </div>

//           <div className="form-group mb-3">
//             <label>Email (optional):</label>
//             <input
//               type="email"
//               className="form-control"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required={!phone} // required if phone is empty
//               placeholder="Enter your email or phone number"
//             />
//           </div>

//           <div className="form-group mb-3">
//             <label>Subject:</label>
//             <input
//               type="text"
//               className="form-control"
//               value={subject}
//               onChange={(e) => setSubject(e.target.value)}
//               required
//             />
//           </div>

//           <div className="form-group mb-3">
//             <label>Your Message:</label>
//             <textarea
//               className="form-control"
//               rows="4"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               required
//             ></textarea>
//           </div>

//           <div className="text-center">
//             <button
//               type="submit"
//               className="category-btn"
//               style={{ width: '50%', padding: '10px', border: 'none' }}
//               disabled={loading}
//             >
//               {loading ? (
//                 <>
//                   <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
//                   Sending...
//                 </>
//               ) : (
//                 'Send Message'
//               )}
//             </button>
//           </div>
//         </form>
//       </div>

//       {responseMessage && (
//         <div className="text-center mt-3">
//           <p style={{ color: isSuccess ? 'green' : 'red', fontWeight: 'bold' }}>
//             {responseMessage}
//           </p>
//         </div>
//       )}

//       <br /><br />
//     </div>
//   );
// }

// export default ContactUs;



