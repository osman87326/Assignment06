import React from 'react';
import user from '../assets/user.png';
import packages from '../assets/products/package.png';
import rocketss from '../assets/products/rocket-2.png';

const GetStarted = () => {
  return (
    <div className="py-16">
      {/* Heading */}
      <div className="text-center space-y-2 mb-10">
        <h1 className="text-4xl font-bold">Get Started in 3 Steps</h1>
        <p className="text-[#627382]">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      {/* Cards */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">

        {/* Card 1 */}
        <div className="card bg-base-100 w-80 shadow-sm relative">
          <p className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F39F6] text-white font-bold">
            1
          </p>

          <figure className="px-10 pt-10">
            <img src={user} alt="user" className="rounded-xl" />
          </figure>

          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Create Account</h2>
            <p>
              Sign up for free in seconds. <br />
              No credit card required to get started.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 w-80 shadow-sm relative">
          <p className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F39F6] text-white font-bold">
            2
          </p>

          <figure className="px-10 pt-10">
            <img src={packages} alt="package" className="rounded-xl" />
          </figure>

          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Choose Products</h2>
            <p>
              Browse and select tools that match your needs easily.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 w-80 shadow-sm relative">
          <p className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F39F6] text-white font-bold">
            3
          </p>

          <figure className="px-10 pt-10">
            <img src={rocketss} alt="rocket" className="rounded-xl" />
          </figure>

          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Get Started</h2>
            <p>
              Launch your workflow instantly with powerful tools.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GetStarted;