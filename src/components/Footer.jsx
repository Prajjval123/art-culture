import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Details */}
          <div>
            <div className="mb-4">
            <p className="mb-2 text-xl text-red-500">Contact Person - <span className="font-medium">Mr. Arnab Paul</span></p>
            <div className="flex justify-center"><div className="bg-red-500 h-[1px] w-2/3"></div></div>
            </div>
            <p className="mb-2">
              97-A, (FFB) Indraprastha Estate Sector-30-33, <br className="hidden md:block" />
              Faridabad, Haryana-121003.
            </p>
            <p className="mb-2">+91-9810041039</p>
            <p className="mb-2">+91-9319644022</p>
            <p>usindiaartculturecenter@gmail.com</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-red-500">Quick Links</h3>
            <div className="flex justify-center"><div className="bg-red-500 h-[1px] w-2/3"></div></div>
            <ul className="space-y-2 mt-4">
              <li>
                <a href="#whatwedo" className="hover:underline hover:text-red-400">
                  What We Do
                </a>
              </li>
              <li>
                <a href="#forartist" className="hover:underline hover:text-red-400">
                  For Artist
                </a>
              </li>
              <li>
                <a href="#fromthefounder" className="hover:underline hover:text-red-400">
                  From The Founder
                </a>
              </li>
              <li>
                <a href="#privacypolicy" className="hover:underline hover:text-red-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:underline hover:text-red-400">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#newsletter" className="hover:underline hover:text-red-400">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-xl font-semibold text-red-500 mb-2">Subscribe</h3>
            <div className="flex justify-center"><div className="bg-red-500 h-[1px] w-2/3"></div></div>
            <p className="my-4">
              Subscribe to be first to hear about our exclusive offers and latest arrivals
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="email address"
                className="w-full p-3 text-gray-900 bg-white rounded-l-md focus:outline-none"
              />
              <button className="bg-red-500 px-6 py-3 rounded-r-md hover:bg-red-600 transition">
                Go
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          Copyright © Orpax Qualtra All Right Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
