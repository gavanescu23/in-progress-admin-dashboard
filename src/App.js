import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { HiSquares2X2, HiOutlineShoppingCart, HiOutlineUser, HiOutlineSquare3Stack3D } from "react-icons/hi2";
import React, { useState } from 'react';
import DashBoard from './components/DashBoard';
import RecentOrders from './components/RecentOrders';

function App() {
  const [isSelected, setIsSelected] = useState('0');

  const handleClick = (e) => {
    //console.log(e.target);
    const { name } = e.target;
    setIsSelected(name);
    //console.log(isSelected);
  }
  return (
    <>
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className='flex flex-grow h-screen bg-gray-300'>
        <div className='drawer-navigation border-r max-w-[150px] m-3'>
          <button name='1' onClick={handleClick} className='flex justify-center items-center pr-4'><HiSquares2X2 size={40}></HiSquares2X2>Dashboard</button>
          <button name='2' onClick={handleClick} className="flex justify-center items-center pr-4"><HiOutlineShoppingCart size={40} />Orders</button>
          <button name='3' onClick={handleClick} className="flex justify-center items-center pr-4"><HiOutlineUser size={40}></HiOutlineUser>Customers</button>
          <button name='4' onClick={handleClick} className="flex justify-center items-center pr-4"><HiOutlineSquare3Stack3D size={40}></HiOutlineSquare3Stack3D>Inventory</button>
        </div>

        {/* <ChartOne></ChartOne> */}
        {isSelected === '1' && <DashBoard></DashBoard>}
        {isSelected === '2' && <div><RecentOrders></RecentOrders></div>}
      </div>
      <Footer></Footer>
    </div>
    </>
  );
}

export default App;
