import React from 'react';
import { useTestimonials } from '../context/TestimonialsContext';
import './TestimonialsPage.css';

const TestimonialsPage: React.FC = () => {
  const { testimonials } = useTestimonials();

  return (
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
};

export default TestimonialsPage;
