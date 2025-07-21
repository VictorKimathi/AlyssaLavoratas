import React, { useState } from 'react';
import Button from './Button';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  return <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-white mb-2">
          Name
        </label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-[#22272B] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61DAFB] text-white" />
      </div>
      <div>
        <label htmlFor="email" className="block text-white mb-2">
          Email
        </label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-[#22272B] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61DAFB] text-white" />
      </div>
      <div>
        <label htmlFor="subject" className="block text-white mb-2">
          Subject
        </label>
        <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 bg-[#22272B] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61DAFB] text-white" />
      </div>
      <div>
        <label htmlFor="message" className="block text-white mb-2">
          Message
        </label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 bg-[#22272B] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61DAFB] text-white resize-none"></textarea>
      </div>
      <div>
        <Button type="submit" variant="primary" className="w-full md:w-auto">
          Send Message
        </Button>
      </div>
    </form>;
};
export default ContactForm;