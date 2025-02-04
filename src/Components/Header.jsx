import React from 'react';
import { BookOpenText } from 'lucide-react'; 
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BookOpenText className="w-9 h-9 text-white" /> 
          <h1 className="text-3xl font-semibold">Writely</h1>
        </div>

       {/*  <nav className="space-x-4">
          <a href="/" className="text-lg hover:text-yellow-400 transition-all">Home</a>
          <a href="/blogs" className="text-lg hover:text-yellow-400 transition-all">Blogs</a>
          <a href="/about" className="text-lg hover:text-yellow-400 transition-all">About</a>
          <a href="/contact" className="text-lg hover:text-yellow-400 transition-all">Contact</a>
        </nav> */}
        
        {/* <div className="space-x-3">
          <button className="bg-blue-500 px-6 py-2 rounded-lg text-white hover:bg-blue-600 transition-all">
            Login
          </button>
          <button className="bg-darkblue-500 px-6 py-2 rounded-lg text-white hover:bg-green-600 transition-all">
            Sign Up
          </button>
        </div> */}

        <div>
          <ul className='flex justify-between'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
