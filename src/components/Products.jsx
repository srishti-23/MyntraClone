import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Navbar from "./Navbar";

function Products({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from API
    fetch(`https://fakestoreapi.com/products/`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
    <Navbar/>
      <div>
        <h1 className="my-4 text-2xl text-center">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-6">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center">
              <Link to={`/product/${product.id}`}>
                <Carousel showThumbs={false} className="w-full">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-56 object-contain"
                  />
                </Carousel>
              </Link>
              <div className="mt-4 w-full flex flex-col items-center">
                <Link to={`/wishlist/${product.id}`} className="w-full">
                  <div className="flex justify-center border border-gray-500 hover:border-black p-2 w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 mr-1 stroke-1 cursor-pointer"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                    <span className="text-black font-medium">
                      <small>Wishlist</small>
                    </span>
                  </div>
                </Link>
              </div>
              <div className="w-full mt-2 text-center">
                <p className="truncate font-bold text-[#282C3F]">{product.title}</p>
                <h1 className="truncate capitalize font-medium text-md text-[#535665]">
                  {product.category}
                </h1>
              </div>
              <div className="flex items-center justify-center mt-2">
                <h1 className="text-[#282C3F]">{"₹" + product.price}</h1>
                <h1 className="text-gray-400 line-through text-sm ml-2">
                  ₹ {product.price + 500}
                </h1>
                <h1 className="text-xs text-orange-400 ml-2">(50% OFF)</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
