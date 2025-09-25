import React, { useState } from 'react';
import './Contact.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');
  const contactInfoRef = useScrollAnimation(0);
  const contactFormRef = useScrollAnimation(200);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('Sending...');
    
    try {
      const response = await fetch('https://formspree.io/f/mdkwklrp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'New Contact Form Submission'
        })
      });

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        setSubmitStatus('Successfully sent');
        setTimeout(() => setSubmitStatus(''), 3000);
      } else {
        setSubmitStatus('Error sending message. Please try again.');
        setTimeout(() => setSubmitStatus(''), 3000);
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('Error sending message. Please try again.');
      setTimeout(() => setSubmitStatus(''), 3000);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        {/* Left Column - Contact Information */}
        <div className="contact-info scroll-animate" ref={contactInfoRef}>
          <h2 className="contact-title">Get in touch</h2>
          <p className="contact-description">
          If you want to contact me, fill out the following form and I will do my best to get back to you as soon as I can!
          </p>
          
          <div className="contact-details">
            <div className="contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span className="contact-text">pisun.c.l@gmail.com</span>
            </div>
            
            <div className="contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span className="contact-text">Vancouver, BC, Canada</span>
            </div>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16714.848160997713!2d-123.11777955000001!3d49.28020924999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717f41ba2fb1%3A0xc6952794560a44aa!2sDowntown%20Vancouver%2C%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1758828626403!5m2!1sen!2sca"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Downtown Vancouver Location Map"
            ></iframe>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="contact-form scroll-animate" ref={contactFormRef}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="form-label">
                <svg className="form-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <label htmlFor="name">NAME</label>
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <div className="form-label">
                <svg className="form-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <label htmlFor="email">EMAIL</label>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <div className="form-label">
                <svg className="form-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6l-2 2V6h14v10z"/>
                </svg>
                <label htmlFor="message">MESSAGE</label>
              </div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                rows="6"
                required
              ></textarea>
            </div>

            <div className="submit-container">
              {submitStatus && (
                <div className="submit-status">
                  {submitStatus}
                </div>
              )}
              <button type="submit" className="submit-button">
                <span>Send</span>
                <svg className="submit-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
