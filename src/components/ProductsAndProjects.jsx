import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { EventCard } from "./EventCard";

// Dummy events arrays (you can add extra dummy items if needed)
const events1 = [
  {
    title: "Relief Resin Mural",
    description:
      "Resin exterior wall relief mural artwork installed at UIDAI Head Quarter Building, New Delhi. This artwork is executed by our Indian Artists.",
    image: "src/assets/home/products1/homeproduct2.jpg",
  },
  {
    title: "Glass Mosaic Tiles",
    description:
      "Glass mosaic tiles mural work installed at Mayur Vihar Phase-II Metro Station, New Delhi, India. This beautiful artwork is executed by our famous India Artists.",
    image: "src/assets/home/products1/homeproduct1.jpg",
  },
  {
    title: "Canvas Painting",
    description:
      "Canvas painting installed at IUAC, Inter-University Accelerator Centre Building New Delhi showcasing the concept of Nano Particles. Painting done using high quality Acrylic color and framed with a wooden frame.",
    image: "src/assets/home/products1/homeproduct3.jpg",
  },
  {
    title: "Relief Resin Mural",
    description:
      "Resin exterior wall relief mural artwork installed at UIDAI Head Quarter Building, New Delhi. This artwork is executed by our Indian Artists.",
    image: "src/assets/home/products1/homeproduct2.jpg",
  },
  {
    title: "Glass Mosaic Tiles",
    description:
      "Glass mosaic tiles mural work installed at Mayur Vihar Phase-II Metro Station, New Delhi, India. This beautiful artwork is executed by our famous India Artists.",
    image: "src/assets/home/products1/homeproduct1.jpg",
  },
  {
    title: "Canvas Painting",
    description:
      "Canvas painting installed at IUAC, Inter-University Accelerator Centre Building New Delhi showcasing the concept of Nano Particles. Painting done using high quality Acrylic color and framed with a wooden frame.",
    image: "src/assets/home/products1/homeproduct3.jpg",
  },
  {
    title: "Relief Resin Mural",
    description:
      "Resin exterior wall relief mural artwork installed at UIDAI Head Quarter Building, New Delhi. This artwork is executed by our Indian Artists.",
    image: "src/assets/home/products1/homeproduct2.jpg",
  },
  {
    title: "Glass Mosaic Tiles",
    description:
      "Glass mosaic tiles mural work installed at Mayur Vihar Phase-II Metro Station, New Delhi, India. This beautiful artwork is executed by our famous India Artists.",
    image: "src/assets/home/products1/homeproduct1.jpg",
  },
  {
    title: "Canvas Painting",
    description:
      "Canvas painting installed at IUAC, Inter-University Accelerator Centre Building New Delhi showcasing the concept of Nano Particles. Painting done using high quality Acrylic color and framed with a wooden frame.",
    image: "src/assets/home/products1/homeproduct3.jpg",
  },
];

const events2 = [
  {
    title: "Fibre Glass Mural",
    description:
      " Resin relief mural artwork with steel frame installed at Aadhaar Head Quarter Building, Bangla Sahib Road, New Delhi, India. Design, Modelling, Casting and execution is done by our US-INDIA ART AND CULTURE EXCHANGE CENTRE Artists.",
    image: "src/assets/home/products2/homeproduct2.1.jpg",
  },
  {
    title: "Wall Painting",
    description:
      " Wall painting at Inter University Accelerator Center, IUAC, Vasant Kunj, New Delhi, India. This Artwork is done by the Artists of US-INDIA ART AND CULTURE EXCHANGE CENTRE. ",
    image: "src/assets/home/products2/homeproduct2.2.jpg",
  },
  {
    title: "DMRC",
    description:
      " Wall painting at Inter University Accelerator Center, IUAC, Vasant Kunj, New Delhi, India. This Artwork is done by the Artists of US-INDIA ART AND CULTURE EXCHANGE CENTRE. ",
    image: "src/assets/home/products2/homeproduct2.3.jpg",
  },
  {
    title: "Fibre Glass Mural",
    description:
      " Resin relief mural artwork with steel frame installed at Aadhaar Head Quarter Building, Bangla Sahib Road, New Delhi, India. Design, Modelling, Casting and execution is done by our US-INDIA ART AND CULTURE EXCHANGE CENTRE Artists.",
    image: "src/assets/home/products2/homeproduct2.1.jpg",
  },
  {
    title: "Wall Painting",
    description:
      " Wall painting at Inter University Accelerator Center, IUAC, Vasant Kunj, New Delhi, India. This Artwork is done by the Artists of US-INDIA ART AND CULTURE EXCHANGE CENTRE. ",
    image: "src/assets/home/products2/homeproduct2.2.jpg",
  },
  {
    title: "DMRC",
    description:
      " Wall painting at Inter University Accelerator Center, IUAC, Vasant Kunj, New Delhi, India. This Artwork is done by the Artists of US-INDIA ART AND CULTURE EXCHANGE CENTRE. ",
    image: "src/assets/home/products2/homeproduct2.3.jpg",
  },
  {
    title: "Fibre Glass Mural",
    description:
      " Resin relief mural artwork with steel frame installed at Aadhaar Head Quarter Building, Bangla Sahib Road, New Delhi, India. Design, Modelling, Casting and execution is done by our US-INDIA ART AND CULTURE EXCHANGE CENTRE Artists.",
    image: "src/assets/home/products2/homeproduct2.1.jpg",
  },
  {
    title: "Wall Painting",
    description:
      " Wall painting at Inter University Accelerator Center, IUAC, Vasant Kunj, New Delhi, India. This Artwork is done by the Artists of US-INDIA ART AND CULTURE EXCHANGE CENTRE. ",
    image: "src/assets/home/products2/homeproduct2.2.jpg",
  },
  {
    title: "DMRC",
    description:
      " Wall painting at Inter University Accelerator Center, IUAC, Vasant Kunj, New Delhi, India. This Artwork is done by the Artists of US-INDIA ART AND CULTURE EXCHANGE CENTRE. ",
    image: "src/assets/home/products2/homeproduct2.3.jpg",
  },
];

const carouselOptions = {
  items: 4,
  margin: 16,
  nav: true,
  dots: false,
  navText: [
    '<span class="carousel-nav-btn carousel-prev">‹</span>',
    '<span class="carousel-nav-btn carousel-next">›</span>',
  ],
  responsive: {
    0: { items: 1 },
    640: { items: 2 },
    1024: { items: 4 },
  },
};

const ProductsAndProjects = () => {
  return (
    <section className="py-16 bg-gray-100 w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-8">
          Products & Projects
        </h2>
        <p className="max-w-4xl mx-auto text-center text-lg text-gray-700 mb-12">
          USIAC is where creativity and quality come together! We create
          aesthetically pleasing statues, sculptures, murals, paintings, and
          wall art in a variety of metals and materials including, but not
          limited to, bronze, brass, copper, aluminum, stone, fiber, glass, and
          more. We work closely and creatively with customers, designing
          products with only premium quality metal and materials.
        </p>

        {/* First Carousel */}
        <div className="mb-12 relative">
          <OwlCarousel className="owl-theme" {...carouselOptions}>
            {events1.map((event, index) => (
              <div key={index} className="p-2">
                <EventCard event={event} />
              </div>
            ))}
          </OwlCarousel>
        </div>

        {/* Second Carousel */}
        <div className="relative">
          <OwlCarousel className="owl-theme" {...carouselOptions}>
            {events2.map((event, index) => (
              <div key={index} className="p-2">
                <EventCard event={event} />
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default ProductsAndProjects;