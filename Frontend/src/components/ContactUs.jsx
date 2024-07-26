import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <>
    <Navbar/>
    <div id="my_modal_6" className=" flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="mt-20 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md w-1/2 relative">
        <h1 className=" mt-3 bg-gray-800 rounded-md py-2 text-3xl font-bold mb-6 text-white dark:text-gray-100 text-center">Contact Us</h1>
        <button
          onClick={handleClose}
          className="absolute btn-circle top-0 right-1 p-1 text-gray-600  btn-ghost dark:text-gray-300 hover:text-gray-800 dark: hover:bg-gray-300 "
        >
          ✕
        </button>
        
        {/* Contact Details Section */}
        <div className="mb-2 text-center">
          <h2 className="text-2xl font-semibold mb-1 text-gray-800 dark:text-gray-100">Get in Touch</h2>
          <div >
            <p className="text-gray-700 dark:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block h-5 w-5 text-gray-600 dark:text-gray-400 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h4V7H3v3zm0 4h4v-3H3v3zm6 0h4v-3H9v3zm0-4h4V7H9v3zm6 4h4v-3h-4v3zm0-4h4V7h-4v3zm6 4h4v-3h-4v3zm0-4h4V7h-4v3z"
                />
              </svg>
              456, Maple Street, Mumbai, India
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block h-5 w-5 text-gray-600 dark:text-gray-400 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12.6c0 .722-.37 1.394-1 1.741l-7.007 4.004a1.418 1.418 0 0 1-1.648-.144L3 14.025a1.418 1.418 0 0 1-.146-1.649L6.036 5.71a1.418 1.418 0 0 1 1.75-.074L14.988 8.37a1.418 1.418 0 0 1 .64 1.553l-3.096 7.623a1.418 1.418 0 0 1-.815.748z"
                />
              </svg>
              support@yourdomain.in
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block h-5 w-5 text-gray-600 dark:text-gray-400 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7zm4 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm6-4h4v2h-4V7zm-6 0h4v2H7V7z"
                />
              </svg>
              +91 987 654 3210
            </p>
          </div>
        </div>
        
        {/* Contact Form Section */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default ContactUs;

