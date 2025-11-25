import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import about from "../Assets/about.jpg";

const ReachUs = () => {
  return (
    <section id="contact-4" className="w-full bg-white text-red-500">
      {/* Background Image Section */}
      <div
        className="w-full bg-cover bg-center relative flex items-center justify-center py-28"
        style={{ backgroundImage: `url(${about})` }}
      >
        <div className="text-center bg-black bg-opacity-50 px-6 py-4 rounded-lg">
          <h2 className="text-6xl font-extrabold text-white drop-shadow-lg">Reach Us</h2>
          <p className="mt-3 text-lg text-gray-200">Delivering Happiness, One Meal at a Time!</p>
        </div>
      </div>     
      <div className="w-full flex flex-col items-center mt-5 p-4">
        {/* Google Map */}
        <div className="rounded-lg overflow-hidden w-full shadow-lg">
          <iframe
            className="rounded-lg w-full h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.844120587268!2d72.64465197490691!3d33.58193227333632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df056c6b5f959b%3A0x3eb1b42e01f85c7f!2sNew%20Hope%20School!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Information */}
        <div className="bg-white text-red-500 shadow-lg rounded-lg p-6 w-full max-w-2xl -mt-16">
          <h4 className="text-xl font-semibold flex items-center mb-3">
            <FaMapMarkerAlt className="mr-2" /> Address
          </h4>
          <p className="text-gray-700">Stadium Rd, near New Hope School, Fateh Jang, Attock, Punjab 43350, Pakistan</p>
          
          <h4 className="text-xl font-semibold flex items-center mt-4 mb-3">
            <FaPhoneAlt className="mr-2" /> Contact
          </h4>
          <p className="text-gray-700">Phone: (Your Contact Number)</p>
          <p className="text-gray-700">Email: contact@example.com</p>
        </div>
      </div>
    </section>
  );
};

export default ReachUs;