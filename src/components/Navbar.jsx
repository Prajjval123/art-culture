import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <img 
              src="/assets/US-INDIA-Logo.jpg" 
              alt="Cultural Center Logo" 
              className="h-20"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="group duration-300 text-gray-600 hover:text-blue-600 transition-colors">
              Home
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
            </Link>
            <Link to="/about" className="group duration-300 text-gray-600 hover:text-blue-600 transition-colors">
              About US
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
            </Link>
            <Link to="/projects-products" className="group duration-300 text-gray-600 hover:text-blue-600 transition-colors">
              Projects & Products
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
            </Link>
            <Link to="/artworks" className="group duration-300 text-gray-600 hover:text-blue-600 transition-colors">
              ArtWorks
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
            </Link>
            <Link to="/exhibitions" className="group duration-300 text-gray-600 hover:text-blue-600 transition-colors">
              Exhibitions
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
            </Link>
            <Link to="/art-history" className="group duration-300 text-gray-600 hover:text-blue-600 transition-colors">
              Art History
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
            </Link>
            <Link to="/infrastructure" className="group duration-300 text-gray-600 hover:text-blue-600 transition-colors">
              Infrastructue
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
            </Link>
            <Link to="/login" className="group duration-300 text-gray-600 hover:text-blue-600 transition-colors">
              Login
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
            </Link>
          </div>

          <button 
            className="md:hidden p-2 self-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <Link to="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-50">
              Home
            </Link>
            <Link to="/about" className="block px-4 py-2 text-gray-600 hover:bg-gray-50">
              About
            </Link>
            <Link to="/events" className="block px-4 py-2 text-gray-600 hover:bg-gray-50">
              Events
            </Link>
            <Link to="/contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-50">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}