import React from 'react';

import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="bg-black text-white flex justify-between items-center px-6 py-4">
      {/* Logo */}
      <Link to="/" className="text-3xl font-bold text-blue-500">
        Resumee<span className="italic">fy</span>
      </Link>

      {/* Navigation Links */}
      <div className=" md:flex space-x-6 text-sm">
        <Link
          to="/packages"
          className="px-4 py-4 hover:text-gray-400 hidden md:block"
        >
          Our Packages
        </Link>
        <Link
          to="/how-we-do-it"
          className="hover:text-gray-400 px-4 py-4 hidden md:block"
        >
          How We Do It
        </Link>
        <Link
          to="/testimonials"
          className="hover:text-gray-400 px-4 py-4 hidden md:block"
        >
          Testimonials
        </Link>
        <Link
          to="/free-cv-review"
          className="hover:text-gray-500 px-4 py-4 hidden md:block"
        >
          Free CV Review
        </Link>
        <Link
          to="/order"
          className="bg-blue-600 px-4 py-4  text-white  rounded-md hover:bg-blue-700"
        >
          Order now
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
