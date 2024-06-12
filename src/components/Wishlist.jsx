import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";

function Wishlist() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch individual product data from API
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const addToCart = (product) => {
    dispatch({
      type: "ADDITEM",
      payload: product,
    });
  };

  const removeFromWishlist = (productId) => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist = wishlist.filter((item) => item.id !== productId);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    setProduct(null); // Removing from the state to reflect the change
  };

  useEffect(() => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (product) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  }, [product]);

  return (
    <>
      <Navbar />
      <div className="w-full mt-10 px-4">
        <h1 className="text-xl mt-8 text-[#282C3F] m-10 font-medium ">
          My Wishlist
        </h1>
        {product ? (
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:m-12 flex justify-center items-center">
              <img
                src={product.image}
                alt="items"
                className="w-auto max-w-sm h-auto object-contain"
              />
            </div>
            <div className="mt-4 md:mt-0 md:ml-8 flex flex-col items-center md:items-start">
              <div className="text-black">
                <h1 className="mt-6 ml-4 capitalize text-3xl mb-4 text-center md:text-left">
                  {product.title}
                </h1>
                <h1 className="m-4 capitalize text-3xl text-center md:text-left">
                  {product.category}
                </h1>
                <p className="m-4 text-gray-500 font-medium text-center md:text-left">
                  {product.description}
                </p>
                <div className="flex items-center justify-center md:justify-start">
                  <h1 className="text-[#282C3F] ml-4">{"₹" + product.price}</h1>
                  <h1 className="text-gray-400 line-through text-sm ml-1 mt-1">
                    ₹ {product.price + 500}
                  </h1>
                  <h1 className="text-xs text-orange-400 ml-2">(50% OFF)</h1>
                </div>
              </div>
              <div className="mt-4 ml-4 flex flex-col md:flex-row items-center">
                <button
                  className="border flex items-center justify-center font-medium border-[#FF527B] text-[#FF527B] bg-[#FF526B] text-white px-4 py-2 rounded-md mb-4 md:mb-0 md:mr-4 w-full md:w-auto"
                  onClick={() => addToCart(product)}
                >
                  <Link to="/cart" className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                    ADD TO BAG
                  </Link>
                </button>
                <button
                  className="border flex items-center justify-center font-medium border-[#FF527B] text-[#FF527B] bg-[#FF526B] text-white px-4 py-2 rounded-md w-full md:w-auto"
                  onClick={() => removeFromWishlist(product.id)}
                >
                  REMOVE FROM WISHLIST
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center">Loading...</p>
        )}
      </div>
    </>
  );
}

export default Wishlist;
