import React, { useState } from 'react';
import { useTestimonials } from '../context/TestimonialsContext';
import './LeaveTestimonialPage.css';

const LeaveTestimonialPage = () => {
  const [name, setName] = useState('');
  const [testimonial, setTestimonial] = useState('');
  const { addTestimonial } = useTestimonials();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTestimonial({ name, testimonial });
    setName('');
    setTestimonial('');
  };

  return (
    <div className="leave-testimonial-page">
      <div className="content">
        <h2>Leave a Testimonial</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Testimonial:
            <textarea
              value={testimonial}
              onChange={(e) => setTestimonial(e.target.value)}
              required
            ></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LeaveTestimonialPage;
