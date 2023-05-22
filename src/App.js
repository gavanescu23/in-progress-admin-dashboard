import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import {
  HiSquares2X2,
  HiOutlineShoppingCart,
  HiOutlineUser,
  HiOutlineSquare3Stack3D,
} from "react-icons/hi2";
import React, { useState } from "react";
import DashBoard from "./components/DashBoard";
import RecentOrders from "./components/RecentOrders";
import ChartOne from "./components/ChartOne";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function App() {
  const [isSelected, setIsSelected] = useState("0");
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClick = (e) => {
    const { name } = e.target;
    setIsSelected(name);
  };
  return (
    <>
      <div className="flex flex-col h-screen w-screen">
        <NavBar></NavBar>
        <div className="flex flex-grow h-screen w-screen bg-gray-300">
        <div onClick={handleNav} className="flex flex-row-reverse md:hidden">
    {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
  </div>
      {!nav ? <div className="invisible md:visible drawer-navigation border-r max-w-[150px] m-3">
              <button
                name="1"
                onClick={handleClick}
                className="flex justify-center items-center pr-4"
              >
                <HiSquares2X2 size={40}></HiSquares2X2>Dashboard
              </button>
              <button
                name="2"
                onClick={handleClick}
                className="flex justify-center items-center pr-4"
              >
                <HiOutlineShoppingCart size={40} />
                Orders
              </button>
              <button
                name="3"
                onClick={handleClick}
                className="flex justify-center items-center pr-4"
              >
                <HiOutlineUser size={40}></HiOutlineUser>Customers
              </button>
              <button
                name="4"
                onClick={handleClick}
                className="flex justify-center items-center pr-4"
              >
                <HiOutlineSquare3Stack3D size={40}></HiOutlineSquare3Stack3D>
                Inventory
              </button>
            </div>
           :
           <ul className={nav ? 'md:hidden fixed mt-[105px] right-0 top-0 w-[30%] h-full border-r border-r-gray-900 bg-gray-700 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
           {/*<div className="hidden drawer-navigation border-r max-w-[150px] m-3">*/}
           <button
             name="1"
             onClick={handleClick}
             className="flex justify-center items-center pr-4"
           >
             <HiSquares2X2 size={40}></HiSquares2X2>Dashboard
           </button>
           <button
             name="2"
             onClick={handleClick}
             className="flex justify-center items-center pr-4"
           >
             <HiOutlineShoppingCart size={40} />
             Orders
           </button>
           <button
             name="3"
             onClick={handleClick}
             className="flex justify-center items-center pr-4"
           >
             <HiOutlineUser size={40}></HiOutlineUser>Customers
           </button>
           <button
             name="4"
             onClick={handleClick}
             className="flex justify-center items-center pr-4"
           >
             <HiOutlineSquare3Stack3D size={40}></HiOutlineSquare3Stack3D>
             Inventory
           </button>
         {/*</div>*/}
         </ul>
}
{isSelected === "1" && <DashBoard></DashBoard>}
{isSelected === "2" && <RecentOrders></RecentOrders>}

          {/* <ChartOne></ChartOne> */}

        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
