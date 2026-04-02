import React from 'react';

const WorkFlow = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] '>
            <div className='container mx-auto text-center p-20 space-y-4'>
                <h1 className='text-4xl font-bold text-white'>Ready to Transform Your Workflow?</h1>
                <p className=' text-white'>Join thousands of professionals who are already using Digitools to work smarter. <br />
                Start your free trial today.</p>
                <div >
                    <button className="btn rounded-3xl mr-4 bg-white text-[#4F39F6]">Explore Products</button>
                    <button className="btn rounded-3xl text-white border-2 bg-[#4F39F6]">View Pricing</button>
                </div>
                <p className='text-white'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default WorkFlow;