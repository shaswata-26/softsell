import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', license: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-4">
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required className="p-3 border rounded" />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className="p-3 border rounded" />
        <input type="text" name="company" placeholder="Company" value={form.company} onChange={handleChange} className="p-3 border rounded" />
        <select name="license" value={form.license} onChange={handleChange} required className="p-3 border rounded">
          <option value="">Select License Type</option>
          <option value="windows">Windows</option>
          <option value="office">Microsoft Office</option>
          <option value="adobe">Adobe Suite</option>
        </select>
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} className="p-3 border rounded" rows="4" />
        <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;