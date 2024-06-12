import React, { useState } from "react";
import logo from "../images/myntra.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="shadow-md h-[17] bg-[#FFFFFF] z-[3] border-b-2 border-[#FFFFFF]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="w-30 h-10 mb-2 ml-[-8]">
            <img src={logo} className="h-16 w-28" alt="Myntra logo" />
          </div>
        </a>
        <div className="flex md:order-2 items-center">
          <button
            type="button"
            onClick={handleToggle}
            aria-controls="navbar-search"
            aria-expanded={isMenuOpen}
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <div className="relative hidden md:block w-80">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-6 h-4 focus:bg-[white] "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="text-slate-200 w-full h-10 font-normal bg-[#F5F5F6] pl-[40px] rounded focus:bg-[white] focus:outline-none focus:border-[2px]"           
              placeholder="Search for products,brands and more"
            />
          </div>
          <div className="flex items-center space-x-8 ms-4 ml-2">
            <Link to="/login">
              <div className="flex 1 flex flex-col hover:underline">
                {/* profile icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 ml-2 stroke-1 cursor-pointer hover:underline "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <span classname="w-5 ml-4 font-thin">
                  <small>Profile</small>
                </span>
              </div>
            </Link>{" "}
            <Link to="/wishlist">
              <div classname="flex justify-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 ml-2 stroke-1 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                <span classname="w-6 font-thin flex justify-center">
                  <small>Wishlist</small>
                </span>
              </div>
            </Link>{" "}
            <Link to="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mx-auto stroke-1 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <span classname="w-6 font-thin justify-center text-center">
                <small> Bag</small>
              </span>
            </Link>{" "}
          </div>
          <button
            onClick={handleToggle}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search.."
            />
          </div>
          <ul className="flex flex-col p-8 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8  rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li >
              <Link to ='/products'
              
                className="block py-2 px-3 hover:underline rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black-500 "
             
              >
                MEN
              </Link>
            </li>
            <li >
            <Link to ='/products'
              
              className="block py-2 px-3 hover:underline rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black-500 "
           
            >
                WOMEN
              </Link>
            </li>
            <li>
            <Link to ='/products'
              
              className="block py-2 px-3 hover:underline rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black-500 "
           
            >
                KIDS
              </Link>
            </li>
            <li >
            <Link to ='/products'
              
              className="block py-2 px-3 hover:underline rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black-500 "
           
            >
                HOME & LIVING
              </Link>
            </li>
            <li >
            <Link to ='/products'
              
              className="block py-2 px-3 hover:underline rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black-500 "
           
            >
                BEAUTY
              </Link>
            </li>
            <li>
            <Link to ='/products'
              
              className="block py-2 px-3 hover:underline rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black-500 "
           
            >
                STUDIO <sup className="text-[#FF3F6C]">NEW</sup>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
