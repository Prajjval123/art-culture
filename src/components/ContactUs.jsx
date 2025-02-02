import { useState } from "react";

export default function ContactUs() {
  const [message, setMessage] = useState("");
  const maxWords = 200;
  const wordCount = message.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="bg-gray-50 p-8 rounded-xl shadow-xl flex flex-col md:flex-row items-stretch gap-8">
          {/* Google Map Section */}
          <div className="md:w-1/2 flex-1">
            <iframe
              title="Google Map"
              className="w-full h-full rounded-lg border"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094245!2d144.9537363153162!3d-37.81720997975196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577a88ef6e3db0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1611659365393!5m2!1sen!2sau"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Form Section */}
          <div className="md:w-1/2 flex-1 flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              CONTACT <span className="text-red-500">US</span>
            </h2>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text"
                placeholder="Enter Contact Number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              placeholder="Enter Message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 resize-none h-32"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <p className="text-sm text-gray-600">
              Total words: {wordCount} | Words left: {maxWords - wordCount}
            </p>
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
