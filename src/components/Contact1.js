// Import necessary libraries
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./Contact1.css"
// Create a functional component
const ContactForm = () => {
  // Define state variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Email.js configuration
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    // Send email using Email.js
    emailjs.send(
      'service_i0b01yv',
      'template_r40bnnj',
      templateParams,
      'kkcGZkMj8L0IiPUgK'
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
      // Optionally, reset form fields after successful submission
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
    });
  };

  return (
    <div className='app-container'>
        <h1 className="heading1 heading2" 
        
        >CONTACT 
           <span> ME </span>
        </h1>
        <div className='containercontact'>
    <form onSubmit={handleSubmit}>
      <label>
        Your Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
      Your Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
      Your Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
    </div>
    </div>
  );
};

// Export the component
export default ContactForm;
