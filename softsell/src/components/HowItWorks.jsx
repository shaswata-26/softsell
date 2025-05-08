import React from 'react';
import { FaUpload, FaDollarSign, FaMoneyCheckAlt } from 'react-icons/fa';

const steps = [
  { icon: <FaUpload size={32} />, title: 'Upload License' },
  { icon: <FaDollarSign size={32} />, title: 'Get Valuation' },
  { icon: <FaMoneyCheckAlt size={32} />, title: 'Get Paid' }
];

const HowItWorks = () => (
  <section className="py-16 px-4 text-center">
    <h2 className="text-3xl font-bold mb-10">How It Works</h2>
    <div className="grid gap-10 md:grid-cols-3">
      {steps.map((step, index) => (
        <div key={index} className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800">
          <div className="mb-4 text-indigo-600">{step.icon}</div>
          <h3 className="text-xl font-semibold">{step.title}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;