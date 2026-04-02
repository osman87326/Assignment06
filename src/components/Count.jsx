import React from 'react';

const Count = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='container mx-auto py-10 text-4xl font-bold text-white  grid grid-cols-3 
        flex text-center'>
           <div >
            <h1>50K+</h1> 
            <p className='text-xl font-light'>Active users</p>
           </div>
           <div >
            <h1>200+</h1> 
            <p className='text-xl font-light'>Premium Tool</p>
           </div>
           <div >
            <h1>4.9</h1> 
            <p className='text-xl font-light'>Rating</p>
           </div>
        </div>
        </div>
    );
};

export default Count;