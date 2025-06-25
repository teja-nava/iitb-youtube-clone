import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const watchLater = JSON.parse(sessionStorage.getItem('watchLater')) || [];

  return (
    <nav className="bg-red-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <Link to="/" className="font-bold text-xl hover:text-yellow-300 transition">Mini YouTube</Link>
      <div className="flex gap-6 text-lg">
        <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
        <Link to="/watch-later" className="hover:text-yellow-300 transition">
          Watch Later ({watchLater.length})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;