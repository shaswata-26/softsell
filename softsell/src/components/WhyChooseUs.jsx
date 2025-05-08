import React from 'react';
import { FaShieldAlt, FaRocket, FaThumbsUp } from 'react-icons/fa';

const features = [
  { icon: <FaShieldAlt size={24} />, title: 'Secure Transactions', desc: 'We ensure your data and transactions are protected.' },
  { icon: <FaRocket size={24} />, title: 'Fast Payouts', desc: 'Receive payments quickly and hassle-free.' },
  { icon: <FaThumbsUp size={24} />, title: 'Trusted by 1,000+ Users', desc: 'Join thousands of satisfied sellers globally.' }
];

const WhyChooseUs = () => (
  <section className="py-16 px-4">
    <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
    <div className="grid gap-8 md:grid-cols-3">
      {features.map((item, index) => (
        <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="text-indigo-600 mb-3">{item.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseUs;