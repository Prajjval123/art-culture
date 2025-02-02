export const EventCard = ({ event }) => (
  <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transform transition-transform duration-300 hover:scale-105 animate-fadeInUp">
    <div className="relative">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      {/* Optional overlay on hover */}
      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
    </div>
    <div className="p-6 h-[260px]">
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{event.title}</h3>
      <p className="text-gray-600 text-base leading-relaxed">{event.description}</p>
    </div>
  </div>
);
