import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-dark py-10 shadow-lg">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* First Column */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-red-500">Shop</h2>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-dark-800">Menu</Link></li>
              <li><Link to="#" className="hover:text-dark-800">Order Now</Link></li>
              <li><Link to="#" className="hover:text-dark-800">Special Offers</Link></li>
              <li><Link to="#" className="hover:text-dark-800">Contact Us</Link></li>
            </ul>
          </div>

          {/* Second Column */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-red-500">Customer Service</h2>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-dark-800">FAQ</Link></li>
              <li><Link to="#" className="hover:text-dark-800">Returns & Exchanges</Link></li>
              <li><Link to="#" className="hover:text-dark-800">Shipping Info</Link></li>
            </ul>
          </div>

          {/* Third Column */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-red-500">About Us</h2>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-dark-800">Our Story</Link></li>
              <li><Link to="#" className="hover:text-dark-800">Careers</Link></li>
              <li><Link to="#" className="hover:text-dark-800">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-dark-800">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Fourth Column */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-red-500">Follow Us</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-dark-800">Facebook</a></li>
              <li><a href="#" className="hover:text-dark-800">Instagram</a></li>
              <li><a href="#" className="hover:text-dark-800">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-center text-sm border-t border-gray-700 pt-6">
          © {new Date().getFullYear()} All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;