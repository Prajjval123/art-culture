import React from 'react';

// Dummy product data
const dummyProducts = [
  {
    id: 1,
    title: "Product 1",
    description: "Fiberglass Animal Statue installed at kolkata, India. Desgining ,modelling and casting is done by our Artists.",
    image: "/assets/projectproducts/product1.jpg",
  },
  {
    id: 2,
    title: "Product 2",
    description: "Abstract Mild Steel Sculpture installed at Aurobindo Marg New Delhi, India. Desgining ,modelling, Fabrication is done by our Artists in our worshop.",
    image: "/assets/projectproducts/product2.jpg",
  },
  {
    id: 3,
    title: "Product 3",
    description: "Copper Repousse and Engraving Work, Size 13 feet x 7 feet. Installed at EIL- Engineers India Liited, Gurgoan.",
    image: "/assets/projectproducts/product3.jpg",
  },
  {
    id: 4,
    title: "Product 4",
    description: "Fiberglass Animal Statue installed at kolkata, India. Desgining ,modelling and casting is done by our Artists.",
    image: "/assets/projectproducts/product1.jpg",
  },
  {
    id: 5,
    title: "Product 5",
    description: "Black Granite Statue",
    image: "/assets/projectproducts/product2.jpg",
  },
  {
    id: 6,
    title: "Product 6",
    description: "Ganesha Stone statue 8 ft height",
    image: "/assets/projectproducts/product3.jpg",
  },
  {
    id: 7,
    title: "Product 7",
    description: "Fiberglass Animal Statue installed at kolkata, India. Desgining ,modelling and casting is done by our Artists.",
    image: "/assets/projectproducts/product1.jpg",
  },
  {
    id: 8,
    title: "Product 8",
    description: "Black Granite Statue",
    image: "/assets/projectproducts/product2.jpg",
  },
  {
    id: 9,
    title: "Product 9",
    description: "Ganesha Stone statue 8 ft height",
    image: "/assets/projectproducts/product3.jpg",
  },
  {
    id: 10,
    title: "Product 10",
    description: "Fiberglass Animal Statue installed at kolkata, India. Desgining ,modelling and casting is done by our Artists.",
    image: "/assets/projectproducts/product1.jpg",
  },
  {
    id: 11,
    title: "Product 11",
    description: "Black Granite Statue",
    image: "/assets/projectproducts/product2.jpg",
  },
  {
    id: 12,
    title: "Product 12",
    description: "Ganesha Stone statue 8 ft height",
    image: "/assets/projectproducts/product3.jpg",
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
    <div className="p-4 pb-30">
      <p className="text-gray-600 text-sm text-justify ">{product.description}</p>
    </div>
  </div>
);

const ProjectsProducts = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-8xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Projects &amp; Products
        </h1>
        <div className="flex justify-center mb-6">
          <div className="flex space-x-4 py-4 px-24 rounded-lg w-full">
            <select className="p-2 border border-gray-300 rounded min-w-2xs appearance-none" style={{ backgroundImage: "src/assets/projectproducts/dropdown/dropdown-svg.svg", backgroundRepeat: "no-repeat", backgroundPosition: "right 0.5rem center", backgroundSize: "1rem" }}>
              <option>Any Category</option>
              <option>SCULPTURE</option>
              <option>PAINTING</option>
              <option>STATUE</option>
              <option>MURAL</option>
              <option>OTHERS</option>
            </select>
            <select className="p-2 border border-gray-300 rounded min-w-2xs">
              <option>All Subcategory</option>
            </select>
            <input type="text" placeholder="Search" className="p-2 border border-gray-300 rounded flex-grow" />
            <button className="p-2 bg-red-500 text-white rounded min-w-24">Search</button>
            <button className="p-2 bg-gray-300 text-black rounded min-w-24">Reset</button>
          </div>
        </div>
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
