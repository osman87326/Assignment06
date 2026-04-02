import React from 'react';
import user from '../assets/user.png';
import packages from '../assets/products/package .png'
import rocketss from '../assets/products/rocket (2).png'


const GetStarted = () => {
    return (
        <div className='items-center justify-center'>
          <div className='text-center space-y-2'>
            <h1 className='text-4xl font-bold '>Get Started in 3 Steps</h1>
            <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
          </div>

           <div  className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-4 
            sm:grid-cols-3 justify-center m-30'>
             <div className="card bg-base-100 w-96 shadow-sm">
                <p className=' absolute right-[10%] -top-[2%] 
     btn rounded-full bg-[#4F39F6] text-white'>1</p>
  <figure className="px-10 pt-10">
    <img
      src={user}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
            <div className="card-body items-center text-center">
    <h2 className="card-title font-bold">Create Account</h2>
    <p>Sign up for free in seconds. <br /> No credit card required to get started.</p>
    
            </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <p className=' absolute right-[10%] -top-[2%] 
     btn rounded-full bg-[#4F39F6] text-white'>2</p>
  <figure className="px-10 pt-10">
    <img
      src={packages}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold">Choose Products</h2>
    <p>Sign up for free in seconds. <br /> No credit card required to get started.</p>
    
  </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <p className=' absolute right-[10%] -top-[2%] 
     btn rounded-full bg-[#4F39F6] text-white'>3</p>
  <figure className="px-10 pt-10">
    <img
      src={rocketss}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold">Choose Products</h2>
    <p>Sign up for free in seconds. <br /> No credit card required to get started.</p>
    
  </div>
            </div>
           </div>
        </div>
    );
};

export default GetStarted;