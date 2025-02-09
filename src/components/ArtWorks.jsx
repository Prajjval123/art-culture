import React from "react";
import { events } from "../constants/data";

const ArtWorks = () => {
  return (
    <div className="py-16 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-12">
        <h2 className="text-5xl font-semibold text-center text-gray-800">ArtWorks</h2>
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto">
          Explore our online gallery featuring stunning artworks from talented artists. Each piece is crafted with passion and creativity to bring beauty and elegance to any space.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 py-2">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 h-60 flex flex-col">
                <div className="flex-1 pr-2 relative">
                  <div className="max-h-28 overflow-hidden hover:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-thumb-rounded-full pr-2">
                    <p className="font-semibold text-gray-800">{event.title}</p>
                    <p className="text-sm text-gray-600">Artist: {event.artist}</p>
                    <p className="text-sm text-gray-600">Category: {event.category}</p>
                    <p className="text-sm text-gray-600">Medium: {event.medium}</p>
                    <p className="text-sm text-gray-600">Dimensions: {event.dimensions}</p>
                  </div>
                </div>
                <button className="bg-red-500 text-white text-sm font-semibold rounded-full py-2 mt-2 hover:bg-red-600 transition">
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

export default ArtWorks;
