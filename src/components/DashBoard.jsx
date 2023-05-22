import React from "react";
import { HiCurrencyEuro } from "react-icons/hi2";
import ChartOne from "./ChartOne";
import {
  HiOutlineShoppingCart,
  HiOutlineUser,
  HiOutlineSquare3Stack3D,
} from "react-icons/hi2";

const DashBoard = () => {
    
  return (
    <>
      <div className="flex flex-col text-bold text-[35px] m-4">
        <p className="xl:text-[35px] sm:text-[25px]">Dashboard</p>
        <div className="flex justify-start text-[15px]">
          <div className="flex justify-center flex-col items-center border h-32 xl:w-32 sm:w-[70px] rounded-lg bg-gray-200 m-3 sm:text-[15px] xl:text-[20px]">
            <HiOutlineShoppingCart
              color="rgb(0, 255, 25)"
              size={30}
            ></HiOutlineShoppingCart>
            Orders<p className="text-[18px]">1,2345</p>
          </div>
          <div className="flex justify-center flex-col items-center border h-32 xl:w-32 sm:w-[70px] rounded-lg bg-gray-200 m-3 sm:text-[15px] xl:text-[20px]">
            <HiOutlineSquare3Stack3D
              color="rgb(140, 0, 255)"
              size={30}
            ></HiOutlineSquare3Stack3D>
            Inventory <p className="text-[18px]">1,2345</p>
          </div>
          <div className="flex justify-center flex-col items-center border h-32 xl:w-32 sm:w-[70px] rounded-lg bg-gray-200 m-3 sm:text-[15px] xl:text-[20px]">
            <HiOutlineUser color="rgb(0, 200, 255)" size={30}></HiOutlineUser>
            Customers <p className="text-[18px]">1,2345</p>
          </div>
          <div className="flex justify-center flex-col items-center border h-32 xl:w-32 sm:w-[70px] rounded-lg bg-gray-200 m-3 sm:text-[15px] xl:text-[20px]">
            <HiCurrencyEuro color="rgb(255, 0, 0)" size={30}></HiCurrencyEuro>
            Revenue <p className="text-[18px]">1,2345</p>
          </div>
        </div>
      </div>
     <ChartOne></ChartOne>
    </>
  );
};

export default DashBoard;
