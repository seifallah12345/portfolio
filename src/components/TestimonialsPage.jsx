import React from 'react';
import './TestimonialsPage.css';

const TestimonialsPage = ({ testimonials }) => (
  <div className="testimonials-page">
    <div className="content">
      <h2>Testimonials</h2>
      {testimonials.length > 0 ? (
        testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <h3>{testimonial.name}</h3>
            <p>{testimonial.testimonial}</p>
          </div>
        ))
      ) : (
        <p>No testimonials yet.</p>
      )}
    </div>
  </div>
);

export default TestimonialsPage;
