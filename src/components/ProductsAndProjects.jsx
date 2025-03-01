import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Example EventCard with fixed height
export const EventCard = ({ event }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden 
                 flex flex-col w-full h-[500px]"
    >
      {/* Top section (image) - fix its height */}
      <div className="h-1/2">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom section (text) fills the remaining half */}
      <div className="p-4 flex flex-col">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          {event.title}
        </h3>

        {/* 
          Truncate text to avoid overflow. 
          (Requires Tailwind's line-clamp plugin)
        */}
        <p className="text-gray-700 text-justify line-clamp-5">
          {event.description}
        </p>
      </div>
    </div>
  );
};

// Dummy events arrays (you can add extra dummy items if needed)
const events1 = [
  {
    title: "Relief Resin Mural",
    description:
      "Resin exterior wall relief mural artwork installed at UIDAI Head Quarter Building, New Delhi. This artwork is executed by our Indian Artists.",
    image: "/assets/home/products1/homeproduct2.jpg",
  },
  {
    title: "Glass Mosaic Tiles",
    description:
      "Glass mosaic tiles mural work installed at Mayur Vihar Phase-II Metro Station, New Delhi, India. This beautiful artwork is executed by our famous India Artists.",
    image: "assets/home/products1/homeproduct1.jpg",
  },
  {
    title: "Canvas Painting",
    description:
      "Canvas painting installed at IUAC, Inter-University Accelerator Centre Building New Delhi showcasing the concept of Nano Particles. Painting done using high quality Acrylic color and framed with a wooden frame.",
    image: "assets/home/products1/homeproduct3.jpg",
  },
  {
    title: "Relief Resin Mural",
    description:
      "Resin exterior wall relief mural artwork installed at UIDAI Head Quarter Building, New Delhi. This artwork is executed by our Indian Artists.",
    image: "assets/home/products1/homeproduct2.jpg",
  },
  {
    title: "Glass Mosaic Tiles",
    description:
      "Glass mosaic tiles mural work installed at Mayur Vihar Phase-II Metro Station, New Delhi, India. This beautiful artwork is executed by our famous India Artists.",
    image: "assets/home/products1/homeproduct1.jpg",
  },
  {
    title: "Canvas Painting",
    description:
      "Canvas painting installed at IUAC, Inter-University Accelerator Centre Building New Delhi showcasing the concept of Nano Particles. Painting done using high quality Acrylic color and framed with a wooden frame.",
    image: "assets/home/products1/homeproduct3.jpg",
  },
  {
    title: "Relief Resin Mural",
    description:
      "Resin exterior wall relief mural artwork installed at UIDAI Head Quarter Building, New Delhi. This artwork is executed by our Indian Artists.",
    image: "assets/home/products1/homeproduct2.jpg",
  },
  {
    title: "Glass Mosaic Tiles",
    description:
      "Glass mosaic tiles mural work installed at Mayur Vihar Phase-II Metro Station, New Delhi, India. This beautiful artwork is executed by our famous India Artists.",
    image: "assets/home/products1/homeproduct1.jpg",
  },
  {
    title: "Canvas Painting",
    description:
      "Canvas painting installed at IUAC, Inter-University Accelerator Centre Building New Delhi showcasing the concept of Nano Particles. Painting done using high quality Acrylic color and framed with a wooden frame.",
    image: "assets/home/products1/homeproduct3.jpg",
  },
];

const events2 = [
  {
    title: "Fibre Glass Mural",
    description:
      " Resin relief mural artwork with steel frame installed at Aadhaar Head Quarter Building, Bangla Sahib Road, New Delhi, India. Design, Modelling, Casting and execution is done by our US-INDIA ART AND CULTURE EXCHANGE CENTRE Artists.",
    image: "assets/home/products2/homeproduct2.1.jpg",
  },
  {
    title: "Wall Painting",
    description:
      " Wall painting at Inter University Accelerator Center, IUAC, Vasant Kunj, New Delhi, India. This Artwork is done by the Artists of US-INDIA ART AND CULTURE EXCHANGE CENTRE. ",
    image: "assets/home/products2/homeproduct2.2.jpg",
  },
  {
    title: "DMRC",
    description:
      " Wall painting at Inter University Accelerator Center, IUAC, Vasant Kunj, New Delhi, India. This Artwork is done by the Artists of US-INDIA ART AND CULTURE EXCHANGE CENTRE. ",
    image: "assets/home/products2/homeproduct2.3.jpg",
  },
  {
    title: "Fibre Glass Mural",
    description:
      " Resin relief mural artwork with steel frame installed at Aadhaar Head Quarter Building, Bangla Sahib Road, New Delhi, India. Design, Modelling, Casting and execution is done by our US-INDIA ART AND CULTURE EXCHANGE CENTRE Artists.",
    image: "assets/home/products2/homeproduct2.1.jpg",
  },
  {
    title: "Wall Painting",
    description:
      " Wall painting at Inter University Accelerator Center, IUAC, Vasant Kunj, New Delhi, India. This Artwork is done by the Artists of US-INDIA ART AND CULTURE EXCHANGE CENTRE. ",
    image: "assets/home/products2/homeproduct2.2.jpg",
  },
  {
    title: "DMRC",
    description:
      " Wall painting at Inter University Accelerator Center, IUAC, Vasant Kunj, New Delhi, India. This Artwork is done by the Artists of US-INDIA ART AND CULTURE EXCHANGE CENTRE. ",
    image: "assets/home/products2/homeproduct2.3.jpg",
  },
  {
    title: "Fibre Glass Mural",
    description:
      " Resin relief mural artwork with steel frame installed at Aadhaar Head Quarter Building, Bangla Sahib Road, New Delhi, India. Design, Modelling, Casting and execution is done by our US-INDIA ART AND CULTURE EXCHANGE CENTRE Artists.",
    image: "assets/home/products2/homeproduct2.1.jpg",
  },
  {
    title: "Wall Painting",
    description:
      " Wall painting at Inter University Accelerator Center, IUAC, Vasant Kunj, New Delhi, India. This Artwork is done by the Artists of US-INDIA ART AND CULTURE EXCHANGE CENTRE. ",
    image: "assets/home/products2/homeproduct2.2.jpg",
  },
  {
    title: "DMRC",
    description:
      " Wall painting at Inter University Accelerator Center, IUAC, Vasant Kunj, New Delhi, India. This Artwork is done by the Artists of US-INDIA ART AND CULTURE EXCHANGE CENTRE. ",
    image: "assets/home/products2/homeproduct2.3.jpg",
  },
];

const ProductsAndProjects = () => {
  return (
    <section className="py-16 bg-gray-100 w-full">
      {/* Wide container */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-8">
          Products &amp; Projects
        </h2>
        <p className="max-w-4xl mx-auto text-lg text-gray-700 mb-12 text-center">
          USIAC is where creativity and quality come together! We create
          aesthetically pleasing statues, sculptures, murals, paintings, and wall
          art in a variety of metals and materials including bronze, brass,
          copper, aluminum, stone, fiber, glass, and more. We work closely with
          customers, designing products with only premium quality materials.
        </p>

        {/* First Carousel */}
        <div className="mb-16">
          <Swiper
            modules={[Navigation]}
            navigation
            loop
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper"
          >
            {events1.map((event, index) => (
              <SwiperSlide key={index}>
                <div className="px-[0.5] py-4">
                  <EventCard event={event} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Second Carousel */}
        <Swiper
          modules={[Navigation]}
          navigation
          loop
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {events2.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="px-[0.5] py-4">
                <EventCard event={event} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductsAndProjects;