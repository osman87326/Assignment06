import React from 'react';
import digitalTool from "../assets/DigiTools.png";
import shopping from "../assets/shopping.png";

const NavBar = ({ clickCarts }) => {
  return (
    <div className="sticky top-0 z-50 bg-base-100 shadow-sm">
      <div className="container mx-auto navbar">

        {/* LEFT */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50">
              <li><a>Products</a></li>
              <li><a>Features</a></li>
              <li><a>Pricing</a></li>
              <li><a>Testimonial</a></li>
              <li><a>FAQ</a></li>
            </ul>
          </div>

          {/* Logo */}
          <img className="w-36 h-10" src={digitalTool} alt="logo" />
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonial</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end flex items-center gap-5">

          {/* Cart */}
          <div className="relative">
            <img className="h-5 w-5 cursor-pointer" src={shopping} alt="cart" />

            <span className="absolute -top-2 -right-2 
              bg-[#4F39F6] text-white text-xs 
              px-2 py-[2px] rounded-full">
              {clickCarts.length}
            </span>
          </div>

          {/* Login */}
          <h1 className="cursor-pointer">Login</h1>

          {/* Button */}
          <a className="btn rounded-3xl text-white 
            bg-gradient-to-r from-[#4F39F6] to-[#9514FA] 
            px-5">
            Get started
          </a>

        </div>

      </div>
    </div>
  );
};

export default NavBar;