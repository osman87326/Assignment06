import React from 'react';

const Pricing = () => {
    return (
        <div className='container mx-auto mb-20'>
            <div className='text-center space-y-2'>
                <h1 className='text-4xl font-bold'>Simple, Transparent Pricing</h1>
                <p className='text-[#627382]'>Start using premium digital tools
                     in minutes, not hours.</p>
            </div>

        
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-center  py-6'>

        <div>
            <div className="card w-96 bg-base-100 shadow-sm
        ">
  <div className="card-body">
    <img src="" alt="" />
    <div className="justify-between space-y-2 ">
      <h2 className="text-3xl font-bold">Starter</h2>
      <p className='text-[#627382]'>Perfect for getting started</p>
      <span className="text-xl"><span className='text-4xl font-bold'>$0</span>/mo</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" 
        className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to 10 free tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Basic templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Community support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>1 project per month</span>
      </li>
      
    </ul>
    <div>
      <button className="btn w-full rounded-3xl 
      text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]
      ">Explore Products</button>
    </div>
  </div>
</div>
        </div>
         
         {/* 2nd cart */}
         <div>
            <div className="card w-96 bg-base-100 shadow-sm 
            bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white">
  <div className="card-body">
    <span className="bg-amber-200 px-1.5 py-1 rounded-3xl
    w-40 text-[#BB4D00]">Most Popular</span>
    <img src="" alt="" />
    <div className="justify-between space-y-2 ">
      <h2 className="text-3xl font-bold">Pro</h2>
      <p className='text-white'>Best for professionals</p>
      <span className="text-xl"><span className='text-4xl font-bold'>$29</span>/mo</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span >Access to all premium tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span >Basic templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span >Unlimited templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Priority support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited projects</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Cloud sync</span>
      </li>
      
    </ul>
    <div>
      <button className="btn w-full rounded-3xl text-[#4F39F6] 
      bg-white">Advanced analytics</button>
    </div>
  </div>
</div>
        </div>
         {/* 3nd cart */}
         <div>
            <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
    
    <img src="" alt="" />
    <div className="justify-between space-y-2 ">
      <h2 className="text-3xl font-bold">Starter</h2>
      <p className='text-[#627382]'>Perfect for getting started</p>
      <span className="text-xl"><span className='text-4xl font-bold'>$0</span>/mo</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to 10 free tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Basic templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Community support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>1 project per month</span>
      </li>
      
    </ul>
    <div>
      <button className="btn w-full rounded-3xl text-white 
      bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">Explore Products</button>
    </div>
  </div>
</div>
        </div>
    

    </div>

        </div>
    );
};

export default Pricing;