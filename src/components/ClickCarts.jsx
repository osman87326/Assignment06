import React from 'react';
import { toast } from 'react-toastify';


const ClickCarts = ({clickCarts,setClickCarts}) => {
    const totalPrice = clickCarts.reduce ((sum,item) => sum + item.price, 0)
       const handlePayBtn = () => {
        setClickCarts([]);
        toast.success("Proceed to check-out");
    }
    const handleDeleteBtn = (item) => {
         const filterArray = clickCarts.filter(c => c.id !== item.id)   
         setClickCarts(filterArray);  
         toast.error("Deleted from cart");   
    }
 
    return (
        <div className='container mx-auto m-20'>
            <div>
                {
                    (clickCarts.length === 0 &&
                         <p className='text-2xl text-center p-50'>Cart is empty</p> )
                }
                {
                clickCarts.map(item =>  
            
                    <div key = {item.id}>
                        <div className='justify-between flex p-4 bg-gray-50 mb-5'>
                        <div className='flex'>
                            
                            <div>
                                <p>{item.icon}</p>
                                <h1 className='text-xl font-bold py-5'>{item.name}</h1>
                           <h1 className='font-bold'>${item.price}</h1>
                            </div>
                        </div>
                        <div className='flex'>
                            
                            <div className='flex gap-2'>
                                
                                <img src="" alt="" />
                                <div>
                                    <button onClick={() => {handleDeleteBtn(item)}}
                                    className="btn btn-soft btn-error ">Remove</button>
                                </div>
                            </div>
                        </div>
                        </div>
                        
                     </div>
                )
               }
            </div>
            {
                clickCarts.length > 0 && <div className='text-2xl font-bold flex justify-between'>
                 <h1>Total</h1>
                 <p>{totalPrice}$</p>
            </div>
            }
             {
               clickCarts.length >0 &&  <div onClick={handlePayBtn} >
                 <h1 className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] font-bold 
                 text-white mt-2 text-4xl text-center p-3 rounded-4xl'>Proceed to Checkout</h1>
            </div>
             }
            
        </div>
    );
};

export default ClickCarts;