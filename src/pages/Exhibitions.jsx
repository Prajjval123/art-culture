import React, { useState } from "react";
import { events, exhibitons } from "../constants/data";

const Exhibitions = () => {
  const [showVideos, setShowVideos] = useState(true);

  const handleShowVideos = () => {
    setShowVideos(true);
  }

  const handleShowImages = () => {
    setShowVideos(false);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-8xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold  text-gray-800 mb-24 text-center">
          Exhibitions
        </h1>

        <div className="mb-8">
          <div className="flex gap-4 py-2">
            <button onClick={handleShowVideos} className={`${showVideos ? "bg-red-500" : "bg-gray-400"} px-16 text-white text-md font-semibold rounded-sm py-3 cursor-pointer hover:bg-red-600 transition`}>
              Videos
            </button>
            <button onClick={handleShowImages} className={`${!showVideos ? "bg-red-500" : "bg-gray-400"} px-16 text-white text-md font-semibold rounded-sm py-3 cursor-pointer hover:bg-red-600 transition`}>
              Images
            </button>
          </div>
          <div className="h-[1.5px] bg-red-500 w-full"></div>
        </div>

        {/* for videos */}
        {showVideos && <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div className="p-4 h-24 flex flex-col">
                Mr. Ram Jethmalani Opening Speech
              </div>
            </div>
          ))}
        </div>}
        {/* for images */}
        {!showVideos && <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {exhibitons.images.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg mt-4 hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-80 object-cover rounded-t-xl"
              />
              <div className="p-4 h-24 flex flex-col">{event.title}</div>
            </div>
          ))}
        </div>}
      </div>
    </div>
  );
};

export default Exhibitions;
