import React, { useState } from 'react';
import './Contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showPopup, setShowPopup] = useState(false); // State for popup visibility
  const [popupMessage, setPopupMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setPopupMessage("Successfully submitted! Thank you for reaching out."); // Set the message
        setShowPopup(true); // Show the popup
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setPopupMessage("Error sending message. Please try again.");
        setShowPopup(true);
      }
    } catch (error) {
      setPopupMessage("Error sending message. Please try again.");
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false); // Hide the popup
  };

  return (
    <div className="contact-page">
      <div className="location-and-contact">
        <div className="location-section">
          <h2>Our Location</h2>
          <h3>Connecting Near and Far</h3>
          <h4>Bhanu College</h4>
          <p>College Road, Biratnagar</p>
          <p>Morang, Nepal</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d340.1247909295514!2d87.2782539!3d26.4498482!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef75b6be3fb3d1%3A0x100d3c6fcc25708b!2z4KSt4KS-4KSo4KWBIOCkleCksuClh-CknCwg4KS14KS_4KSw4KS-4KSf4KSo4KSX4KSw!5e1!3m2!1sen!2snp!4v1729936006663!5m2!1sen!2snp"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen=""
          ></iframe>
        </div>

        <div className="contact-form">
          <h2>Contact Us</h2>
          <p>Email, call, or complete the form to learn how we can help you.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input 
                type="text" 
                name="firstName" 
                placeholder="First name" 
                value={formData.firstName} 
                onChange={handleChange} 
                required 
              />
              <input 
                type="text" 
                name="lastName" 
                placeholder="Last name" 
                value={formData.lastName} 
                onChange={handleChange} 
                required 
              />
            </div>
            <input 
              type="email" 
              name="email" 
              placeholder="Your email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="tel" 
              name="phone" 
              placeholder="Phone number" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />
            <textarea 
              name="message" 
              placeholder="How can we help?" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            ></textarea>
            <button type="submit">Submit</button>
          </form>
          <p className='mt-6'>
            By contacting us, you agree to our{' '}
            <a href="#">Terms of service</a> and{' '}
            <a href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <p className='text-2xl pb-6'>{popupMessage}</p>
            <button onClick={closePopup}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
