import React from 'react';

// Dummy product data
const dummyProducts = [
  {
    id: 1,
    title: "Product 1",
    description: "Fiberglass Animal Statue installed at kolkata, India. Desgining ,modelling and casting is done by our Artists.",
    image: "src/assets/projectproducts/product1.jpg",
  },
  {
    id: 2,
    title: "Product 2",
    description: "Black Granite Statue",
    image: "src/assets/projectproducts/product2.jpg",
  },
  {
    id: 3,
    title: "Product 3",
    description: "Ganesha Stone statue 8 ft height",
    image: "src/assets/projectproducts/product3.jpg",
  },
  {
    id: 4,
    title: "Product 4",
    description: "Fiberglass Animal Statue installed at kolkata, India. Desgining ,modelling and casting is done by our Artists.",
    image: "src/assets/projectproducts/product1.jpg",
  },
  {
    id: 5,
    title: "Product 5",
    description: "Black Granite Statue",
    image: "src/assets/projectproducts/product2.jpg",
  },
  {
    id: 6,
    title: "Product 6",
    description: "Ganesha Stone statue 8 ft height",
    image: "src/assets/projectproducts/product3.jpg",
  },
  {
    id: 7,
    title: "Product 7",
    description: "Fiberglass Animal Statue installed at kolkata, India. Desgining ,modelling and casting is done by our Artists.",
    image: "src/assets/projectproducts/product1.jpg",
  },
  {
    id: 8,
    title: "Product 8",
    description: "Black Granite Statue",
    image: "src/assets/projectproducts/product2.jpg",
  },
  {
    id: 9,
    title: "Product 9",
    description: "Ganesha Stone statue 8 ft height",
    image: "src/assets/projectproducts/product3.jpg",
  },
  {
    id: 10,
    title: "Product 10",
    description: "Fiberglass Animal Statue installed at kolkata, India. Desgining ,modelling and casting is done by our Artists.",
    image: "src/assets/projectproducts/product1.jpg",
  },
  {
    id: 11,
    title: "Product 11",
    description: "Black Granite Statue",
    image: "src/assets/projectproducts/product2.jpg",
  },
  {
    id: 12,
    title: "Product 12",
    description: "Ganesha Stone statue 8 ft height",
    image: "src/assets/projectproducts/product3.jpg",
  },
];

// Product card component
const ProductCard = ({ product }) => (
  <div className=" bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="relative">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-96 object-cover"
      />
      {/* Optional overlay on hover */}
      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
    </div>
    <div className="p-4 pb-20">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h3>
      <p className="text-gray-600 text-sm">{product.description}</p>
    </div>
  </div>
);

const ProjectsProducts = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-8xl mx-auto px-12 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Projects &amp; Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dummyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsProducts;
