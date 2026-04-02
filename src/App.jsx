
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Body from './components/Body'
import Count from './components/Count'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import WorkFlow from './components/WorkFlow'
import Cart from './components/Cart'
import ClickCarts from './components/ClickCarts'
import Pricing from './components/Pricing'
import GetStarted from './components/GetStarted'



function App() {
  const getTool = async () => {
    const res = await fetch("/data.json");
    return res.json()
  }
  const toolPromise = getTool();
  const [activeTab, setActiveTab] = useState('product')
  const [clickCarts, setClickCarts] = useState([]);
  return (
    <>
     <NavBar clickCarts={clickCarts}></NavBar>
     <Banner></Banner>
     <Count></Count>
     <div className='m-20 space-y-4'>
                <h1 className='text-5xl font-bold text-center'>Premium Digital Tools</h1>
                <p className='text-center text-[#627382]' >Choose from our curated collection of premium digital <br /> products designedto boost your
                     productivity and creativity.</p>
            </div>
     {/* name of each tab group should be unique */}
<div 
 className="tabs  justify-center gap-10">
  <input onClick={() => setActiveTab('product')}

   type="radio" name="my_tabs_1" className="tab text-2xl rounded-4xl
   btn btn-outline btn-primary " aria-label="Products" defaultChecked />

  <input  onClick={() => setActiveTab('carts')}
  type="radio" name="my_tabs_1" className="tab text-2xl rounded-4xl  btn btn-outline btn-primary
  " aria-label={`Carts (${clickCarts.length})` } />
  
</div>
    <Suspense>
       {activeTab === 'product' && <Body toolPromise={toolPromise} clickCarts= {clickCarts} 
       setClickCarts = {setClickCarts} ></Body>}
       {activeTab === 'carts' && <ClickCarts clickCarts= {clickCarts} 
       setClickCarts = {setClickCarts} ></ClickCarts>}
    </Suspense>

    <GetStarted></GetStarted>
    
     <Pricing></Pricing>
     <WorkFlow></WorkFlow>
     <Footer></Footer>
    </>
  )
}

export default App