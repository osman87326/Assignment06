import React from 'react';
import banner from '../assets/banner.png'

const Banner = () => {
    return (
        <div className='container mx-auto justify-end m-30 grid sm:grid-cols-2 grid-cols-1 '>
            <div>
                <div className='space-y-5'>
                <h1 className='text-[#4F39F6] bg-[#E1E7FF] p-2 w-75 rounded-4xl mt-6'>New: AI-Powered Tools Available</h1>
                <h1 className='text-5xl font-bold text-[#101727] 
                '>Supercharge Your <br></br>Digital Workflow</h1>
                <p className='text-xl text-[#627382]'>Access premium AI tools, design assets, templates, and productive <br /> software— all in one place. Start creating faster today. <br /> Explore ProductsExplore Product.</p>
                <div className='gap-8'>
                    <button className="btn rounded-3xl text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">Explore Products</button>
                    <button className="btn rounded-3xl text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">Watch Demo</button>
                </div>

                
            </div>

              
            </div>

            <div>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;