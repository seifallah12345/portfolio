import React, { createContext, useState, ReactNode, useContext } from 'react';

interface Testimonial {
  name: string;
  testimonial: string;
}

interface TestimonialsContextType {
  testimonials: Testimonial[];
  addTestimonial: (testimonial: Testimonial) => void;
}

const TestimonialsContext = createContext<TestimonialsContextType | undefined>(undefined);

export const TestimonialsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  const addTestimonial = (testimonial: Testimonial) => {
    setTestimonials([...testimonials, testimonial]);
  };

  return (
    <TestimonialsContext.Provider value={{ testimonials, addTestimonial }}>
      {children}
    </TestimonialsContext.Provider>
  );
};

export const useTestimonials = () => {
  const context = useContext(TestimonialsContext);
  if (!context) {
    throw new Error('useTestimonials must be used within a TestimonialsProvider');
  }
  return context;
};
