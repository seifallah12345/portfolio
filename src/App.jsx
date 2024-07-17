import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProjectPage from './components/ProjectPage';
import ContactPage from './components/ContactPage';
import TestimonialsPage from './components/TestimonialsPage';
import LeaveTestimonialPage from './components/LeaveTestimonialPage';
import './App.css';

const App = () => {
  const [testimonials, setTestimonials] = useState([]);

  const addTestimonial = (testimonial) => {
    setTestimonials([...testimonials, testimonial]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/testimonials" element={<TestimonialsPage testimonials={testimonials} />} />
        <Route path="/leave-testimonial" element={<LeaveTestimonialPage addTestimonial={addTestimonial} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
