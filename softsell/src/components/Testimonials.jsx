import React from 'react';

const testimonials = [
  { name: 'Jane Doe', role: 'IT Manager', company: 'TechCorp', text: 'SoftSell made it super easy to recover value from our unused licenses.' },
  { name: 'John Smith', role: 'Operations Lead', company: 'SoftSolutions', text: 'A seamless experience from start to finish. Highly recommended!' }
];

const Testimonials = () => (
  <section className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
    <h2 className="text-3xl font-bold text-center mb-10">Customer Testimonials</h2>
    <div className="grid gap-8 md:grid-cols-2">
      {testimonials.map((review, idx) => (
        <div key={idx} className="bg-white dark:bg-gray-900 p-6 rounded shadow">
          <p className="mb-4">"{review.text}"</p>
          <p className="font-semibold">- {review.name}, {review.role} at {review.company}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;