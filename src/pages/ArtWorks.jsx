import React from "react";
import { events } from "../constants/data";

const ArtWorksPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-8xl mx-auto px-8 py-12">
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 py-4 px-24 rounded-lg w-full">
            <select className="p-2 border border-gray-300 rounded w-48">
              <option>Any Category</option>
              <option>SCULPTURE</option>
              <option>PAINTING</option>
              <option>STATUE</option>
              <option>MURAL</option>
              <option>OTHERS</option>
            </select>
            <select className="p-2 border border-gray-300 rounded w-48">
              <option>Any Artists</option>
            </select>
            <select className="p-2 border border-gray-300 rounded w-48">
              <option>Any Medium</option>
            </select>
            <select className="p-2 border border-gray-300 rounded w-48">
              <option>Any Height</option>
            </select>
            <select className="p-2 border border-gray-300 rounded w-48">
              <option>Any Width</option>
            </select>
            <select className="p-2 border border-gray-300 rounded w-48">
              <option>For Sale</option>
            </select>
            <input
              type="text"
              placeholder="Search"
              className="p-2 border border-gray-300 rounded flex-grow"
            />
          </div>
        </div>

        <nav className="mb-12">
          <ul class="flex items-center justify-center space-x-1">
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
              >
                <span class="sr-only">Previous</span>
                <svg
                  class="w-2 h-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1L1 5l4 4"
                  />
                </svg>
              </a>
            </li>
            {[1, 2, 3, 4, 5, 6, 7, 8, "...", 49, 50].map((page) => (
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  {page}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
              >
                <span class="sr-only">Next</span>
                <svg
                  class="w-2 h-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg mt-4 hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-80 object-cover rounded-t-xl"
              />
              <div className="p-4 h-96 flex flex-col">
                <div className="flex-1 pr-2 relative">
                  <div className="overflow-hidden hover:overflow-y-auto text-justify flex flex-col gap-1">
                    <p className="font-semibold text-gray-600 text-left">
                      {event.title}
                    </p>
                    <div className="h-[1px] bg-gray-600 mb-4"></div>
                    {/* <p className="flex justify-between text-gray-600"><span className="font-semibold">Title: </span><span className="text-right">{event.title}</span></p> */}
                    <p className="flex justify-between text-gray-600">
                      <span className="font-semibold">Artist: </span>
                      {event.artist}
                    </p>
                    <p className="flex justify-between text-gray-600">
                      <span className="font-semibold">Category:</span>
                      {event.category}
                    </p>
                    <p className="flex justify-between text-gray-600">
                      <span className="font-semibold">Medium: </span>
                      {event.medium}
                    </p>
                    <p className="flex justify-between text-gray-600">
                      <span className="font-semibold">Dimensions:</span>{" "}
                      {event.dimensions}
                    </p>
                  </div>
                </div>
                <button className="bg-red-500  px-16 self-center text-white text-sm font-semibold rounded-full py-2 mb-8 cursor-pointer hover:bg-red-600 transition">
                  Enquiry
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtWorksPage;
