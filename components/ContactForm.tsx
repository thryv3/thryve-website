'use client'; // Required for handling form state/events

import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: 'Mobile Development',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic (e.g., send data to an API)
        console.log('Form submitted:', formData);
        alert('Message sent (check console)!'); // Placeholder feedback
        // Reset form (optional)
        // setFormData({ name: '', email: '', projectType: 'Mobile Development', message: '' });
    };


    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                />
            </div>
            <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
                <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-teal-500 focus:border-teal-500 text-black"
                >
                    <option className="text-black">Mobile Development</option>
                    <option className="text-black">Web Development</option>
                    <option className="text-black">UI/UX Design</option>
                    <option className="text-black">Consulting</option>
                    <option className="text-black">Other</option>
                </select>
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                ></textarea>
            </div>
            <div>
                <button
                    type="submit"
                    className="w-full bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600 transition duration-300 font-semibold"
                >
                    Send Message
                </button>
            </div>
        </form>
    );
};

export default ContactForm; 