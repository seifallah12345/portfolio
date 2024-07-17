import React from 'react';
import './ContactPage.css';

const ContactPage = () => (
  <div className="contact-page">
    <div className="content">
      <h2>Contact</h2>
      <p>You can reach me at:</p>
      <p>Email: saif.mahfoudhi99@gmail.com</p>
      <p>Phone: +14387280368</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" required></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
);

export default ContactPage;
