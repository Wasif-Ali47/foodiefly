import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import img from "../Assets/contactsection.jpg";

const ContactUs = () => {
  return (
    <main className="p-0 m-0">

      {/* Background Image Section */}
      <div
        className="w-full bg-cover bg-center relative flex items-center justify-center py-28"
        // style={{ backgroundImage: `url(${about})` }}
      >
        <div className="text-center bg-black bg-opacity-50 px-6 py-4 rounded-lg">
          <h2 className="text-6xl font-extrabold text-white drop-shadow-lg">Contact Us</h2>
          <p className="mt-3 text-lg text-gray-200">Delivering Happiness, One Meal at a Time!</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white w-full px-6 md:px-20 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-center shadow-lg rounded-lg">
        <div className="hidden md:block md:col-span-1">
          <img
            src={img}
            alt="Contact Us"
            className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h1>
          <div className="space-y-6">
            <div>
              <label className="mb-1 block font-semibold text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 py-2 px-3"
              />
            </div>
            <div>
              <label className="mb-1 block font-semibold text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 py-2 px-3"
              />
            </div>
            <div>
              <label className="mb-1 block font-semibold text-gray-700">Message</label>
              <textarea
                placeholder="Your message here"
                className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 py-2 px-3 h-32 resize-none"
              ></textarea>
            </div>
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-shadow shadow-lg text-lg font-semibold w-full md:w-auto">
              Send Message
            </button>
          </div>
        </div>
      </div>


      {/* Contact Details Section */}
      <div className="bg-gray-100 px-6 md:px-20 py-12 text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">Contact Information</h3>
        <div className="flex items-center justify-center gap-3 text-gray-700 text-lg">
          <FaEnvelope className="text-red-500" />
          <span>support@example.com</span>
        </div>
        <div className="flex items-center justify-center gap-3 text-gray-700 text-lg mt-4">
          <FaMapMarkerAlt className="text-red-500" />
          <span>G-6, Blue Area, Islamabad</span>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="px-6 md:px-20 py-16 text-center bg-white ">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">FAQs</h3>
        <div className="space-y-6 max-w-2xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md text-left">
            <h4 className="font-bold text-lg">How can I contact customer support?</h4>
            <p className="text-gray-600 mt-2">You can email us at <span className="text-red-500">support@example.com</span></p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-left">
            <h4 className="font-bold text-lg">What are your working hours?</h4>
            <p className="text-gray-600 mt-2">Monday to Friday, 9 AM - 6 PM</p>
          </div>
        </div>
      </div>

      {/* Follow Us Section */}
      <div className="bg-white  text-white px-6 md:px-20 py-12 text-center d-flex items-center justify-center">
        <div className="bg-red-500 text-white shadow-lg rounded-lg p-6 w-full max-w-4xl mt-6">
          <h4 className="text-xl font-semibold mb-3">Follow Us</h4>
          <p className="text-white-500">Stay connected through our social media channels.</p>
          <div className="flex space-x-4 mt-3 d-flex items-center justify-center">
            <a href="#" className="text-white-500 hover:text-white-700 text-2xl"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-white-500 hover:text-white-700 text-2xl"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white-500 hover:text-white-700 text-2xl"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

    </main>
  );
};

export default ContactUs;
